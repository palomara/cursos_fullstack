import { Request, Response, json } from 'express'
import moment from 'moment'
import coursesServices from '../Services/CoursesServices'


class CoursesController {

    //private readonly _services = new coursesServices()

    async index(request: Request, response: Response) {
        const service = new coursesServices()

        service.GetAll().then(value => {
            var course = value.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    subtitle: item.subtitle,
                    createdAt: moment(item.createdAt),
                    description: item.description,
                    updated: item.updated,
                    isActive: Boolean(item.isActive)
                }
            });
            return response.json(course);
        }).catch(err => {
            return response.status(500).json(err)
        });


    }

    async create(request: Request, response: Response) {
        const id = Number(request.params.id)
        const { title, subtitle, startedAt, description, isActive } = request.body;
        const date = moment([]).toISOString()
        const created = date
        const updated = date

        const course = {
            title,
            subtitle,
            startedAt: moment(startedAt).toISOString(),
            description,
            isActive,
            created,
            updated,
        }

        const service = new coursesServices()

        service.Create(id, course).then(value => {
            return response.status(201).json(value);
        }).catch(err => {
            return response.status(500).json(err);
        })



    }

    async show(request: Request, response: Response) {
        const id = Number(request.params.id)
        const service = new coursesServices()

        service.GetById(id).then(value => {
            return response.status(200).json(value);
        }).catch(err => {
            return response.status(500).json(err);
        })
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