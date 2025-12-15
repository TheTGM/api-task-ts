import { v7 as uuidv7 } from "uuid";
import { Task } from "../domain/task.ts";
import type TaskRepository from "../repository/task.ts";

class TaskService {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTask(): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }
    async getTaskByID(id: string): Promise<Task | null> {
        return await this.taskRepository.findById(id);
    }
    async createTask(taskData: Task): Promise<Task> {
        const uuid = uuidv7();
        const task = new Task(uuid, taskData.name, taskData.description, false, null, null, null);
        return await this.taskRepository.save(task);
    }
    async updateTask(id: string, taskData: Task): Promise<Task | null> {
        const task = new Task(id, taskData.name, taskData.description, false, null, null, null);
        return await this.taskRepository.update(id, task);
    }
    async deleteTask(id: string): Promise<boolean | null> {
        return await this.taskRepository.delete(id);
    }
    async finishTask(id: string): Promise<Task | null> {
        return await this.taskRepository.finish(id, new Date());
    }
}

export default TaskService;