import * as http from 'http';
import { Router } from 'express';
import * as express from 'express';
import { booksRouter } from '../components/Books/router';

export default class Routes {
    init(app: express.Router) {
        const router: express.Router = Router();

        app.use('/v1/books', booksRouter);

        app.use((_req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    }
}
