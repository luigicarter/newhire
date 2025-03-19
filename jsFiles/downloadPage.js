
const downloadTag = document.getElementById('downloadCon')



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


    if(!downloadTag){

        throw new Error("Download tag doesn't exist")
    }

    let pdfInfo = await getPdfInfo(fileToRequest)
    console.log(pdfInfo);
    let pdfBinary = await downloadPdf(pdfInfo["pdf"]).then(
        (result)=> { return result.blob()}).catch(
            (err)=>{ console.error(err + "Couldn't get binary pdf data");
    })
    console.log(pdfBinary);
    
    let fileUrl = URL.createObjectURL(pdfBinary)
    console.log(fileUrl);
    


    let downloadARef = document.createElement("A")
    downloadARef.href = fileUrl
    downloadARef.download = pdfInfo["fileTitle"]
    

    let downloadBtn = document.createElement("button")
    downloadBtn.innerText = "Download PDF"
    
    console.log("adding button");
    
    downloadARef.appendChild(downloadBtn)

    console.log("adding aRef");
    
    downloadTag.appendChild(downloadARef)

})()


