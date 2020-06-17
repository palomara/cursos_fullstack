import knex from '../database/connection'

class CoursesServices{

    table:string = 'Courses'
    constructor(){}

    async GetAll(): Promise<any[]>{
        const courses = await knex(this.table).select('*');

        return courses;
    }

    async Create(id: number, course: any): Promise<any>{
        const trx = await knex.transaction()
        const persistedIds = await trx(this.table).insert(course);
        trx.commit();
        const id = persistedIds[0]
        
        return knex(this.table).select('*').where('id', '=', id).first();
    }

    async GetById(id: number): Promise<any>{
        const courses = await knex(this.table).select('*').where('id', '=', id).first();

        return courses;
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