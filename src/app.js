import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import logger from './config/winston.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(process.env.port, () => {
    logger.info(`Listening to port ${process.env.port}`);
});
