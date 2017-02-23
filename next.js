var _ = require('lodash');

exports.handler = function(event, context, callback) {

  var test = event.pathParameters.test;
  var stuff = [1, 2, 3];
  stuff = _.map(stuff, function(item) { return item + 5; });

  var response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({test: test, stuff: stuff})
  };
  callback(null, response);
};
