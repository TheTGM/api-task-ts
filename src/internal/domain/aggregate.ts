export interface Task {
    uuid: string;
    name: string;
    desc: string;
    resolved: boolean;
    created_at: Date;
    updated_at: Date;
    finished_at: Date;
}