import {studentsModel} from "./models/students.js"

//TODO: Implementar las operaciones CRUD:


export default class StudentService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentsModel.find();
        return students.map(student => student.toObject());
    }
    save = async (student) => {
        let newStudent = await studentsModel.create(student);
        return newStudent
    }

}
