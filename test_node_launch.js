import { spawn } from 'child_process';
const server = spawn('node', ['server.ts'], { env: { ...process.env, PORT: '3000' } }); // Port 3000 will be busy
server.stderr.on('data', d => console.log('ERR', d.toString()));
server.on('close', code => console.log('Code', code));
