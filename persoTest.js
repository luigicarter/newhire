import { PDFDocument, StandardFonts, charSplit, rgb } from 'pdf-lib'
import fs from "fs"



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



