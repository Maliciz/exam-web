import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ReferenceSection() {
  return (
    <Box id="reference-types" className="py-20 border-t border-slate-900 bg-slate-900/20 relative">
      {/* Background purple blur */}
      <Box className="absolute top-1/3 left-0 w-80 h-80 bg-cyber-purple/5 rounded-full filter blur-3xl pointer-events-none" />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="mb-12">
          <Box className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 text-xs font-mono mb-4 uppercase tracking-wider">
            <MemoryIcon fontSize="inherit" />
            <span>Heap Allocation</span>
          </Box>
          <Typography 
            variant="h3" 
            component="h2" 
            className="text-white font-bold mb-4"
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          >
            Reference Types (Objects)
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-3xl leading-relaxed">
            Unlike primitives, Reference Types are complex data structures. They include plain <strong className="text-cyber-purple">Objects</strong>, <strong className="text-pink-400">Arrays</strong>, and <strong className="text-fuchsia-400">Functions</strong>. 
            Because their sizes can grow dynamically, their actual values are stored in the <strong className="text-cyber-purple">Heap memory</strong>, and the Stack only stores a <strong className="text-white font-mono">Reference Pointer</strong> (an address) pointing to that Heap location.
          </Typography>
        </Box>

        {/* Detailed Explanation and Memory Diagram */}
        <Grid container spacing={4} className="items-stretch">
          {/* Left Text Explanations */}
          <Grid xs={12} md={6}>
            <Stack spacing={3} className="h-full justify-between">
              <Card className="cyber-glass-purple flex-grow border-l-4 border-l-cyber-purple" sx={{ border: '1px solid rgba(185, 39, 252, 0.12)' }}>
                <CardContent className="p-6">
                  <Typography variant="h5" className="text-white font-bold mb-3 font-sans flex items-center gap-2">
                    Key Features
                  </Typography>
                  
                  <List className="text-gray-400 py-0">
                    <ListItem className="px-0 py-2">
                      <ListItemIcon className="min-w-8 text-cyber-purple">
                        <CheckCircleOutlinedIcon size="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography className="text-gray-300 font-semibold">Mutability</Typography>}
                        secondary={<Typography className="text-gray-400 text-sm">You can change, add, or delete properties of an object in the Heap without changing its pointer address in the Stack.</Typography>}
                      />
                    </ListItem>
                    <ListItem className="px-0 py-2">
                      <ListItemIcon className="min-w-8 text-cyber-purple">
                        <CheckCircleOutlinedIcon size="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography className="text-gray-300 font-semibold">Shared References</Typography>}
                        secondary={<Typography className="text-gray-400 text-sm">Assigning an object to a new variable copies the pointer. Both variables now point to the exact same memory space in the Heap.</Typography>}
                      />
                    </ListItem>
                    <ListItem className="px-0 py-2">
                      <ListItemIcon className="min-w-8 text-cyber-purple">
                        <CheckCircleOutlinedIcon size="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography className="text-gray-300 font-semibold">Heap Overhead</Typography>}
                        secondary={<Typography className="text-gray-400 text-sm">Dynamic allocation requires garbage collection, making heap accesses slightly slower than direct stack lookups.</Typography>}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              {/* Sub-grid of Types (Object, Array, Function) */}
              <Grid container spacing={2}>
                {[
                  { title: 'Objects ({})', desc: 'Standard key-value maps. Code: let user = { id: 1 };' },
                  { title: 'Arrays ([])', desc: 'Indexed list structures. Code: let list = [1, 2, 3];' },
                  { title: 'Functions (fn)', desc: 'Callable code blocks. Code: let run = () => {};' },
                ].map((item) => (
                  <Grid xs={4} key={item.title}>
                    <Box className="p-3 rounded-lg border border-slate-800 bg-slate-950/60 text-center h-full flex flex-col justify-center">
                      <Typography variant="subtitle2" className="text-cyber-purple font-mono font-bold mb-1">
                        {item.title}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500 block leading-tight">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* Right Visual Memory Diagram */}
          <Grid xs={12} md={6}>
            <Card className="h-full bg-slate-950/80 border border-slate-800 p-6 flex flex-col justify-center relative overflow-hidden">
              <Box className="absolute top-2 right-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Architectural Map</span>
              </Box>

              <Typography variant="h6" className="text-white font-bold mb-6 font-mono text-sm border-b border-slate-800 pb-2">
                Conceptual Memory Allocation
              </Typography>

              <Grid container spacing={2} className="items-center relative">
                {/* Stack Column */}
                <Grid xs={5}>
                  <Box className="border border-cyan-500/20 bg-cyan-950/10 rounded-xl p-4 flex flex-col gap-3 min-h-[220px]">
                    <Typography className="text-cyan-400 font-mono text-xs font-bold text-center border-b border-cyan-500/20 pb-2">
                      STACK (Pointers)
                    </Typography>

                    {/* Stack Entry: Primitive */}
                    <Box className="p-2.5 rounded bg-slate-900 border border-cyan-500/20 flex flex-col gap-1 shadow-[0_0_10px_rgba(6,182,212,0.05)]">
                      <div className="flex justify-between text-[10px] font-mono text-cyan-400 font-semibold">
                        <span>val : a</span>
                        <span>#0x01</span>
                      </div>
                      <div className="text-white font-mono text-sm pl-1 font-semibold">10</div>
                      <span className="text-[9px] text-slate-500 font-mono">Primitive value stored directly</span>
                    </Box>

                    {/* Stack Entry: Reference */}
                    <Box className="p-2.5 rounded bg-slate-900 border border-purple-500/30 flex flex-col gap-1 shadow-[0_0_15px_rgba(185,39,252,0.08)] relative z-10">
                      <div className="flex justify-between text-[10px] font-mono text-cyber-purple font-semibold">
                        <span>ref : user</span>
                        <span>#0x02</span>
                      </div>
                      <div className="text-cyber-purple font-mono text-xs pl-1 font-bold flex items-center gap-1">
                        #0x4a1
                        <ArrowRightAltIcon fontSize="inherit" className="text-cyber-purple animate-pulse" />
                      </div>
                      <span className="text-[9px] text-slate-500 font-mono">Stores Heap Address</span>
                    </Box>
                  </Box>
                </Grid>

                {/* Connecting SVG Arrow */}
                <Grid xs={2} className="flex justify-center items-center">
                  <Box className="text-cyber-purple flex flex-col items-center">
                    <ArrowRightAltIcon className="text-4xl animate-pulse" />
                  </Box>
                </Grid>

                {/* Heap Column */}
                <Grid xs={5}>
                  <Box className="border border-purple-500/20 bg-purple-950/10 rounded-xl p-4 flex flex-col gap-3 min-h-[220px]">
                    <Typography className="text-cyber-purple font-mono text-xs font-bold text-center border-b border-purple-500/20 pb-2">
                      HEAP (Objects)
                    </Typography>

                    {/* Heap Space Block */}
                    <Box className="p-4 rounded-lg bg-slate-900 border border-purple-500/40 flex flex-col gap-2 min-h-[140px] justify-center relative shadow-[0_0_15px_rgba(185,39,252,0.1)]">
                      <div className="absolute top-1.5 left-2 font-mono text-[9px] text-purple-400 font-bold bg-purple-950/60 px-1.5 rounded">
                        ADDR: #0x4a1
                      </div>

                      <div className="mt-2 text-xs font-mono text-gray-300">
                        <span className="text-purple-400">{"{"}</span>
                        <div className="pl-4">
                          <span className="text-gray-400">name:</span> <span className="text-green-400">"Alice"</span>,
                          <br />
                          <span className="text-gray-400">role:</span> <span className="text-green-400">"Dev"</span>
                        </div>
                        <span className="text-purple-400">{"}"}</span>
                      </div>
                      
                      <div className="border-t border-slate-800 pt-2 text-[9px] text-slate-500 font-mono text-center">
                        Dynamic size object stored in free memory pool
                      </div>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
