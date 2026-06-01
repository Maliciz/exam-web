import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('primitives');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(185, 39, 252, 0.15) 0%, transparent 70%)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
          zIndex: 0,
        }
      }}
    >
      {/* Background Matrix/Grid Overlay */}
      <Box className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0" />

      <Container maxWidth="md" className="relative z-10 text-center">
        {/* Sub-badge */}
        <Box className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue text-xs uppercase tracking-widest font-mono mb-8 animate-pulse shadow-[0_0_15px_rgba(0,240,255,0.1)]">
          <CodeIcon fontSize="small" />
          <span>Core JS Engine Architecture</span>
        </Box>

        {/* Title */}
        <Typography 
          variant="h2" 
          component="h1" 
          className="font-extrabold tracking-tight text-white mb-6 leading-tight"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}
        >
          The Anatomy of JavaScript: <br />
          <span className="bg-gradient-to-r from-cyber-blue via-cyan-400 to-cyber-purple bg-clip-text text-transparent glow-text-blue">
            Understanding Data Types
          </span>
        </Typography>

        {/* Subtitle */}
        <Typography 
          variant="h6" 
          className="text-gray-400 font-normal max-w-2xl mx-auto mb-10 leading-relaxed"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
        >
          Demystify the critical operational difference between <span className="text-cyber-blue font-mono font-semibold">Primitives</span> and <span className="text-cyber-purple font-mono font-semibold">Reference Types</span>. Master memory allocations, understand the Stack vs. the Heap, and eliminate mutation bugs forever.
        </Typography>

        {/* Action Button */}
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleScroll}
            size="large"
            endIcon={<DoubleArrowIcon />}
            className="hover:scale-105 transform transition duration-300 py-3.5 px-8 shadow-neon-blue text-slate-950 font-bold"
            sx={{
              background: 'linear-gradient(90deg, #00f0ff 0%, #06b6d4 100%)',
              '&:hover': {
                background: 'linear-gradient(90deg, #06b6d4 0%, #00f0ff 100%)',
              }
            }}
          >
            Start Exploring
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
