import fs from "fs"; // ✅ Works in ES Modules
import url from "url";
import puppeteer, { Browser } from "puppeteer";


const hash = "2b71b79479ad0046ad0659df52dca2f271cc30cfea293d6fab4e5d2da5472e43"

// let pathToJsonFile = "form_json_files/newHireJson.json"
// export  function GetObjectFromJson(hash){
//     let file;
//     file = fs.readFileSync(pathToJsonFile)
//     console.log(file);
//     file = JSON.parse(file)
//     file = file[hash]
//     console.log(file)
//     return file
    
// }

async function generatePdf(hash) {
    try {
        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // console.log(`Reading HTML file for hash: ${hash}`);
       // const htmlContent = await fs.readFileSync("pages/newHireForm.html");
       await page.setViewport({
        width: 1280,  // Adjust width as needed
        height: 800,  // Adjust height as needed
        deviceScaleFactor: 1, // Keep 1 for normal scaling
    });



     await page.setRequestInterception(true);
   
    page.on("request", async (request) => {
        const url = request.url();    
      await request.continue()
    });

    await page.goto(`http://localhost:8080/makePDF/${hash}`,{ waitUntil: "networkidle2" })
        
    // await page.pdf({path : `pdfFiles/${hash}.pdf`})

    // await browser.close()

    
    } catch (error) {
        console.error("Error in generatePdf function:", error);
    }
}

generatePdf(hash)