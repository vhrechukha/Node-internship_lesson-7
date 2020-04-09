import * as http from 'http';

export default class Events {
    /**
     * @function
     * @param  {NodeJS.ErrnoException} error
     * @param  {number} port
     * @returns throw error
     */
    onError({ error, port }: { error: NodeJS.ErrnoException; port: number; }): void {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bindPort = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

        switch (error.code) {
            case 'EACCES':
                console.error(`${bindPort} requires elevated privileges`);
                process.exit(1);
            case 'EADDRINUSE':
                console.error(`${bindPort} is already in use`);
                process.exit(1);
            default:
                throw error;
        }
    }

    /**
     * @function
     * @inner
     * @description log port to console
     */
    onListening(port: number): void {
        const bindPort = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;

        console.log(`Listening on ${bindPort}`);
    }

    /**
     * @function
     * @inner
     * @param {http.Server} Server
     * @param {number} port
     */
    bind({ Server, port }: { Server: http.Server; port: number; }): void {
        Server.on('error', (error) => this.onError({ error, port }));
        Server.on('listening', this.onListening.bind(Server, port || 3000));
    }
}
