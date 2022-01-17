import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import singResponse from './middlewares/singResponse';

const serverPort = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(singResponse);

app.use('/api', routes);

// tslint:disable-next-line:no-console
app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));

export default app;
