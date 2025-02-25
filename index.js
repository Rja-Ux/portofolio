const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1'; // Alamat lokal
const port = 3000; // Port yang dapat dikustom

// Membuat server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Membaca dan menampilkan file HTML
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('<h1>Server Error</h1><p>Could not read index.html</p>');
            return;
        }
        res.end(data);
    });
});

// Menjalankan server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
