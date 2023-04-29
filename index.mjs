import express from "express";
import { engine } from "express-handlebars";
import sequelize from "./db/conn.mjs";

//models
import Task from './models/Task.mjs';

//routes
import tasksRoutes from './routes/tasksRoutes.mjs';


const app = express();
const conn = sequelize;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(erro => {
        console.log(err);
    })
