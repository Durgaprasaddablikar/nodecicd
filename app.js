const app = require('../index'); // or wherever your server is
const request = require('supertest');
let server;

before((done) => {
  server = app.listen(3000, () => {
    console.log('Server started on port 3000');
    done();
  });
});

after((done) => {
  server.close(done); // <-- Important!
});

describe('Server', () => {
  it('should return hello message', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done);
  });
});
