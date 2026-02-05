export type Employee = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    department: string;
    skills: string[] | null;
    bio: string | null;
    joined_at: string;
};
