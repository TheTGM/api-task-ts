export interface TaskDTO {
    uuid: string;
    name: string;
    description: string | null;
    resolved: boolean;
    createdAt: Date;
    updatedAt: Date;
    finishedAt?: Date;
}