var _ = require('lodash');

exports.handler = function(event, context, callback) {

  var test = event;
  var stuff = [10, 20, 30];
  stuff = _.map(stuff, function(item) { return item + 5; });

  var response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({test: test, stuff: stuff})
  };
  callback(null, response);
};
