import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Secret\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to this Docker tutorial');

// });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log('Unfortunately listening on port http://localhost:${port}');
// });