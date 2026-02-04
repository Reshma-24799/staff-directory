import { faker } from '@faker-js/faker';
export type Employee = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    department: string;
    skills: string[];
    bio: string;
    joinedAt: string;
};
faker.seed(123);
const generateEmployees = (count: number): Employee[] => {
    return Array.from({ length: count }, () => {
        const allSkills = ['React', 'Next.js', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker', 'Figma', 'TypeScript', 'Finance', 'Digital Marketing', 'HR', 'Sales'];
        const departments = ['Engineering', 'Design', 'Marketing', 'HR', 'Sales'];
        const dept = faker.helpers.arrayElement(departments);
        return {
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            role: faker.person.jobTitle(),
            department: dept,
            skills: faker.helpers.arrayElements(allSkills, { min: 2, max: 4 }),
            bio: faker.lorem.paragraph(),
            joinedAt: faker.date.past().toISOString(),
        };
    });
};
export const employees = generateEmployees(100);