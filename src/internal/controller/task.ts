import type { Request, Response, NextFunction } from 'express';
import type TaskService from "../service/task.ts"

class TaskController {
    private taskService: TaskService;
    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }
    async getAllUsers(_req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.taskService.getAllUsers();
            res.status(200).json({
                success: true,
                data: users
            });
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;