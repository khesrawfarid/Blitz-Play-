import fs from 'fs';
console.log(fs.existsSync('.env'));
console.log(process.env.GEMINI_API_KEY);
