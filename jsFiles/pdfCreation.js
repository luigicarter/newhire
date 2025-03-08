import fs from "fs"; // ✅ Works in ES Modules
import { type } from "os";
import url from "url";


let pathToJsonFile = "form_json_files/newHireJson.json"
function GetObjectFromJson(hash){
    let file;
    file = fs.readFileSync(pathToJsonFile, (error, data) => {
        file = data
        
    })

    file = JSON.parse(file)
    
    file = file[hash]
    return file
    
        
}



