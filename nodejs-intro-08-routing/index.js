const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`
      <h1>Home page</h1>
      <a href="/services"><button>Services</button></a>
      <a href="/team"><button>Our team</button></a>
      <a href="/about"><button>About us</button></a>
    `);
    res.end();
  } else if (req.url === '/services') {
    res.write(`
      <h1>Services</h1><a href="/">
      <button>Home page</button></a>
    `);
    res.end();
  } else if (req.url === '/team') {
    res.write(`
      <h1>Our team</h1><a href="/">
      <button>Home page</button></a>
    `);
    res.end();
  } else if (req.url === '/about') {
    res.write(`
      <h1>About</h1><a href="/">
      <button>Home page</button></a>
    `);
    res.end();
  } else {
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));

