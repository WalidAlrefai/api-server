'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../src/models/index');


describe('Testing 404', () => {
    it('testing/clothes', async () => {
        const response = await request.get('/wrongPath');
        expect(response.status).toEqual(404);
    });
});