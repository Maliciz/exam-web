import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" className="bg-slate-950 py-12 border-t border-slate-900">
      <Container maxWidth="lg" className="text-center">
        {/* Glow Line divider */}
        <Box className="w-24 h-[2px] bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-8 shadow-neon-blue" />
        
        <Typography 
          variant="h6" 
          component="p"
          className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent font-medium mb-3 tracking-wide"
          sx={{ fontSize: { xs: '1rem', sm: '1.15rem' } }}
        >
          "Mastering JS memory means mastering JavaScript."
        </Typography>

        <Typography variant="caption" className="text-slate-600 font-mono text-[10px] uppercase tracking-widest block">
          © {new Date().getFullYear()} // JS Engine Visualizer V1.0.0
        </Typography>
      </Container>
    </Box>
  );
}
