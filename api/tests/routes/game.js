const request = require('supertest');
const app = require('../../app');
const assert = require('assert');


describe('POST /games', () => {
  it('fail to create a game team not found', done => {
    request(app)
      .post('/games')
      .send({
        teamId: '253d7f09-df60-488a-9dc0-16a4548968bc'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });


  it('fail to create a game bad request', done => {
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
          .post('/games')
          .send({
            teamId: res.body.id
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done);
      })
  });


  it('should create a game success', done => {
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
          .post('/games')
          .send({
            teamId: res.body.id,
            location: 'London Fields',
            type: '11 aside',
            date: '2016-01-01 00:00:00',
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(res => {
            assert(res.body.id != null)
            assert(res.body.location == 'London Fields')
            assert(res.body.type == '11 aside')
            assert(res.body.date ==  '2016-01-01T00:00:00.000Z')
            assert(res.body.createdAt != null)
            assert(res.body.updatedAt != null)
          })
          .expect(201, done)
      })
  });
})
