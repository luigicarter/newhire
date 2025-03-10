import fs from "fs"; // ✅ Works in ES Modules

import url from "url";
import puppeteer, { Browser } from "puppeteer";
import { error, log } from "console";

const hash = "2b71b79479ad0046ad0659df52dca2f271cc30cfea293d6fab4e5d2da5472e43"

let pathToJsonFile = "form_json_files/newHireJson.json"
export  function GetObjectFromJson(hash){
    let file;
    file = fs.readFileSync(pathToJsonFile)
    console.log(file);
    file = JSON.parse(file)
    file = file[hash]
    console.log(file)
    return file
    
}

async function generatePdf(hash) {
    try {
        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        console.log(`Reading HTML file for hash: ${hash}`);
        const htmlContent = await fs.readFileSync("pages/newHireForm.html");

        if (!htmlContent.includes("<html")) {
            throw new Error("File does not contain valid HTML. Check file content.");
        }

        console.log("Setting page content...");
        await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });

        console.log("Injecting CSS...");
        await page.addStyleTag({ url: "http://localhost:8080/css_files/newHireStyle.css" });

        console.log("Injecting JavaScript...");
        await page.addScriptTag({ url: "http://localhost:8080/jsFiles/newHireFormPDFEditor.js" });

        console.log("Waiting for JavaScript execution...");
        page.waitForFunction(() => document.body.innerHTML.includes("first-name"), { timeout: 100000 });

        console.log("Taking screenshot...");
        await page.screenshot({ path: "debug_screenshot.png", fullPage: true });

        console.log("Generating PDF...");
        const pdfBuffer = await page.pdf({ format: "A4" });

        await fs.writeFile(`pdfFiles/${hash}.pdf`, pdfBuffer);
        console.log(`PDF saved at: pdfFiles/${hash}.pdf`);

        await browser.close();
    } catch (error) {
        console.error("Error in generatePdf function:", error);
    }
}

generatePdf(hash)