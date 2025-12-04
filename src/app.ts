import express from 'express';
import routes from './server/routes.ts';

const app = express();
app.use(express.json());
app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}/api/v1`);
});

export default app;