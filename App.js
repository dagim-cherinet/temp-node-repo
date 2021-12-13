const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("this is about page");
  } else {
    res.end(`<h1>Oops!</h1>
  <p>We cant find the requested page</P>
  <a href ='/'>back to`);
  }
});
server.listen(5000);
