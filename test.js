const app = require('./index');

describe('Server', function () {
  it('should return hello message', function () {
    app.get('/', function (req, res) {
      res.send('Hello World');
    });
  });
});
