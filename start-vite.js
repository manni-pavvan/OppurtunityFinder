import { spawn } from 'child_process';
console.log('Starting Vite server with stdin ignored...');
const server = spawn('npm.cmd', ['run', 'dev'], {
    stdio: ['ignore', 'inherit', 'inherit'],
    shell: true
});
server.on('exit', (code) => {
    console.log('Server exited with code', code);
    process.exit(code || 0);
});
// keep Node running
setInterval(() => { }, 1000 * 60 * 60);
