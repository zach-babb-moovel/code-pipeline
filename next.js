exports.handler = function(event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(event)
  };
  callback(null, response);
};
