const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('Incident', () => {

  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new Incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '26a00beb')
      .send({
        title: "Novo Caso",
        description: "Descrição completa do caso",
        value: 13.54,
      })

    expect(response.body).toHaveProperty('id')
  })
})