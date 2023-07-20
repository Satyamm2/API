import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//to link routes at application level
import UserRouter from './routes/user.router.js';
import ProjectRouter from './routes/project.router.js';
import GroupRouter from './routes/group.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware
app.use('/user',UserRouter);
app.use('/project',ProjectRouter);
app.use('/group',GroupRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
