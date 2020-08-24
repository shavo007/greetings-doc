var request = require("request");

var options = {
  method: 'GET',
  url: 'http://localhost:8081/greeting',
  headers: { api_key: 'apiKey' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
