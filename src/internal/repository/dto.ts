import { Task } from "../domain/task.ts";

export interface TaskDTO {
    id: string;
    name: string;
    description: string;
    resolved: boolean;
    created_at: Date;
    updated_at: Date;
    finished_at: Date | null;
}

export class TaskMapper {
    static toDomain(dto: TaskDTO): Task {
        return new Task(
            dto.id,
            dto.name,
            dto.description,
            dto.resolved,
            dto.created_at,
            dto.updated_at,
            dto.finished_at
        );
    }

    static toDTO(task: Task): TaskDTO {
        return {
            id: task.id,
            name: task.name,
            description: task.description,
            resolved: task.resolved,
            created_at: task.created_at,
            updated_at: task.updated_at,
            finished_at: task.finished_at || null
        };
    }
}