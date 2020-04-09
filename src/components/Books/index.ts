import * as express from 'express';
import { BooksService } from './service';
import { IData } from './interfaces';

export default class BooksComponent {
    /**
     * @function
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     * @returns {Promise < void >}
     */
    // eslint-disable-next-line max-len
    static async chart(req: express.Request, res: express.Response) : Promise<express.Response<IData>> {
        try {
            const books = await BooksService.getChartData();
            return res.status(200).json({
                data: books,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.name,
                details: error.message,
            });
        }
    }
}
