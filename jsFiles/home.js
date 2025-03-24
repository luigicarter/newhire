const newHirePageButtonButton = document.getElementById("newHireFormPage")
const softwareAccess = document.getElementById("softwareAccess")



newHirePageButtonButton.clientHeight = softwareAccess.clientHeight 



newHirePageButtonButton.addEventListener("click", (event)=> {

    window.location.href  = "http://localhost:8080/newHireFormPage"
    
    
})