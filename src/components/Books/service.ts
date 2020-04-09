import { bookModel } from './model';
import { IBook } from './interfaces';

class Service {
    /**
     * @method getChartData
     * @param {NewType}
     * @returns {IData}
     */
    public getChartData() {
        return bookModel.aggregate<IBook>([
            {
                $group: {
                    _id: '$code3',
                    value: {
                        $sum: 1,
                    },
                },
            },
            {
                $project: {
                    code3: '$_id',
                    value: true,
                    _id: false,
                },
            },
        ]);
    }
}

export const BooksService = new Service();
