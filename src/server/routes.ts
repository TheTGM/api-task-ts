import { Router } from 'express';
import container from './dependencies.ts';
const router = Router();
const taskController = container.get('taskController');

router.get('/tasks', taskController.getAllUsers.bind(taskController))

export default router;