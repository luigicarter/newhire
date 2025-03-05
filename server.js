const http = require('http');
const url = require('url');
const fs = require('fs');
const { log } = require('console');
const crypto = require("crypto")

const port = 8080;

let new_hire_data;

const server = http.createServer((req, res) => {
  let currentUrl;
  try {
    currentUrl = url.parse(req.url)
   // log(currentUrl["href"])
  }catch(err){
    console.error(err)
  }
  
  currentUrlArray = currentUrl.pathname.split("/")
  let lastItemOFUrl = currentUrlArray[ currentUrlArray.length - 1]
  const salt = crypto.randomBytes(16).toString('hex');
  let x = crypto.createHash('sha256').update('hello' + salt).digest('hex');
  
  
  
  
  

  //// serves new hire form html
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('pages/form.html', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found")
      }
      res.writeHead(200, { content: 'text/html' });
      res.write(data);
      res.end();
    });
    /// serves sripts.js file
  } else if (req.url === '/jsFiles/scripts.js' && req.method === 'GET') {
    fs.readFile('jsFiles/scripts.js', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found")
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    /// serves dateppicker file
  } else if (req.url === '/jsFiles/datePicker.js' && req.method === 'GET') {
    fs.readFile('jsFiles/datePicker.js', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found")
      }
      res.writeHead(200, { content: 'text/javascript' });
      res.write(data);
      res.end();
    });
    //serves css files
  } else if (req.url === '/css_files/style.css' && req.method === 'GET') {
    fs.readFile('css_files/style.css', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found")
      }
      res.writeHead(200, { content: 'text/css' });
      res.write(data);
      res.end();
    });
    //serves EC logo
  } else if (req.url === '/images/ec.png' && req.method === 'GET') {
    fs.readFile('images/ec.png', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found")
      }
      res.writeHead(200, { content: 'image/png' });
      res.write(data);
      res.end();
    });
    // New hire form submition
  } else if (req.url === '/new_hire_form' && req.method === 'POST') {
    console.log("receiving new hire form");
    
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
    res.write(JSON.stringify(
      { status: ' form has been accepted',
        fileToken : " WEKJHSKFJDKJDWFB;KB",
      error : "no issue with form"
     }));
    res.end();
  }


});

server.listen(port, () => {
  console.log('server is running on port : ' + port);
});
