import { v7 as uuidv7 } from "uuid";
import { Task } from "../domain/task.ts";
import type TaskRepository from "../repository/task.ts";

class TaskService {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTask() {
        return await this.taskRepository.findAll();
    }
    async getTaskByID(id: string) {
        return await this.taskRepository.findById(id);
    }
    async createTask(taskData: Task) {
        const uuid = uuidv7();
        const dateUTC = new Date().getUTCDate();
        const dateParsed = new Date(dateUTC)
        const task = new Task(uuid, taskData.name, taskData.description, false, dateParsed, dateParsed, null);
        return await this.taskRepository.save(task);
    }
}

export default TaskService;