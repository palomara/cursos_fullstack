import express from 'express'
import CoursesController  from  './controller/CoursesController'

const routes = express.Router();
const coursesController = new CoursesController();


routes.get('/courses/find', coursesController.index)
routes.put('/courses/:id', coursesController.create)
routes.get('/courses/:id', coursesController.show)
routes.delete('/courses/:id', coursesController.delete)
routes.patch('/courses/:id', coursesController.updated)

export default routes;