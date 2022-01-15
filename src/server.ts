import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config();

const serverPort = process.env.SERVER_PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// tslint:disable-next-line:no-console
app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));

export default app;
