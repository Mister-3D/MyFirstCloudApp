const http = require('http');
const port=process.env.PORT || 9000;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World!</h1><br><br><p>Getting Started with my First NodeJS Cloud App.</p>');
});
server.listen(port,() => {
	console.log(`Server running at port ` + port);
});