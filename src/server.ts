import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import routes from './routes';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// tslint:disable-next-line:no-console
app.listen(3000, () => console.log('Listening on port 3000!'));

export default app;
