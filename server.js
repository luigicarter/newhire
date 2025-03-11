import http from "http"
import url from "url"
import fs, { read } from "fs"
import crypto from "crypto"
import os from "os"
import { json } from "stream/consumers"


// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const { log } = require('console');
// const crypto = require("crypto");
// const { json } = require('stream/consumers');
// const { callbackify } = require('util');


const port = 8080;







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
  
  
  console.log(req.url);
  
  

  //// serves new hire form html
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('pages/webForm.html', (err, data) => {
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
    let new_hire_data;

    const salt = crypto.randomBytes(16).toString('hex'); //// creates unique identifieder to make a hash
    let hashCode = crypto.createHash('sha256').update('hello' + salt).digest('hex');//// this is the user's unique hash to track file 
    
    console.log("receiving new hire form");

    /// capturing new hire form date 
    try {
      req.on('data', (data) => {
      //// reading json file from client with form data 
      /////////making json file into string
          const newHireFormData = data.toString();
          ////parsing to json 
          const parsedData = JSON.parse(newHireFormData);
         ///holding data in temp vaiavle to use later 

          new_hire_data = parsedData['body'];
         //// write file to json file
         console.log("reading data ");
         //// reading json file 
        fs.readFile("form_json_files/newHireJson.json", (err, data)=>{
          if(err){
            console.log(" error is " +err);
          }
          let cleantJsonFile = {}
          try {
            /// LOADING json file into memory 
            cleantJsonFile = JSON.parse(data)

          }catch(parseError){
            console.error(" error with parsing data " + parseError)

          }
          /// adding new hire form to json file with a 256 hash as a key identifer      
          cleantJsonFile[hashCode] = new_hire_data
          let newData = JSON.stringify(cleantJsonFile,  null, 4)
          /// writing to json file  
          fs.writeFile("form_json_files/newHireJson.json", newData, (error)=>{
            if(err){
              console.error(err);
            }else {
              console.log("form data has been added to json file");
            }
          })
        })
        
        
    })
        } catch (error) {
          console.error(error);
        }
    
   
    

    res.writeHead(200, {"content-type": "application/json"})
    res.write(JSON.stringify({
      status : "okay",
      filetoken : hashCode
    }))
    res.end()
    
  /// handle pdf creation 
  } else if ( beforeLastItemOfUrl === "pdf" &&
    req.method === "GET"
  ){
    console.log(req.url);
    
    fs.readFile("form_json_files/newHireJson.json", (err,data) => {
      if( err){
        console.error("error reading file ")
      } 
/// verifies if the hash used in the url exist in json file 
      let hashUrlValidation = JSON.parse(data)
      if(hashUrlValidation[lastItemOfUrl]){
        console.log("hash is tru ");
        fs.readFile("pages/downloadPage.html", (err, data) =>{
          res.writeHead(200, {"content-type" : "text/html"})
          res.write(data)
          res.end()
        })
        /// if hash i n the url doens't exist , user is redirected to page not found message
      }else {
          res.writeHead(404)
          res.write("page not found")
          res.end()
        }
       
    })
    
    
  } else if (beforeLastItemOfUrl === "makePDF"){
    console.log("making pdf ");
    
     fs.readFile("pages/newHireForm.html", (error, data) => {
      console.log("serving page");
      
      if (error){
        console.error("this is the following error when pupeteer tried to make a http reqeust " + " " + error)
      }
      
      res.writeHead(200,  {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
    /////////// serving CSS file to pdf file for the newhire 
  } else if (req.url === "/css_files/newHireStyle.css"){
    fs.readFile("css_files/newHireStyle.css", (err, data)=>{

      if (err){
        console.error("error getting new hire pdf file css " + " " + err)
        res.end("error 404")
      
      }
      console.log("serving CSS to puppeteer");
      

      res.writeHead(200, {"Content-Type" : "text/css"})
      res.write(data)
      res.end()
    } )

    /////////// serving JS data to pdf fiel for the newhire
  } else if (req.url === "/jsFiles/newHireFormPDFEditor.js"){
    fs.readFile("jsFiles/newHireFormPDFEditor.js", (err, data)=> {
      if (err){
        console.log(err);
        res.end("error 404")
        
      }
      console.log("serving JS to puppeteer");
      
      res.writeHead(200, {"Content-Type" : "text/javascript"})
      res.write(data)
      res.end()

    })
  } else if (beforeLastItemOfUrl === "newHireObject" && req.method === "POST"){
    console.log("serving form data to pdf page");
    let objectForCLient
    try {
      let newHireObject = fs.readFileSync(`form_json_files/newHireJson.json`)
      objectForCLient = newHireObject
    } catch (err){
      console.log("file doesn't exist");
      
    }
    let newHireObject = JSON.parse(objectForCLient)
    let objectToSEnd = newHireObject[lastItemOfUrl]
    
    
    res.writeHead(200, {"content-type": "application/json"})
    res.write(JSON.stringify({ formInfo : objectToSEnd}))
    res.end()

  }

});

server.listen(port, () => {
  console.log('server is running on port : ' + port);
});
