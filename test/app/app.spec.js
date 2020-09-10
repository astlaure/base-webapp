const app = require('../../src/app/app');

describe('App Test Suite', function () {
  it('should start the server', function () {
    try {
      const server = app.listen(3000, () => {});
      expect(server).toBeDefined();
      server.close();
    } catch (err) {
      fail(err);
    }
  });
})
