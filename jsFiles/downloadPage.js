
const downloadTag = document.getElementById('downloadCon')



let me = document.URL
let fileToRequestArray = me.split("/")
fileToRequest = fileToRequestArray[fileToRequestArray.length -1]

async function downloadPDF (fileToRequest){

    let myPdf = await fetch(`http://localhost:8080/requestAPDF/${fileToRequest}`,
        {
           method : "POST",
           
        })
    if (!myPdf.ok){
        console.log("couldn't get file to the client side ");
        
    
    }
    let final = await myPdf.json()
    
    let pdfBinaryData = atob(final["pdf"])
    let pdfByteArray = new Uint8Array(pdfBinaryData.length)
    for (let i = 0; i < pdfBinaryData.length; i++ ){

        pdfByteArray[i] = pdfBinaryData.charCodeAt(i)
    }
    
    
    let convertingPDF = new Blob([pdfByteArray], {type  : "application/pdf"})

    let finalPDF = URL.createObjectURL(convertingPDF)
    console.log(final);
    
    
    return finalPDF

   
    
}    

try {

    
    let file = downloadPDF(fileToRequest)

  
        let DownloadHtml = `
        <p> Download PDf Button</p>
        <a href="${file}.pdf" download="newhire.pdf">
                <button type="button">Download</button>
            </a>`
        
        downloadTag.innerHTML = downloadTag + DownloadHtml
    
    
    
}catch ( err){
    console.log("unable to get file");
    

}