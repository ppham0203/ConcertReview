var connect = require('../config/connection.js');
describe("connect", function() {
  it("should connect", function() {
    expect(connect).toBeTruthy();
  });

});
