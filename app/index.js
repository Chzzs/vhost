
var express = require('express');
var bouncy = require('bouncy');
var server = bouncy(function (request, response, bounce) {
  if(request.headers.host == 'www.hameauderageade.com'){
		bounce(3000);
  } else if (request.headers.host == 'www.123catelier.fr') {
		bounce(3001);
  } else if (request.headers.host == 'www.canul.fr'|| request.headers.host == 'canul.fr') {
		bounce(3002);
  } else if (request.headers.host == 'api.canul.fr') {
		bounce(3004);
  } else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end("No such host\n");
  }
});
server.listen(80);
