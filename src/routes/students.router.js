import { Router } from 'express';

// Si queremos cambiar de persistencia - solo descomentar/comentar
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
//import StudentService from '../services/filesystem/students.service.js';
import StudentService from '../services/db/students.service.js';

const router = Router();
const studentService = new StudentService();

router.get('/', async (req, res) => {
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }

})

router.post('/', async (req, res) => {
    try {
        let newStudent = req.body
        let student = await studentService.save(newStudent);
        res.send(student);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo guardar los estudiantes." });
    }

})



router.post('/', async (req, res) => {
    //TODO: Resolver esta ruta POST para poder guardar en la persistencia los estudiantes.
})

export default router;