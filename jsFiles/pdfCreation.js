import fs from "fs"; // ✅ Works in ES Modules

import url from "url";
import puppeteer, { Browser } from "puppeteer";
import { error, log } from "console";

const hash = "2b71b79479ad0046ad0659df52dca2f271cc30cfea293d6fab4e5d2da5472e43"

let pathToJsonFile = "form_json_files/newHireJson.json"
export  function GetObjectFromJson(hash){
    let file;
    file = fs.readFileSync(pathToJsonFile, (error, data) => {
        file = data
        
    })

    file = JSON.parse(file)
    
    file = file[hash]
    return file
    
        
}





const newHireHtml = {
    Head : ` <!DOCTYPE html>
                <html lang="en">
                <head>
                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/css/bootstrap-datepicker.min.css">
                <link rel="stylesheet" href="css_files/style.css">
                <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/js/bootstrap-datepicker.min.js"></script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Hire HTML</title>
                </head>`,

    style : `.warnings {
                    color: red;
                    font-weight: bold;
                    font-size: 13px;
                    }

                    .wrap-class {
                    word-wrap: break-word;
                    max-width: 270px;
                    }

                    .tight-margin {
                    height: 70px;
                    }

                    .word-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    }

                    .para-word-wrapper {
                    max-width: 300px;
                    word-wrap: break-word;
                    margin-bottom: 0px;
                    max-height: 100px;
                    }

                    .table-title {
                    max-width: fit-content;
                    margin-left: auto;
                    margin-right: auto;
                    }

                    #other-equipment-textbox {
                    display: none;
                    }

                    #other-department {
                    display: none;
                    }

                    #button-container {
                    padding: 70px;
                    }

                    #errorDiv {
                    background-color: red;
                    max-height: 30px;
                    }

                    #errorMessage {
                    color: white;
                    margin-top: 25px;
                    }

                    .checkboxUnchecked {
                    border: solid;
                    border-radius: 20px;
                    padding: 2px;
                    max-width: 250px;
                    color: white;
                    background-color: red;
                    border-color: red;
                    display: none;
                    }

                    #pageError {
                    display: none;
                    }
                    `,
    


    bodyTagWithTitle : `<body>
                        <div class="container d-flex align-items-center justify-content-center ">
                        <div class="d-flex justify-content-center tight-margin word-wrapper">
                            <h3 > <img src="/images/ec.png" id="ec_logo"> FORMULAIRE DE NOUVEAU PERSONNEL </h3>
                            </div>
                        </div>
                        <div class="container d-flex align-items-center justify-content-center">
                            <div class="d-flex justify-content-center">
                            <h3 >  NEW PERSONNEL </h3>
                        </div>
                        </div>
                        <br>`,
    
}




async function geeneratePdf(hash, func){
    
     
    const formDAte = func(hash)
    
    
    const html = ``

    const Browser = await puppeteer.launch();
    const page = await Browser.newPage()

    await page.setContent(html, {waitUntil:"domcontentloaded"})
    const pdfBuffer = await page.pdf({format: "A4" })
    
    
    await fs.writeFile(`pdfFiles/${hash}.pdf`, pdfBuffer , (error) => {
        if (error){
            console.error(" couldn't write file. Error ---> " + " " + error )
        } else {
            console.log("wrote pdf file to pdf folder")
        }
    });


    await Browser.close()

}


geeneratePdf(hash,GetObjectFromJson)