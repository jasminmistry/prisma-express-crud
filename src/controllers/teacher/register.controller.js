import teacherCreate from '../../services/teacher.service.js';

const register = async (req, res, buffer) => {
    const { teacher, students } = req.body;
    try {
        await teacherCreate(teacher, students);
    } catch (e) {
        console.log(e);
        return res.json({ message: 'Error occurred' });
    }

    return res.status(204).send();
};

export default register;
