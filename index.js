exports.handler = function(event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      foo: 'I am an object now.'
    })
  };
  callback(null, response);
};
