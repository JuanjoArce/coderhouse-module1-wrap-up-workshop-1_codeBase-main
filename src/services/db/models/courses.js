//TODO: Completar Modelo con Mongoose:

import mongoose from "mongoose";


const courseCollection = 'courses';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const courseSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    teacherName: {type: String, require: true},
    students: {
        type: [
            {
                students: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "students"
                }
            }
        ],
        default:[]
    }

});


// exportar
export const coursesModel = mongoose.model(courseCollection, courseSchema);