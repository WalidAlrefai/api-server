'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../src/models/index');
let id;


describe('Testing 404', () => {
    it('testing bad method', async () => {
        const response = await request.put('/food');
        expect(response.status).toEqual(404);
    });
});
beforeAll(async () => {
    await db.sync();
});
afterAll(async () => {
    await db.drop();
});


describe('testing food routes', () => {
    
    it('testing get all food', async () => {
        const response = await request.get('/food')
        // console.log(response);
        expect(response.status).toEqual(200)
        
    })
    it('post new food', async () => {
        const response = await request.post('/food').send({
            name: "test",
            price: 5
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
    it('testing food get by id method', async () => {
        const response = await request.get(`/food/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new food', async () => {
        const response = await request.put(`/food/${id}`).send({
            name: "test",
            price: 0
        })
        expect(response.status).toEqual(201);
    });
    it('deleting food by id', async () => {
        const response = await request.delete(`/food/${id}`)
        expect(response.status).toEqual(204);
    })
})

describe('testing clothes routes', () => {
    // can not work withme
    // it('handles my internal server errors', async () => {
    //     const response = await request.get('/food/f'); 
    //     expect(response.status).toEqual(500);
    // });
    // jest.setTimeout(10000)
    it('testing get all clothes', async () => {
        
        const response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    })
    it('post new clothes', async () => {
        const response = await request.post('/clothes').send({
            typs: "test",
            size: 5
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing clothes get by id method', async () => {
        const response = await request.get(`/clothes/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new clothes', async () => {
        const response = await request.put(`/clothes/${id}`).send({
            typs: "test",
            size: 5
        })
        expect(response.status).toEqual(201);
    })
    it('deleting clothes by id', async () => {
        const response = await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(204)
    })
})