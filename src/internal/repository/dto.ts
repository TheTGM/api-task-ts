export interface TaskDTO {
    id: string;
    name: string;
    description: string;
    resolved: boolean;
    created_at: Date;
    updated_at: Date;
    finished_at: Date;
}