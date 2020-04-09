import * as mongoose from 'mongoose';

export interface IBook extends mongoose.Document {
    title: string;
    titleLength: number;
    description: string;
    code3: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IData extends mongoose.Document {
    value: number;
    code3: string;
}
