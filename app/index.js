
var express = require('express');
var bouncy = require('bouncy');
var server = bouncy(function (request, response, bounce) {
	var host = request.headers.host;
	if( host == 'www.hameauderageade.com' || host == 'hameauderageade.com' ) {
		bounce(3000);
	} else if ( host == 'www.123catelier.fr' || host == '123catelier.fr' ) {
		bounce(3001);
	} else if ( host == 'www.canul.fr' || host == 'canul.fr' ) {
		bounce(3002);
  	} else if ( host == 'dev.canul.fr' ) {
		bounce(3004);
  	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end("No such host\n");
  	}
});
server.listen(80);
