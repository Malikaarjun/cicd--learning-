const http = require('http');
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
 
  res.end(`
    <html>
      <head>
        <title>Login Page</title>
      </head>
      <body>
        <h1>Login Page</h1>
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <button id="login">Login</button>
      </body>
    </html>
  `);
});
 
server.listen(3000, () => {
  console.log('Application running on port 3000');
});
