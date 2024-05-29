/* eslint-disable no-await-in-loop */
import pool from '../config/postgres.js';

const createStudentsOfTeacher = async (id, students) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of students) {
        const result = await pool.query(
            'INSERT INTO "Student"(email) VALUES($1) RETURNING id',
            [element]
        );

        await pool.query(
            'INSERT INTO "TeachersOfStudents"("teacherId", "studentId") VALUES($1, $2)',
            [id, result.rows[0].id]
        );
    }
};

const create = async (teacher, students) => {
    try {
        await pool.query('BEGIN');
        const insertedID = await pool.query(
            'INSERT INTO "Teacher"(email) VALUES($1) RETURNING id',
            [teacher]
        );
        await createStudentsOfTeacher(insertedID.rows[0].id, students);
        await pool.query('COMMIT');
    } catch (e) {
        await pool.query('ROLLBACK');
        throw e;
    }

    return true;
};

export default create;
