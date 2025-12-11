import type TaskRepository from "../repository/task.ts";

class TaskService {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllUsers() {
        return await this.taskRepository.findAll();
    }
}

export default TaskService;