var bouncy = require('bouncy');
var server = bouncy(function (request, res, bounce) {
  if(request.headers.host = 'www.hameauderageade.com'){
    console.log('bounce to 3000');
    bounce(3000);
  } else if (request.headers.host = 'www.123catelier.fr') {
    bounce(3001);
  } else {
    response.status(404).end('no such host');
  }
});
server.listen(80);
