const request = require('supertest');
const app = require('./index');

describe('Server', function() {
  it('should return hello message', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello from our EC2 CI/CD deployment!', done);
  });
});

