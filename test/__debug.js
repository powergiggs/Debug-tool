const expect = require('chai').expect;
const util = require('../index.js');


describe('Debug Tool Utiltity', () => {
  beforeEach((done) => {
    process.env.DEBUG = 'true';
    done();
  });

  it('Test Error', () => {
    const error = util.debug('my warning', 'testing', 'error');
    expect(error).to.be.equal('error');
  });
  it('Test Success', () => {
    const success = util.debug('my warning', 'testing', 'success');
    expect(success).to.be.equal('success');
  });
  it('Test Warning', () => {
    const warning = util.debug('my warning', 'testing', 'warning');
    expect(warning).to.be.equal('warning');
  });
});
