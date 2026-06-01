import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import PrimitivesSection from './components/PrimitivesSection';
import ReferenceSection from './components/ReferenceSection';
import CoreDifferenceSection from './components/CoreDifferenceSection';
import ConceptQuiz from './components/ConceptQuiz';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Sticky Header Navigation */}
      <Box className="sticky top-0 z-50 bg-cyber-bg/85 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Box className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="w-3 h-3 rounded-full bg-cyber-blue animate-pulse shadow-neon-blue" />
            <Typography variant="h6" className="font-extrabold tracking-tight text-white font-sans text-sm md:text-base">
              Balla Maksym.<span className="text-cyber-blue font-mono text-xs md:text-sm">exam()</span>
            </Typography>
          </Box>

          {/* Quick Links */}
          <nav className="flex items-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs">
            <button
              onClick={() => scrollToSection('primitives')}
              className="text-gray-400 hover:text-cyber-blue hover:glow-text-blue transition-all duration-200"
            >
              01. Primitives
            </button>
            <button
              onClick={() => scrollToSection('reference-types')}
              className="text-gray-400 hover:text-cyber-purple hover:glow-text-purple transition-all duration-200"
            >
              02. References
            </button>
            <button
              onClick={() => scrollToSection('aha-moment')}
              className="text-gray-400 hover:text-cyber-blue hover:glow-text-blue transition-all duration-200"
            >
              03. Workspace
            </button>
            <button
              onClick={() => scrollToSection('quiz')}
              className="text-gray-400 hover:text-cyber-purple hover:glow-text-purple transition-all duration-200 px-3 py-1.5 rounded border border-cyber-purple/30 bg-cyber-purple/5 hover:bg-cyber-purple/15"
            >
              04. Challenge
            </button>
          </nav>
        </Box>
      </Box>

      {/* Main Layout Pages */}
      <Box className="relative min-h-screen">
        <Hero />
        <PrimitivesSection />
        <ReferenceSection />
        <CoreDifferenceSection />
        <ConceptQuiz />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

// Inline Typography import to ensure compatibility in case it wasn't explicitly imported
import { Typography } from '@mui/material';
