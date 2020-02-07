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

describe ('post/', () => {
    it('post /login', async() => {
        const register= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
        const res= await request(server)
                .post('/api/auth/login')
                .send({username: 'habeaus', password: 'loving'})
             console.log(res.body)   
            expect(res.status).toBe(201);
                

    })
})

describe ('get/', () => {
    it('post /songs', async() => {
        const register= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
        const res= await request(server)
                .post('/api/auth/login')
                .send({username: 'habeaus', password: 'loving'})
             console.log(res.body)   
            expect(res.status).toBe(201);
        const rest = await request(server)
                .get('/api/songs/song/12')
                .send({artist_name: 'Scatox'})
            console.log(res.body)
            expect(res.status).toBe(201);


    })
})

describe ('put/', () => {
    it('post /songs', async() => {
        const register= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
        const res= await request(server)
                .post('/api/auth/login')
                .send({username: 'habeaus', password: 'loving'})
             console.log(res.body)   
            expect(res.status).toBe(201);
        const rest = await request(server)
                .get('/api/songs/song/12')
                .send({track_name:'Rulet - Original mix'})
            console.log(res.body)
            expect(res.status).toBe(201);


    })
})

describe ('put/', () => {
    it('post /songs', async() => {
        const register= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
        const res= await request(server)
                .post('/api/auth/login')
                .send({username: 'habeaus', password: 'loving'})
             console.log(res.body)   
            expect(res.status).toBe(201);
        const rest = await request(server)
                .get('/api/songs/song/1')
                .send({track_id:'049RxG2laEl9U1PGYeIqLV'})
            console.log(res.body)
            expect(res.status).toBe(201);


    })
})

describe ('put/', () => {
    it('post /songs', async() => {
        const register= await request(server)
                .post('/api/auth/register')
                .send({username: 'habeaus', password: 'loving'})
        const res= await request(server)
                .post('/api/auth/login')
                .send({username: 'habeaus', password: 'loving'})
             console.log(res.body)   
            expect(res.status).toBe(201);
        const rest = await request(server)
                .get('/api/songs/song/1')
                .send({track_id:'049RxG2laEl9U1PGYeIqLV'})
            console.log(res.body)
            expect(res.status).toBe(201);

        const edit = await request(server)
                .put('/api/songs/songs/change/12')
                .send({track_name: 'Rulet - Original mix'})
            console.log(res.body)
            expect(res.status).toBe(201)


    })
})
