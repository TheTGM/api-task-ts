import { Router } from 'express';
const router = Router()

router.get('/tasks', (req, res) => {
    res.send('Hello World!')
});

export default router;