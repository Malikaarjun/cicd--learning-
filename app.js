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
 
        <div id="error"></div>
 
        <script>
          document.getElementById('login').addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
 
            if (username === 'testuser' && password === 'password123') {
              alert('Login successful');
            } else {
              document.getElementById('error').textContent =
                'Invalid username or password';
            }
          });
        </script>
 
      </body>
    </html>
  `);
});
 
server.listen(3000, () => {
  console.log('Application running on port 3000');
});
