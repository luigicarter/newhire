
const startDate = document.getElementById('start_date');
const endDate = document.getElementById('end_date');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
const employeeStatus = document.getElementById('employ-status');
const buildingLocation = document.getElementById('building-location');
const employeeTitle = document.getElementById('employee-title');
const employeeSector = document.getElementById('employee-sector');
const employeeBranch = document.getElementById('employee-branch');
const employeeDirectorate = document.getElementById('directorate');
const SupervisorName = document.getElementById('supervisor-name');
const numberOfMonitors = document.getElementById('number-of-monitors');
const otherEquipmentList = document.getElementById('other-equipment-list');
const mailboxAccess = document.getElementById('access-to-shared-mailboxes');
const softwareAccess = document.getElementById('software-access');
const otherRequirments = document.getElementById('other-requirements');
const isManagerOrSupervisorCell = document.getElementById('isManagement-cell');



const currentUrl = document.URL
const splitUrl = currentUrl.split("/")
const curentHash = splitUrl[splitUrl.length - 1]

async function getFormData(hash){

    const formUrl = `http://localhost:8080/`+"newHireObject/"+hash

    const response = await fetch(formUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"}  // Ensure server understands JSON
        
    })

    if (!response){
        throw new Error("couldn't fetch file ")
    }
    
    let data = await response.json()

    return data
}



let rawObject = await  getFormData(curentHash)

const NHFD = rawObject["formInfo"]


Object.keys(NHFD).forEach((element) => {
    console.log(element + " " + NHFD[element])
    
})






startDate.value = NHFD["startDate"]
endDate.value = NHFD["endDate"]
firstName.value = NHFD["firstName"]
lastName.value = NHFD["lastName"]
phoneNumber.value = NHFD["phoneNumber"]
email.value = NHFD["email"]
address.value = NHFD["address"]
employeeStatus.value = NHFD["employeeStatus"]
buildingLocation.value = NHFD["buildingLocation"]
