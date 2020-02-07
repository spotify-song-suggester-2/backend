const server = require('./api/server');
const request = require('supertest');
const db = require('./dbConfig')

beforeEach(()=>{
    return db.migrate.rollback()
    .then(()=>db.migrate.latest())
    .then(()=>db.seed.run())

})

describe ('post/', () => {
    it('post /register', async() => {
        const res= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
                
            expect(res.status).toBe(201);
                

    })
})



