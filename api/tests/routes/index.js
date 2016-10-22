const request = require('supertest');
const app = require('../../app');
const assert = require('assert');


describe('POST /signup', function() {
  it('respond with bad request', function(done) {
    request(app)
      .post('/signup')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });


  it('respond with ok request', function(done) {
    request(app)
      .post('/signup')
      .send({
        email: 'bish0p@hotmail.com',
        password: 'password'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        console.log(res.body);
      })
      .expect(201, done);
  });
});
