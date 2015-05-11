var bouncy = require('bouncy');
var server = bouncy(function (request, response, bounce) {
	console.log(request.headers.host);
  if(request.headers.host == 'www.hameauderageade.com'){
	console.log("use express.static");
  } else if (request.headers.host == 'www.123catelier.fr') {
	bounce(3000);
  } else {
	response.statusCode = 404;
	response.setHeader("Content-Type", "text/html");
	response.end("No such host\n");
  }
});
server.listen(80);
