const chai = require('chai');

chai.should();

describe('It should run the tests', () => {
  describe('It should succeed', () => {
    (1 + 1).should.equal(2);
  });
});
