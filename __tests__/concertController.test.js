jest.mock('../models/review.js');


connect = require('../config/connection.js');
// You can also associate mock models as well

const request = require('supertest');
var app = require('../app.js');
describe('Test the root path', () => {
    test('It should response the GET method /api/all', () => {
        return request(app).get('/api/all').expect(200);
    });
    test('It should response the GET method /', () => {
        return request(app).get('/').expect(200);
    });
    test('It should response the GET method /thankyou', () => {
        return request(app).get('/thankyou').expect(200);
    });
    test('It should response the POST method /review', () => {
        return request(app).post('/review').expect(200);
    });
    test('It should response the GET method /noreview', () => {
        return request(app).get('/review').expect(200);
    });
    test('It should response the POST method /api', () => {
        return request(app).post('/api').expect(302);
    });
    test('It should response the GET method /add', () => {
        return request(app).get('/add').expect(200);
    });
    test('It should response the GET method /buy', () => {
        return request(app).get('/buy').expect(200);
    });

});
