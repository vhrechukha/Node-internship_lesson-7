import * as mongoose from 'mongoose';

const MONGODB_URI: string = 'mongodb://localhost:27017/';
const MONGODB_DB_MAIN: string = 'books_db';
const MONGO_URI: string = `${MONGODB_URI}${MONGODB_DB_MAIN}`;

const connectOptions = {
    // automatically try to reconnect when it loses connection
    autoReconnect: true,
    // reconnect every reconnectInterval milliseconds
    // for reconnectTries times
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    // flag to allow users to fall back to the old
    // parser if they find a bug in the new parse
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export default mongoose.createConnection(MONGO_URI, connectOptions);
