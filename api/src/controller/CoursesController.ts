import { Request, Response, json } from 'express'
import moment from 'moment'
import coursesServices from '../Services/CoursesServices'
import { Courses } from '../model/Courses'


class CoursesController {

    //private readonly _services = new coursesServices()

    async index(request: Request, response: Response) {
        const service = new coursesServices()
        const courses = await service.GetAll()
        return response.status(200).json(courses);
    }

    async create(request: Request, response: Response) {
        const id = Number(request.params.id)
        const { title, subtitle, startedAt, description, isActive } = request.body;
        const date = moment().endOf('day').toDate()
        const created = date
        const updated = date

        const course: Courses = {
            title,
            subtitle,
            startedAt: moment(startedAt).toDate(),
            description,
            isActive,
            created,
            updated,
        }

        const service = new coursesServices()

        try {
            const insertedCourse = await service.Create(id, course)
            return response.status(201).json(insertedCourse);
        } catch (error) {
            return response.status(500).json((error))
        }

    }

    async show(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new coursesServices()

        const course = await service.GetById(id);
        if(typeof course == 'undefined'){
            return response.status(204);
        }
        return response.status(200).json(course);
    }

    async delete(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new coursesServices()

        await service.Delete(id).then(value => {
            return response.status(200).json({ isDeleted: Boolean(value) })
        }).catch(err => {
            return response.status(500).json(err)
        });
    }

    async updated(request: Request, response: Response) {
        const id = Number(request.params.id)
        const { title, subtitle, startedAt, description, isActive } = request.body;
        const date = moment([]).toISOString()
        const updated = date

        const course = {
            title,
            subtitle,
            startedAt: moment(startedAt).toISOString(),
            description,
            isActive,
            updated,
        }

        const service = new coursesServices()

        service.update(id, course)
            .then(value => {
                return response.status(200).json({ isUpdated: Boolean(value) });
            })
    }

}

export default CoursesController;