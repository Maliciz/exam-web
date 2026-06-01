import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Card, CardContent, Typography, Button, Stack, CircularProgress, Skeleton, Alert, AlertTitle } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import ReplayIcon from '@mui/icons-material/Replay';

export default function ConceptQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Artificial delay to demonstrate loading state and skeleton
    const timer = setTimeout(() => {
      axios.get('/quiz.json')
        .then((response) => {
          setQuestions(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching quiz:", err);
          setError("Failed to load quiz questions. Please check if public/quiz.json exists.");
          setLoading(false);
        });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelect = (optionIdx) => {
    if (isAnswered) return;
    setSelectedAnswer(optionIdx);
    setIsAnswered(true);

    if (optionIdx === questions[currentIdx].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Loading skeleton and CircularProgress combined
  if (loading) {
    return (
      <Box className="py-20 bg-slate-900/10">
        <Container maxWidth="md">
          <Card className="cyber-glass border-slate-800 p-6">
            <CardContent>
              {/* Header Skeleton */}
              <Box className="flex items-center gap-3 mb-6">
                <Skeleton variant="circular" width={40} height={40} className="bg-slate-800" />
                <Skeleton variant="text" width="60%" height={32} className="bg-slate-800" />
              </Box>

              {/* Central Loader Spinner */}
              <Box className="flex flex-col items-center justify-center py-10 border border-dashed border-slate-800 rounded-xl bg-slate-950/40 mb-6">
                <CircularProgress color="primary" className="mb-4" />
                <Typography variant="body2" className="text-cyan-400 font-mono animate-pulse">
                  Querying local thread data via Axios...
                </Typography>
              </Box>

              {/* Content Skeleton */}
              <Stack spacing={2}>
                <Skeleton variant="rectangular" height={24} className="bg-slate-800 rounded" />
                <Skeleton variant="rectangular" height={50} className="bg-slate-800 rounded" />
                <Skeleton variant="rectangular" height={50} className="bg-slate-800 rounded" />
                <Skeleton variant="rectangular" height={50} className="bg-slate-800 rounded" />
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  // Error State
  if (error) {
    return (
      <Box className="py-20 bg-slate-900/10">
        <Container maxWidth="md">
          <Alert severity="error" className="bg-red-950/50 text-red-200 border border-red-800/40">
            <AlertTitle className="font-bold">Axios Fetch Failure</AlertTitle>
            {error}
          </Alert>
        </Container>
      </Box>
    );
  }

  const currentQuestion = questions[currentIdx];

  return (
    <Box id="quiz" className="py-20 bg-slate-900/10 relative">
      <Container maxWidth="md">
        {/* Section Header */}
        <Box className="text-center mb-12">
          <Box className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 text-xs font-mono mb-4 uppercase tracking-wider">
            <QuizIcon fontSize="inherit" />
            <span>Interactive Assessment</span>
          </Box>
          <Typography variant="h3" component="h2" className="text-white font-bold mb-3 font-sans">
            Concept Check
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-xl mx-auto">
            Test your understanding of memory allocation and data mutability.
          </Typography>
        </Box>

        <Card 
          className="cyber-glass-blue border-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.05)] overflow-hidden"
          sx={{ border: '1px solid rgba(0, 240, 255, 0.12)' }}
        >
          {/* Progress Header */}
          <Box className="bg-slate-950/80 px-6 py-4 border-b border-slate-900 flex justify-between items-center">
            <Typography variant="subtitle2" className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
              <HelpOutlinedIcon fontSize="inherit" />
              Question {currentIdx + 1} of {questions.length}
            </Typography>
            <span className="text-xs font-mono text-slate-500">
              Score: {score} / {questions.length}
            </span>
          </Box>

          <CardContent className="p-6">
            {!quizFinished ? (
              <Box>
                {/* Question Text */}
                <Typography variant="h6" component="h3" className="text-white font-semibold mb-6 leading-relaxed">
                  {currentQuestion.question}
                </Typography>

                {/* Multiple Choices */}
                <Stack spacing={2} className="mb-6">
                  {currentQuestion.options.map((option, idx) => {
                    // Styling logic based on answer states
                    let borderClass = 'border-slate-800 bg-slate-950/40 text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-950/5';
                    let icon = null;

                    if (isAnswered) {
                      if (idx === currentQuestion.correctIndex) {
                        borderClass = 'border-green-500/50 bg-green-950/20 text-green-300';
                        icon = <CheckCircleIcon className="text-green-500 text-sm ml-auto animate-bounce" />;
                      } else if (idx === selectedAnswer) {
                        borderClass = 'border-red-500/50 bg-red-950/20 text-red-300';
                        icon = <CancelIcon className="text-red-500 text-sm ml-auto" />;
                      } else {
                        borderClass = 'border-slate-900/60 bg-slate-950/20 text-gray-500 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg border font-mono text-xs md:text-sm flex items-center transition-all duration-300 ${borderClass}`}
                      >
                        <span className="mr-3 font-bold text-slate-500">{String.fromCharCode(65 + idx)}.</span>
                        <code className="text-left leading-normal">{option}</code>
                        {icon}
                      </button>
                    );
                  })}
                </Stack>

                {/* Feedback & Explanation Accordion-like block */}
                {isAnswered && (
                  <Box className={`rounded-lg p-4 border mb-6 animate-fadeIn ${
                    selectedAnswer === currentQuestion.correctIndex 
                      ? 'bg-green-950/10 border-green-500/20' 
                      : 'bg-red-950/10 border-red-500/20'
                  }`}>
                    <Typography className={`font-bold font-mono text-sm mb-1 ${
                      selectedAnswer === currentQuestion.correctIndex ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {selectedAnswer === currentQuestion.correctIndex ? '✓ Correct Answer!' : '✗ Incorrect Option.'}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300 leading-relaxed font-sans text-sm">
                      {currentQuestion.explanation}
                    </Typography>
                  </Box>
                )}

                {/* Action button */}
                {isAnswered && (
                  <Box className="flex justify-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="font-bold text-slate-950 shadow-neon-blue px-6 py-2"
                      sx={{
                        background: 'linear-gradient(90deg, #00f0ff 0%, #06b6d4 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #06b6d4 0%, #00f0ff 100%)',
                        }
                      }}
                    >
                      {currentIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </Button>
                  </Box>
                )}
              </Box>
            ) : (
              // Quiz Finished Screen
              <Box className="text-center py-8">
                <Box className="w-16 h-16 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mx-auto mb-6 shadow-neon-blue">
                  <QuizIcon className="text-cyber-blue text-3xl" />
                </Box>
                
                <Typography variant="h4" className="text-white font-bold mb-2">
                  Session Completed
                </Typography>
                
                <Typography variant="body1" className="text-gray-400 mb-6 max-w-xs mx-auto">
                  You scored <span className="text-cyber-blue font-bold font-mono text-lg">{score}</span> out of <span className="text-white font-mono text-lg">{questions.length}</span> questions correctly.
                </Typography>

                {score === questions.length ? (
                  <Typography className="text-green-400 font-mono text-sm font-bold mb-6">
                    🎉 Perfect Score! You have mastered JS memory allocation!
                  </Typography>
                ) : (
                  <Typography className="text-cyan-400 font-mono text-sm font-semibold mb-6">
                    Keep exploring! Review the stack vs heap concepts to get a 3/3.
                  </Typography>
                )}

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleRestart}
                  startIcon={<ReplayIcon />}
                  className="font-bold border-cyan-500/30 px-6 py-2"
                >
                  Try Again
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
