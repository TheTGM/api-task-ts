import { Router } from 'express';
import container from './dependencies.ts';
const router = Router();
const taskController = container.get('taskController');

router.get('/tasks', taskController.getAllTask.bind(taskController))
router.get('/tasks/:id', taskController.getTaskByID.bind(taskController))
router.post('/tasks', taskController.createTask.bind(taskController))

export default router;