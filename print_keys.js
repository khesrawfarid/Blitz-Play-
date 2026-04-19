import fs from 'fs';
console.log(Object.keys(process.env).filter(k => k.includes('KEY') || k.includes('GEMINI') || k.includes('AI')));
