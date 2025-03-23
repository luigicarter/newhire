
const loadingDiv = document.getElementById('loading-div')
const downloadDiv = document.getElementById("download-div")
const downloadLink = document.getElementById("download-link")


let me = document.URL
let fileToRequestArray = me.split("/")

let fileIsHere = false;

fileToRequest = fileToRequestArray[fileToRequestArray.length -1]
async function getPdfInfo(fileToRequest) {

    try {

        let myPdf = await fetch(`http://localhost:8080/requestPdfInfo/${fileToRequest}`, {
            method: "POST",
        });
    
        if (!myPdf.ok) {
            console.log("Couldn't get file to the client side.");
            return null;
        }
        
        let pdfInfo  = await myPdf.json()
        .then((pdf) => {return pdf})
        
        
        return pdfInfo 

    } catch(err){

        throw new Error("Fetch operation failed to get Pdf Info from server")
    }
    
}

async function downloadPdf(hash){
try {
    let pdfBinary = fetch("http://localhost:8080/getPdfBinary", {
        method : "POST",
        body : JSON.stringify({
            pdfHash : hash
        })

    })

    return pdfBinary

}catch(err){

    throw new Error("Fetch call to get pdf binary data has failed")

}

}

(async ()=> { 

    let pdfInfo = await getPdfInfo(fileToRequest)
    console.log(pdfInfo);
    let pdfBinary = await downloadPdf(pdfInfo["pdf"]).then(
        (result)=> { return result.blob()}).catch(
            (err)=>{ console.error(err + "Couldn't get binary pdf data");
    })
    console.log(pdfBinary);
    
    let fileUrl = URL.createObjectURL(pdfBinary)
    downloadLink.setAttribute("href", fileUrl)
    downloadLink.setAttribute("download", pdfInfo["fileTitle"]+".pdf")
    
    fileIsHere = true

    console.log(fileUrl);

})();

/// add while loop that checks if file has been upload


(async ()=>{
    
    while(true){
        if (fileIsHere === true){

            loadingDiv.style.display = "none";
            downloadDiv.style.display = "flex";
            downloadLink.click()
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 200));
    
    };

})()