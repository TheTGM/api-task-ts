import { SupabaseClient } from '@supabase/supabase-js';
import { Task } from "../domain/task.ts";

class TaskRepository {
    private supabase: SupabaseClient;
    private table: string;
    constructor(supabaseClient: SupabaseClient) {
        this.supabase = supabaseClient;
        this.table = 'tasks';
    }
    async findAll(): Promise<Task[]> {
        try {
            const { data, error } = await this.supabase
                .from(this.table)
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data.map((task: Task) =>
                new Task(
                    task.id,
                    task.name,
                    task.description,
                    task.resolved,
                    task.created_at,
                    task.updated_at,
                    task.finished_at
                )
            );
        } catch (error) {
            throw new Error(`Error finding tasks: ${(error as Error).message}`);
        }
    }
}

export default TaskRepository;