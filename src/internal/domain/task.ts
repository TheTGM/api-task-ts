export class Task {
    id: string;
    name: string;
    description: string;
    resolved: boolean;
    created_at: Date;
    updated_at: Date;
    finished_at: Date;

    constructor(
        id: string,
        name: string,
        description: string,
        resolved: boolean,
        created_at: Date,
        updated_at: Date,
        finished_at: Date
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.resolved = resolved;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.finished_at = finished_at;
    }
}