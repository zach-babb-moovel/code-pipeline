exports.handler = function(event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {},
    body: 'HELLO WORLD! Maybe...'
  };
  callback(null, response);
};
