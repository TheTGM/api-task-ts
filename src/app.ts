import express from 'express';
import routes from './server/routes.ts';

const app = express();
app.use(express.json());
app.use('/api/v1', routes);

export default app;