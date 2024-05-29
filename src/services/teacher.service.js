import createTeacher from '../repositories/teacher.repository.js';

const create = async (teacher, students) => createTeacher(teacher, students);

export default create;
