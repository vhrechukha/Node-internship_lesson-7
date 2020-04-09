import * as mongoose from 'mongoose';
import Connection from '../../config/connection';
import { IBook } from './interfaces';

const BooksSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        titleLength: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        code3: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        updatedAt: {
            type: Date,
            required: true,
        },
    },
    {
        collection: 'booksmodel',
        versionKey: false,
    },
);

export const bookModel:mongoose.Model<IBook> = Connection.model<IBook>('BooksModel', BooksSchema);
