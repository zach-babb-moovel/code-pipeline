var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var next = require('../../next.js');
var sinon = require('sinon');

describe('test', function() {
  var spy = sinon.spy();
  it('should respond to a request.', function() {
    next.handler({pathParameters: {test: 'foo'}}, {}, spy);
    assert(spy.calledOnce, 'It did not execute handler');
  });
});


