import { SupabaseClient } from '@supabase/supabase-js';
import { Task } from "../domain/task.ts";
import { TaskMapper, type TaskDTO } from "./dto.ts"

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
                .order('created_at', { ascending: true });
            if (error) throw error;
            return data.map((task: TaskDTO) => TaskMapper.toDomain(task));
        } catch (error) {
            throw new Error(`Error finding tasks: ${(error as Error).message}`);
        }
    }
    async findById(id: string): Promise<Task | null> {
        try {
            const { data, error } = await this.supabase
                .from(this.table)
                .select('*')
                .eq('uuid', id)
                .single();
            if (error) {
                if (error.code === 'PGRST116') return null;
                throw error;
            }
            return TaskMapper.toDomain(data);
        } catch (error) {
            throw new Error(`Error finding task: ${this.getErrorMessage(error)}`);
        }
    }
    async save(task: Task): Promise<Task> {
        try {
            const { data, error } = await this.supabase
                .from(this.table)
                .insert([{
                    name: task.name,
                    description: task.description,
                    resolved: task.resolved
                }])
                .select()
                .single();
            if (error) throw error;
            return TaskMapper.toDomain(data);
        } catch (error) {
            throw new Error(`Error saving task: ${this.getErrorMessage(error)}`);
        }
    }
    private getErrorMessage(error: unknown): string {
        if (error instanceof Error) return error.message;
        return String(error);
    }
}

export default TaskRepository;