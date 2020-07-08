import express from 'express'
import CoursesController  from  './controller/CoursesController'
import CoursesServices from './Services/CoursesServices';

const routes = express.Router();
const coursesServices = new CoursesServices()
const coursesController = new CoursesController();

routes.get('/courses/:id', coursesController.show)
routes.get('/courses/find', coursesController.index)
routes.put('/courses/:id', coursesController.create)
routes.delete('/courses/:id', coursesController.delete)
routes.patch('/courses/:id', coursesController.updated)

export default routes;