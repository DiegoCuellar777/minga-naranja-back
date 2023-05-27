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

  it('should return 400 if user alredy exists OK for POST /auth/signup', (done) => {
    const exitsUser = {
      email: 'ignaa@mh.com.ar',
    };
    
    app.use('/auth/signup', accountExistsSignUp)

    request(app)
      .post('/auth/signup')
      .send(exitsUser)
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })

  }).timeout(30000)
  
});
