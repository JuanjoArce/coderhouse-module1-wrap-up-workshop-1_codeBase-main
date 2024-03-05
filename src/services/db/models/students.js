//TODO: Implementar Modelo con Mongoose:

// - name: type string
// - lastName: tipo string
// - age: type number
// - id: type string (campo único)
// - courses: type array

import mongoose from "mongoose";


const studentCollection = "students"

const studentSchema = new mongoose.Schema({
    name:  {type: String, required:true},
    lastName: {type: String, required:true},
    age: {type: Number, required:true},
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default:[]
    }
})


export const studentsModel = mongoose.model(studentCollection, studentSchema)