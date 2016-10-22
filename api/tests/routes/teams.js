const request = require('supertest');
const app = require('../../app');
const assert = require('assert');


describe('POST /teams', function() {
  it('respond with bad request', function(done) {
    request(app)
      .post('/teams')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });


  it('respond with ok request', function(done) {
    request(app)
      .post('/teams')
      .send({
        name: 'A-Team',
        sport: 'Football',
        level: 'Casual',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        assert(res.body.id != null)
        assert(res.body.name == 'A-Team')
        assert(res.body.sport == 'Football')
        assert(res.body.level == 'Casual')
        assert(res.body.createdAt != null)
        assert(res.body.updatedAt != null)
      })
      .expect(201, done);
  });
});
