import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button, Stack, ButtonGroup } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import CodeIcon from '@mui/icons-material/Code';

export default function CoreDifferenceSection() {
  // States for Left (Value) Simulation
  const [valStep, setValStep] = useState(0);
  // States for Right (Reference) Simulation
  const [refStep, setRefStep] = useState(0);

  const nextValStep = () => {
    if (valStep < 3) setValStep(valStep + 1);
  };
  const resetValStep = () => setValStep(0);

  const nextRefStep = () => {
    if (refStep < 3) setRefStep(refStep + 1);
  };
  const resetRefStep = () => setRefStep(0);

  // Left side code lines
  const valCodeLines = [
    { code: 'let a = 10;', desc: 'Creates variable "a" and stores value 10 in the stack.' },
    { code: 'let b = a;', desc: 'Creates variable "b" and copies the value of "a" (10) into it.' },
    { code: 'b = 20;', desc: 'Reassigns "b" to 20. The value of "a" remains completely unchanged.' }
  ];

  // Right side code lines
  const refCodeLines = [
    { code: 'let obj1 = { x: 10 };', desc: 'Creates object in heap. Stores pointer address in stack variable "obj1".' },
    { code: 'let obj2 = obj1;', desc: 'Copies the pointer address from "obj1" to "obj2". Both point to the same heap object.' },
    { code: 'obj2.x = 20;', desc: 'Mutates property "x" on the heap object. Both variables reflect the updated value.' }
  ];

  return (
    <Box id="aha-moment" className="py-20 border-t border-slate-900 bg-slate-950 relative">
      <Box className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-3xl pointer-events-none" />
      <Box className="absolute top-10 right-10 w-96 h-96 bg-cyber-purple/5 rounded-full filter blur-3xl pointer-events-none" />

      <Container maxWidth="lg">
        {/* Section Title */}
        <Box className="text-center mb-16">
          <Box className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 text-cyber-blue border border-cyber-blue/20 text-xs font-mono mb-4 uppercase tracking-wider">
            <CodeIcon fontSize="inherit" />
            <span>Interactive Simulator</span>
          </Box>
          <Typography 
            variant="h3" 
            component="h2" 
            className="text-white font-bold mb-4"
            sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}
          >
            The Memory Workspace
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            Interact with the simulations below to see exactly how variables are updated in the memory structures on the stack and heap in real time.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* LEFT COLUMN: Primitive (Copy by Value) */}
          <Grid xs={12} md={6}>
            <Card className="cyber-glass-blue h-full flex flex-col justify-between border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.03)]">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Box className="flex justify-between items-center mb-4">
                  <Typography variant="h5" className="text-white font-bold font-sans">
                    Copying by Value (Primitives)
                  </Typography>
                  <span className="text-[10px] font-mono bg-cyan-950/40 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">
                    STACK ONLY
                  </span>
                </Box>

                <Typography variant="body2" className="text-gray-400 mb-6">
                  Primitive types store values directly in the stack. Copying creates a separate, independent duplicate of the value.
                </Typography>

                {/* Code Window */}
                <Box className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 font-mono text-sm mb-6 shadow-inner">
                  <div className="text-slate-500 text-xs mb-2 border-b border-slate-800 pb-1 flex justify-between">
                    <span>source_code.js</span>
                    <span className="text-cyan-400">Step {valStep} of 3</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {valCodeLines.map((line, idx) => (
                      <div 
                        key={idx} 
                        className={`p-1.5 rounded transition-all duration-300 ${
                          valStep > idx 
                            ? 'bg-slate-900/60 border-l-2 border-cyan-500 text-cyan-300' 
                            : 'text-slate-500'
                        }`}
                      >
                        <span className="mr-3 text-slate-700 select-none">{idx + 1}</span>
                        <code>{line.code}</code>
                        {valStep === idx + 1 && (
                          <div className="text-[10px] text-gray-400 font-sans mt-1 pl-6 leading-relaxed">
                            💡 {line.desc}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Box>

                {/* Simulation Control Buttons */}
                <Box className="mb-8 flex justify-center">
                  <ButtonGroup size="small">
                    <Button 
                      onClick={nextValStep} 
                      disabled={valStep === 3}
                      variant="contained" 
                      color="primary"
                      startIcon={<PlayArrowIcon />}
                      className="font-bold disabled:opacity-40"
                    >
                      {valStep === 0 ? 'Start Simulation' : 'Next Line'}
                    </Button>
                    <Button 
                      onClick={resetValStep} 
                      disabled={valStep === 0}
                      variant="outlined" 
                      color="primary"
                      startIcon={<ReplayIcon />}
                      className="border-cyan-500/30"
                    >
                      Reset
                    </Button>
                  </ButtonGroup>
                </Box>

                {/* Memory Grid Visualization */}
                <Box className="mt-auto border border-slate-800/80 bg-slate-950/60 rounded-xl p-5 min-h-[180px] flex flex-col justify-center">
                  <Typography className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3 text-center border-b border-slate-900 pb-1.5">
                    Stack Memory Allocation
                  </Typography>

                  {valStep === 0 ? (
                    <Box className="text-center py-6 text-slate-500 font-mono text-xs">
                      [Memory Empty. Click Start Simulation to execute code]
                    </Box>
                  ) : (
                    <Stack spacing={2} className="w-full max-w-xs mx-auto">
                      {valStep >= 1 && (
                        <div className="flex justify-between items-center p-2.5 rounded border border-cyan-500/30 bg-cyan-950/15 animate-glow-blue">
                          <span className="font-mono text-cyan-300 text-xs font-semibold">a : 10</span>
                          <span className="font-mono text-[9px] text-slate-500">Address: #0x001</span>
                        </div>
                      )}
                      {valStep >= 2 && (
                        <div className={`flex justify-between items-center p-2.5 rounded border transition-all duration-500 ${
                          valStep === 3 
                            ? 'border-purple-500/30 bg-purple-950/15 text-purple-300' 
                            : 'border-cyan-500/30 bg-cyan-950/15 text-cyan-300'
                        }`}>
                          <span className="font-mono text-xs font-semibold">
                            b : {valStep === 3 ? '20' : '10'}
                          </span>
                          <span className="font-mono text-[9px] text-slate-500">Address: #0x002</span>
                        </div>
                      )}
                    </Stack>
                  )}

                  {valStep === 3 && (
                    <Box className="text-center mt-4 text-[10px] text-gray-400 font-mono border-t border-slate-900 pt-2 leading-relaxed">
                      ✅ Notice: <span className="text-cyan-400">a</span> remains <span className="text-cyan-400">10</span>. They occupy entirely separate stack storage slots.
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT COLUMN: Reference (Copy by Reference) */}
          <Grid xs={12} md={6}>
            <Card className="cyber-glass-purple h-full flex flex-col justify-between border-purple-500/20 shadow-[0_0_15px_rgba(185,39,252,0.03)]">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Box className="flex justify-between items-center mb-4">
                  <Typography variant="h5" className="text-white font-bold font-sans">
                    Copying by Reference (Objects)
                  </Typography>
                  <span className="text-[10px] font-mono bg-purple-950/40 text-cyber-purple px-2 py-0.5 rounded border border-purple-500/20">
                    STACK & HEAP
                  </span>
                </Box>

                <Typography variant="body2" className="text-gray-400 mb-6">
                  Objects are stored in the heap. Variables store pointers. Copying pointers means mutating the object mutates all pointers.
                </Typography>

                {/* Code Window */}
                <Box className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 font-mono text-sm mb-6 shadow-inner">
                  <div className="text-slate-500 text-xs mb-2 border-b border-slate-800 pb-1 flex justify-between">
                    <span>source_code.js</span>
                    <span className="text-cyber-purple">Step {refStep} of 3</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {refCodeLines.map((line, idx) => (
                      <div 
                        key={idx} 
                        className={`p-1.5 rounded transition-all duration-300 ${
                          refStep > idx 
                            ? 'bg-slate-900/60 border-l-2 border-cyber-purple text-purple-300' 
                            : 'text-slate-500'
                        }`}
                      >
                        <span className="mr-3 text-slate-700 select-none">{idx + 1}</span>
                        <code>{line.code}</code>
                        {refStep === idx + 1 && (
                          <div className="text-[10px] text-gray-400 font-sans mt-1 pl-6 leading-relaxed">
                            💡 {line.desc}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Box>

                {/* Simulation Control Buttons */}
                <Box className="mb-8 flex justify-center">
                  <ButtonGroup size="small">
                    <Button 
                      onClick={nextRefStep} 
                      disabled={refStep === 3}
                      variant="contained" 
                      color="secondary"
                      startIcon={<PlayArrowIcon />}
                      className="font-bold disabled:opacity-40"
                    >
                      {refStep === 0 ? 'Start Simulation' : 'Next Line'}
                    </Button>
                    <Button 
                      onClick={resetRefStep} 
                      disabled={refStep === 0}
                      variant="outlined" 
                      color="secondary"
                      startIcon={<ReplayIcon />}
                      className="border-purple-500/30"
                    >
                      Reset
                    </Button>
                  </ButtonGroup>
                </Box>

                {/* Stack + Heap Visualization */}
                <Box className="mt-auto border border-slate-800/80 bg-slate-950/60 rounded-xl p-4 min-h-[180px] flex flex-col justify-center">
                  {refStep === 0 ? (
                    <Box className="text-center py-6 text-slate-500 font-mono text-xs">
                      [Memory Empty. Click Start Simulation to execute code]
                    </Box>
                  ) : (
                    <Grid container spacing={1} className="items-stretch justify-center relative">
                      {/* Left: Stack */}
                      <Grid xs={6}>
                        <Box className="border border-purple-500/20 bg-purple-950/5 rounded p-2.5 h-full flex flex-col gap-2">
                          <Typography className="text-[9px] font-mono text-cyber-purple font-bold text-center border-b border-purple-500/20 pb-1 uppercase">
                            STACK
                          </Typography>
                          
                          {refStep >= 1 && (
                            <Box className="p-2 rounded bg-slate-900 border border-purple-500/30 flex flex-col gap-0.5 animate-glow-purple">
                              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                                <span>obj1</span>
                                <span>#0x01</span>
                              </div>
                              <div className="text-cyber-purple font-mono text-xs font-semibold">#0x9ab</div>
                            </Box>
                          )}

                          {refStep >= 2 && (
                            <Box className="p-2 rounded bg-slate-900 border border-purple-500/30 flex flex-col gap-0.5 animate-glow-purple">
                              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                                <span>obj2</span>
                                <span>#0x02</span>
                              </div>
                              <div className="text-cyber-purple font-mono text-xs font-semibold">#0x9ab</div>
                            </Box>
                          )}
                        </Box>
                      </Grid>

                      {/* Right: Heap */}
                      <Grid xs={6}>
                        <Box className="border border-pink-500/20 bg-pink-950/5 rounded p-2.5 h-full flex flex-col gap-2">
                          <Typography className="text-[9px] font-mono text-pink-400 font-bold text-center border-b border-pink-500/20 pb-1 uppercase">
                            HEAP
                          </Typography>

                          {refStep >= 1 && (
                            <Box className="p-3 rounded bg-slate-900 border border-pink-500/30 flex flex-col gap-1 h-full justify-center relative shadow-[0_0_15px_rgba(236,72,153,0.05)]">
                              <span className="font-mono text-[7px] text-pink-400 font-bold bg-pink-950/60 px-1 rounded absolute top-1 left-1.5">
                                ADDR: #0x9ab
                              </span>
                              <div className="text-xs font-mono text-gray-300 mt-2">
                                <span className="text-pink-400">{"{"}</span>
                                <div className="pl-3">
                                  <span className="text-gray-400">x:</span>{' '}
                                  <span className={refStep === 3 ? 'text-green-400 font-extrabold font-mono text-sm underline transition-all duration-500' : 'text-cyan-400'}>
                                    {refStep === 3 ? '20' : '10'}
                                  </span>
                                </div>
                                <span className="text-pink-400">{"}"}</span>
                              </div>
                            </Box>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  )}

                  {refStep === 3 && (
                    <Box className="text-center mt-4 text-[10px] text-gray-400 font-mono border-t border-slate-900 pt-2 leading-relaxed">
                      ⚠️ Warning: Both variables store the same pointer <span className="text-cyber-purple">#0x9ab</span>. Modifying `obj2.x` mutated the single object, so `obj1.x` is now also <span className="text-green-400">20</span>!
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
