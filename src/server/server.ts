import Middleware from '../config/middleware';
import Routes from '../config/router';

import express = require('express');

class App {
    /**
     * @type {express}
     * @constant {express.Application}
     */
    app: express.Application = express();

    constructor() {
        new Middleware().init(this.app);

        new Routes().init(this.app);

        this.app.set('port', 3000);
    }

    get serverApp(): express.Application {
        return this.app;
    }
}

export const server: express.Application = new App().serverApp;
