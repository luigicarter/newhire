const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080;

let new_hire_data;

const server = http.createServer((req, res) => {
  console.log(req.url);

  //// serves new hire form html
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('pages/form.html', (err, data) => {
      if (err) {
        console.log('Error getting html ' + err);
      }
      res.writeHead(200, { content: 'text/html' });
      res.write(data);
      res.end();
    });
    /// serves sripts.js file
  } else if (req.url === '/jsFiles/scripts.js' && 'GET') {
    fs.readFile('jsFiles/scripts.js', (err, data) => {
      if (err) {
        console.log('Error getting scripts file: ' + err);
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    /// serves dateppicker file
  } else if (req.url === '/jsFiles/datePicker.js' && 'GET') {
    fs.readFile('jsFiles/datePicker.js', (err, data) => {
      if (err) {
        console.log('error getting datepicker fucntions: ' + err);
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    //serves css files
  } else if (req.url === '/css_files/style.css' && 'GET') {
    fs.readFile('css_files/style.css', (err, data) => {
      if (err) {
        console.log('Error getting CSS file: ' + err);
      }
      res.writeHead(200, { content: 'text/css' });
      res.write(data);
      res.end();
    });
    //serves EC logo
  } else if (req.url === '/images/ec.png' && 'GET') {
    fs.readFile('images/ec.png', (err, data) => {
      if (err) {
        console.error('error getting elections canada picture: ' + err);
      }
      res.writeHead(200, { content: 'image/png' });
      res.write(data);
      res.end();
    });
    // New hire form submition
  } else if (req.url === '/new_hire_form' && req.method === 'POST') {
    try {
      req.on('data', (data) => {
        try {
          const newHireFormData = data.toString();
          const parsedData = JSON.parse(newHireFormData);

          new_hire_data = parsedData['body'];
          Object.keys(new_hire_data).forEach((element) => {
            console.log(element + ' field value ->  ' + new_hire_data[element]);
          });
        } catch (error) {
          console.error(error);
        }
      });
    } catch (error) {
      console.log(' error getting data: ' + err);
    }

    res.writeHead(200, { content: 'application/json' });
    res.write(JSON.stringify({ status: ' form has been accepted' }));
    res.end();
  }
});

server.listen(port, () => {
  console.log('server is running on port' + port);
});
