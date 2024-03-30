// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served with the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <ul>
//         <li>Comment 1</li>
//         <li>Comment 2</li>
//         <li>Comment 3</li>
//     </ul>
// </body>
// </html>
// The comments.html file should be served with the content type text/html.

const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.html');
    const contentType = 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading comments.html');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

