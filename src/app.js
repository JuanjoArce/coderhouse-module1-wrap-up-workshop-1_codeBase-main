import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import courseRouter from './routes/courses.router.js';
// import viewsRouter from './routes/views.router.js';
// import handlebars from 'express-handlebars'
// Completar imports que faltan


//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuraciones de .hbs



//Declaración de Routers:

app.use('/api/students', studentRouter);
app.use('/api/courses', courseRouter);
// app.use('/api/views', viewsRouter);

const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://josesanpino:8yWEyM8BthjtnZGH@cluster0.6nbikyo.mongodb.net/colegio?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();