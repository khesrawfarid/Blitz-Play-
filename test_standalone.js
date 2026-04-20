import { spawn } from 'child_process';
const server = spawn('node', ['server.ts'], { env: { ...process.env, NODE_ENV: 'production', PORT: '3001' } });
server.stdout.on('data', d => console.log('OUT', d.toString()));
server.stderr.on('data', d => console.log('ERR', d.toString()));
server.on('close', code => console.log('Close code:', code));
setTimeout(() => server.kill(), 3000);
