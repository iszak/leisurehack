const request = require('supertest');
const app = require('../../app');
const assert = require('assert');


describe('POST /teams', () => {
  it('fail to create a fail', done => {
    request(app)
      .post('/teams')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });


  it('should create a team', done => {
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


  it('should get a team failure', done => {
    request(app)
      .get('/teams/d4f91e66-14a2-4bc5-8b24-461c45d24f02')
      .expect(404, done)
  });


  it('should get a team success', done => {
    request(app)
      .post('/teams')
      .send({
        name: 'A-Team',
        sport: 'Football',
        level: 'Casual',
      })
      .expect(201)
      .then(res => {
        request(app)
          .get(`/teams/${res.body.id}`)
          .expect(res => {
            assert(res.body.id != null)
            assert(res.body.name == 'A-Team')
            assert(res.body.sport == 'Football')
            assert(res.body.level == 'Casual')
            assert(res.body.createdAt != null)
            assert(res.body.updatedAt != null)
          })
          .expect(200, done);
      });
  });
});


describe('POST /teams/id/invite', () => {
  it('team doesnt exist', done => {
    request(app)
      .post('/teams/21563c68-a8a1-41f6-8a56-9fb5b7bd34d7/invite')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });


  it('should create a team invite', done => {
    request(app)
      .post('/teams')
      .send({
        name: 'A-Team',
        sport: 'Football',
        level: 'Casual',
      })
      .expect(201)
      .then(res => {
        request(app)
          .post(`/teams/${res.body.id}/invite`)
          .send({
            email: 'foo@bar.com',
          })
          .expect(201, done);
      });
  });

  it('fail to create a fail', function(done) {
    request(app)
      .post('/teams')
      .send({
        name: 'A-Team',
        sport: 'Football',
        level: 'Casual',
      })
      .expect(201)
      .then(res => {
        request(app)
          .post(`/teams/${res.body.id}/invite`)
          .expect(400, done);
      });
  });
});
