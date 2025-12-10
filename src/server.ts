import app from './app.ts';
import config from './config/config.ts';

const port = config.port;

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`📍 API available at http://localhost:${port}/api/v1`);
});