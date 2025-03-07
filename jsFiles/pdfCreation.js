import fs from "fs"; // ✅ Works in ES Modules
import { type } from "os";
import url from "url";

fs.readFile("form_json_files/newHireJson.json",  (error, data)=> {
    if(error){
        console.error(error);  
        throw err 

    }

    const user = JSON.parse(data)

    console.log(typeof user);
    

})


export function testExport(){ 
    console.log("hi hello");
    
}