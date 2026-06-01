import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';

const primitivesData = [
  {
    type: 'Number',
    description: 'Double-precision 64-bit binary format IEEE 754. Handles integers and floats, including Special values like Infinity, -Infinity, and NaN.',
    example: 'let score = 98;\nlet pi = 3.14159;\nlet error = NaN;',
  },
  {
    type: 'String',
    description: 'A sequence of characters representing textual data. Wrapped in single quotes, double quotes, or backticks for template literals.',
    example: 'let greet = "Hello";\nlet user = \'Bob\';\nlet msg = `Hi ${user}`;',
  },
  {
    type: 'Boolean',
    description: 'Logical entity representing a binary state of truth: true or false. Critical for conditional routing and program logic.',
    example: 'let isLoggedIn = true;\nlet hasAdminPrivilege = false;',
  },
  {
    type: 'Null',
    description: 'Represents the intentional, explicit absence of any object value. Must be assigned manually to signal "no value".',
    example: 'let currentUser = null;\nlet searchResult = null;',
  },
  {
    type: 'Undefined',
    description: 'Indicates that a variable has been declared but has not yet been assigned a value, or is a missing object property.',
    example: 'let buffer;\nconsole.log(buffer); // undefined',
  },
  {
    type: 'BigInt',
    description: 'Represents numeric values larger than 2^53 - 1, which is the maximum safe integer limit for standard Numbers.',
    example: 'let massive = 9007199254740991n;\nlet bigintObj = BigInt("9999");',
  },
  {
    type: 'Symbol',
    description: 'A unique and immutable primitive value, primarily used to create hidden, private, or unique property keys in objects.',
    example: 'let key1 = Symbol("id");\nlet key2 = Symbol("id");\n// key1 !== key2',
  }
];

export default function PrimitivesSection() {
  return (
    <Box id="primitives" className="py-20 border-t border-slate-900 bg-slate-950/40 relative">
      {/* Decorative side light */}
      <Box className="absolute top-1/4 right-0 w-72 height-72 bg-cyber-blue/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="mb-12">
          <Box className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 text-xs font-mono mb-4 uppercase tracking-wider">
            <LayersIcon fontSize="inherit" />
            <span>Stack Allocation</span>
          </Box>
          <Typography 
            variant="h3" 
            component="h2" 
            className="text-white font-bold mb-4"
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          >
            Primitive Data Types
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-3xl leading-relaxed">
            Primitives are the most fundamental building blocks of JavaScript. They are <strong className="text-cyber-blue">immutable</strong> (their values cannot be altered) and are stored directly inside the execution context's <strong className="text-cyan-400">Stack memory</strong>. When copied, their actual value is duplicated directly (passed by value).
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {primitivesData.map((prim, index) => (
            <Grid xs={12} sm={6} md={4} key={prim.type} className="flex">
              <Card 
                className="w-full flex flex-col justify-between cyber-glass-blue hover:scale-[1.03] hover:shadow-neon-blue transition-all duration-300"
                sx={{
                  border: '1px solid rgba(0, 240, 255, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <CardContent className="flex flex-col flex-grow p-6">
                  {/* Card Title & Badge */}
                  <div className="flex justify-between items-center mb-3">
                    <Typography variant="h5" component="h3" className="text-white font-bold font-sans">
                      {prim.type}
                    </Typography>
                    <Chip 
                      label="Primitive" 
                      size="small" 
                      className="bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30 font-mono text-[10px]"
                    />
                  </div>

                  {/* Description */}
                  <Typography variant="body2" className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {prim.description}
                  </Typography>

                  {/* Code snippet */}
                  <div className="mt-auto">
                    <div className="text-slate-500 text-[10px] font-mono mb-1 uppercase tracking-wider">Example Snippet</div>
                    <pre className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-cyan-300 font-mono text-xs overflow-x-auto select-all leading-normal whitespace-pre">
                      <code>{prim.example}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
