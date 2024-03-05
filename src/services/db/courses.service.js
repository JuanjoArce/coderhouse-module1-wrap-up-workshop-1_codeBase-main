import { coursesModel } from "./models/courses.js";

export default class courseService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let courses = await coursesModel.find();
        return courses.map(course => course.toObject());
    }
    save = async (course) => {
        let newCourse = await coursesModel.create(course);
        return newCourse
}}


