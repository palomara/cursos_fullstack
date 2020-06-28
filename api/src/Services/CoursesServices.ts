import knex from '../database/connection'
import {Courses} from '../model/Courses'

class CoursesServices{

    table:string = 'Courses'
    constructor(){}

    async GetAll(): Promise<Courses[]>{
       return await knex<Courses>(this.table).select('*')
    }

    async Create(id: number, course: Courses): Promise<Courses | undefined>{
        const trx = await knex.transaction()
        const persistedIds = await trx(this.table).insert(course);
        trx.commit();
        const idInserted = persistedIds[0]
        return await knex<Courses>(this.table).select('*').where('id', '=', idInserted).first();
    }

    async GetById(id: number): Promise<Courses | undefined>{
        return await knex<Courses>(this.table).select('*').where('id', '=', id).first();
    }

    async Delete(id: number): Promise<any>{
        const trx = await knex.transaction()
        const isDeleted = await trx(this.table).where('id', id).del()
        trx.commit();
        return isDeleted
    }

    async update(id: number, course: any): Promise<any>{
        const trx = await knex.transaction()
        const isUpdated = await trx(this.table).where('id', id).update(course);
        trx.commit();
        return isUpdated 
    }

}

export default CoursesServices