const assert = require('assert');
const app = require('./index');

describe('Server', function() {
  it('should return hello message', function() {
    assert.equal(app.get('/', (req, res) => {
      return res.send('Hello from our EC2 CI/CD deployment!');
    }), undefined);
  });
});
