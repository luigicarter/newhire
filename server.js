const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080;

let new_hire_data;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  //// serves new hire form html
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('templates/form.html', (err, data) => {
      if (err) {
        console.log('Error getting html ' + err);
      }
      res.writeHead(200, { content: 'text/html' });
      res.write(data);
      res.end();
    });
    // serves sripts file
  } else if (req.url === '/static/scripts.js' && 'GET') {
    fs.readFile('static/scripts.js', (err, data) => {
      if (err) {
        console.log('Error getting scripts file: ' + err);
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    /// serves dateppicker file
  } else if (req.url === '/static/datePicker.js' && 'GET') {
    fs.readFile('static/datePicker.js', (err, data) => {
      if (err) {
        console.log('error getting datepicker fucntions: ' + err);
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    //serves css files
  } else if (req.url === '/static/style.css' && 'GET') {
    fs.readFile('static/style.css', (err, data) => {
      if (err) {
        console.log('Error getting CSS file: ' + err);
      }
      res.writeHead(200, { content: 'text/css' });
      res.write(data);
      res.end();
    });
    //serves EC logo
  } else if (req.url === '/static/images/ec.png' && 'GET') {
    fs.readFile('static/images/ec.png', (err, data) => {
      if (err) {
        console.log('error getting elections canada picture: ' + err);
      }
      res.writeHead(200, { content: 'image/png' });
      res.write(data);
      res.end();
    });
    // Submitting
  } else if (req.url === '/new_hire_form') {
    try {
      req.on('data', (data) => {
        try {
          const jsonData = data.toString();
          const parsedData = JSON.parse(jsonData);
          // console.log(Object(parsedData['body']));

          for (let i in Object(parsedData['body'])) {
            console.log(Object.keys(parsedData['body'])[i]);
          }
        } catch (error) {
          console.log('error reading json from form') + error;
        }
      });
    } catch (error) {
      console.log(' error getting data: ' + err);
    }

    res.writeHead(200, { content: 'application/json' });
    res.write(JSON.stringify({ message: 'recieved json file ' }));
    res.end();
  }
});

server.listen(port, () => {
  console.log('server is running on port' + port);
});
