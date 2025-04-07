const request = require('supertest');
const app = require('./index'); // ✅ Ensure this path is correct

describe('Server', () => {
  it('should return hello message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done);
  });
});
