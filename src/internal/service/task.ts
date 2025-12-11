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
}

export default TaskService;