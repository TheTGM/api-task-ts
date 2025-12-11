import supabase from "../config/supabase.ts";
import TaskRepository from "../internal/repository/task.ts";
import TaskService from "../internal/service/task.ts";
import TaskController from "../internal/controller/task.ts";

class Dependencies {
    private dependencies: { [key: string]: any } = {};
    constructor() {
        this.registerDependencies();
    }
    registerDependencies(): void {
        this.dependencies.supabase = supabase;
        this.dependencies.taskRepository = new TaskRepository(
            this.dependencies.supabase
        );
        this.dependencies.taskService = new TaskService(
            this.dependencies.taskRepository
        );
        this.dependencies.taskController = new TaskController(
            this.dependencies.taskService
        );
    }
    get(dependencyName: string): any {
        if (!this.dependencies[dependencyName]) {
            throw new Error(`Dependency ${dependencyName} not found`);
        }
        return this.dependencies[dependencyName];
    }
}

export default new Dependencies();