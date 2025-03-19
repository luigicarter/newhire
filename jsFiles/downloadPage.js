
const downloadTag = document.getElementById('downloadCon')
const atag = document.getElementById("aTag")


let me = document.URL
let fileToRequestArray = me.split("/")


fileToRequest = fileToRequestArray[fileToRequestArray.length -1]
async function getPdfInfo(fileToRequest) {

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
    
}

async function downloadPdf(hash){

    let pdfBinary = fetch("http://localhost:8080/getPdfBinary", {
        method : "POST",
        body : JSON.stringify({
            pdfHash : hash
        })

    })

}


(async ()=> { 

    let pdfInfo = await getPdfInfo(fileToRequest)
    console.log(pdfInfo);
    let pdfBinary = downloadPdf(pdfInfo["pdf"])
    

})()
