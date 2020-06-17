import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('Courses', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('subtitle');
        table.date('startedAt').notNullable();
        table.text('description');
        table.boolean('isActive').defaultTo(false)
        table.date('created').notNullable();
        table.date('updated').notNullable();
        
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('Courses')
}

