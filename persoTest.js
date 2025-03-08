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

let form = getFormDAta("2b71b79479ad0046ad0659df52dca2f271cc30cfea293d6fab4e5d2da5472e43")


