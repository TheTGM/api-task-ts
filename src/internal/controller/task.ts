import type { Request, Response, NextFunction } from 'express';
import { validate as isValidUUID } from 'uuid';
import type TaskService from "../service/task.ts"

class TaskController {
    private taskService: TaskService;
    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }
    async getAllTask(_req: Request, res: Response, next: NextFunction) {
        try {
            const task = await this.taskService.getAllTask();
            res.status(200).json({
                success: true,
                data: task
            });
        } catch (error) {
            next(error);
        }
    }
    async getTaskByID(req: Request, res: Response, next: NextFunction) {
        try {
            let taskId
            if (!req.params.id || !isValidUUID(req.params.id)) {
                throw new Error('Invalid TaskID');
            }
            taskId = String(req.params.id)
            const task = await this.taskService.getTaskByID(taskId);
            res.status(200).json({
                success: true,
                data: task
            });
        } catch (error) {
            next(error);
        }
    }
    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const taskData = req.body;
            if (!taskData.name || !taskData.description) {
                throw new Error(`missing fields`);
            }
            const task = await this.taskService.createTask(taskData);
            res.status(201).json({
                success: true,
                data: task
            });
        } catch (error) {
            next(error);
        }
    }
    async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
            let taskId
            if (!req.params.id || !isValidUUID(req.params.id)) {
                throw new Error('Invalid TaskID');
            }
            taskId = String(req.params.id)
            const taskData = req.body;
            if (!taskData.name || !taskData.description) {
                throw new Error(`missing fields`);
            }
            const task = await this.taskService.updateTask(taskId, taskData);
            res.status(200).json({
                success: true,
                data: task
            });
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;