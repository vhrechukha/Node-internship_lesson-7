import Events from './events';
import { server } from './server';

import http = require('http');

class App {
    private port: number = server.get('port');

    start(): void {
        new Events().bind(
            { Server: http.createServer(server).listen(this.port), port: this.port },
        );
    }
}

// run our app
new App().start();
