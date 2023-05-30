import { expect } from "chai"
import request from "supertest"
import app from "../app.js"
import accountExistsSignUp from "../middlewares/accountSignUp.js";

describe('Api endpoints test', () => {

  it('should return 200 OK for POST /auth/signin', (done) => {
    const logged = {
      email: 'igna@mh.com.ar',
      password: 'hola1234'
    };

    request(app)
      .post('/auth/signin')
      .send(logged)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })

  }).timeout(30000)

  it('should return 201 if the users account was successfully created for POST /auth/signup', (done) => {
    const exitsUser = {
      name: "Pipo",
      email: 'ignaa2@mh.com.ar',
      password: 'hola1234',
      photo: 'https://www.dofuspourlesnoobs.com/uploads/1/3/0/1/13010384/4670010_orig.png'
    };
    
    request(app)
      .post('/auth/signup')
      .send(exitsUser)
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })

  }).timeout(30000)

  it('should return 200 if get the data of carousels /carousels', (done) => {

    request(app)
      .get('/carousels')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })

  }).timeout(30000)

});
