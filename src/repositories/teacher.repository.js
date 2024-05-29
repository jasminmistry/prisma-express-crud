import prisma from '../config/prisma.js';

const create = async (teacher, students) => {
    const result = await prisma.teacher.create({
        data: {
            email: teacher,
            students: {
                create: [
                    ...students.map((student) => ({
                        student: {
                            create: {
                                email: student,
                            },
                        },
                    })),
                ],
            },
        },
    });

    return result;
};

export default create;
