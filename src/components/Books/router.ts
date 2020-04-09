import { Router } from 'express';
import BooksComponent from '.';

class BooksRouter {
    /**
     * Express router to mount books related functions on.
     * @type {Express.Router}
     * @const
     */
    readonly router: Router = Router();

    init() {
        this.router.get('/', BooksComponent.chart);

        return this;
    }

    get booksRouter(): Router {
        return this.router;
    }
}

export const { booksRouter } = new BooksRouter().init();
