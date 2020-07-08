import * as config from '../src/knexfile'
import knex from 'knex';

describe('database sample connection', ()=>{

  const connection = knex(config);

  it('mysql -> connection', ()=>{
    
    expect(connection).toBeTruthy();
  })

  it('mysql -> migration', async()=>{

    let migration = await connection.migrate.latest(config);

    expect(migration).toBeTruthy();
  })
})