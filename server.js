// import http from "http"
// import url from "url"
// import fs from "fs"
// import crypto from "crypto"

const http = require('http');
const url = require('url');
const fs = require('fs');
const { log } = require('console');
const crypto = require("crypto");
const { json } = require('stream/consumers');
const { callbackify } = require('util');


const port = 8080;

let new_hire_data;

let new_data_Store = {}




const server = http.createServer((req, res) => {
  let currentUrl;
  try {
    currentUrl = url.parse(req.url) 
  }catch(err){
    console.error(err)
  }
  let currentUrlArray = currentUrl.pathname.split("/")
  let lastItemOfUrl = currentUrlArray[ currentUrlArray.length - 1]
  let beforeLastItemOfUrl = currentUrlArray[ currentUrlArray.length - 2]
  
  
  
  

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

    const salt = crypto.randomBytes(16).toString('hex');
    let hashCode = crypto.createHash('sha256').update('hello' + salt).digest('hex');
    
    console.log("receiving new hire form");
    
    
    try {
      req.on('data', (data) => {
        try {
          const newHireFormData = data.toString();
          const parsedData = JSON.parse(newHireFormData);

         new_hire_data = parsedData['body'];
         new_data_Store[hashCode] = new_hire_data
      
        } catch (error) {
          console.error(error);
        }
      });
    } catch (error) {
      console.log(' error getting data: ' + err);
    }
    
    
    
    

    res.writeHead(200, {"content-type": "application/json"})
    res.write(JSON.stringify({
      status : "received form data",
      filetoken : hashCode
    }))
    res.end()
    
  /// handle pdf creation 
  } else if ( beforeLastItemOfUrl === "pdf" &&
    req.method === "GET"
  ){
    console.log(req.url);
    fs.readFile("pages/downloadPage.html", (err, data) =>{
      res.writeHead(200, {"content-type" : "text/html"})
      res.write(data)
      res.end()
    })
    console.log(new_data_Store);
    
  }});

server.listen(port, () => {
  console.log('server is running on port : ' + port);
});
