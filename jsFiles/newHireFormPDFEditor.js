/// static fields 
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

///checkboxes 

const employeeCorePersonel = document.getElementById('core-personel');
const employeeESSPersonel = document.getElementById('ESS-personel');
// done
////////// employee is from public check check boxes ?

const fromPublicService = document.getElementById('from-public-service');
const notFromPublicService = document.getElementById('not-from-public-service');
// done
//////// is user the supervisor

const isSupervisor = document.getElementById('IsSupervisor');
const notSupervisor = document.getElementById('NotSupervisor');
// done
//////// performance pay check boxes

const yesPerformancePay = document.getElementById('performance-pay-yes');
const noPerformancePay = document.getElementById('performance-pay-no');

////////// onsite work

const telework = document.getElementById('telework');
const onSite = document.getElementById('onsite');

/// equipment checkboxes

const KeyboardAndMouse = document.getElementById('keyboard-mouse');
const otherEquipmentCheck = document.getElementById('other-equipment-check');

///////// cell phone

const yesCell = document.getElementById('yes-cellphone');
const noCell = document.getElementById('no-cellphone');

////////// GCDOCS access

const yesGCDOCS = document.getElementById('YesGCdocs');
const noGCDOCS = document.getElementById('NoGCdocs');

//// hidden fields
const previousDepartment = document.getElementById('other-department');
const previousDepartmentField = document.getElementById('other-department-text');

const otherEquipmentText = document.getElementById('other-equipment-textbox')



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
    
    const data = await response.json()

    return data
}



let rawObject = await  getFormData(curentHash)

const NHFD = rawObject["formInfo"]

// mapping static fiels 
startDate.value = NHFD["startDate"]
endDate.value = NHFD["endDate"]
firstName.value = NHFD["firstName"]
lastName.value = NHFD["lastName"]
phoneNumber.value = NHFD["phoneNumber"]
email.value = NHFD["email"]
address.value = NHFD["address"]
employeeStatus.value = NHFD["employeeStatus"]
buildingLocation.value = NHFD["buildingLocation"]
buildingLocation.value = NHFD["buildingLocation"]
employeeTitle.value = NHFD["employeeTitle"]
employeeSector.value = NHFD["employeeSector"] 
employeeBranch.value =NHFD["employeeBranch"]
employeeDirectorate.value = NHFD["employeeDirectorate"]
SupervisorName.value = NHFD["SupervisorName"]
numberOfMonitors.value = NHFD["numberOfMonitors"]




/// conditons for check boxes in pdf files 

if(NHFD["otherEquipmentText"] === "undefined"){

    otherEquipmentList.value = "Not Specified"
} else {
    otherEquipmentText.style.display = "flex"
    otherEquipmentCheck.checked = true
    otherEquipmentList.value = NHFD["otherEquipmentText"]
    
}

if(NHFD["mailboxAccess"] === ""){
    
    mailboxAccess.value = "No Mailbox access has been specified"
} else {
    mailboxAccess.value = NHFD["mailboxAccess"]
}
if(NHFD["software"] === ""){
    
    softwareAccess.value = "No software requirements listed"
} else {
    softwareAccess.value = NHFD["software"]
}

if (NHFD["other"] === "" ){
    otherRequirments.value = "No other requirements listed"    
}else {
    otherRequirments.value = NHFD["other"]
}

if(isManagerOrSupervisorCell.value !== "Noselection" &&
   NHFD["cellphone"] === "true"){
    isManagerOrSupervisorCell.value = NHFD["cellphone"]
}

if (NHFD["typeOfEmployee"] === "Core" ){
    employeeCorePersonel.checked = true
    
} else {
    employeeESSPersonel.checked = true
}
if (NHFD["fromPublicServiceField"] === "true"){
    fromPublicService.checked = true
    previousDepartment.style.display = "flex"
    previousDepartmentField.value = NHFD["otherDepartment"]


} else {
    notFromPublicService.checked = true
}

if (NHFD["SupervisorOrManager"] === "true"){

    isSupervisor.checked = true
} else {
    notSupervisor.checked = true
}

if (NHFD["performancePay"] === "true"){
    yesPerformancePay.checked = true
} else{
    noPerformancePay.checked = true
}

if (NHFD["teleworkOrOnsite"] === "telework" ){
    telework.checked = true
} else {
    onSite.checked = true
}

if(NHFD["KeyboardAndMouse"] === "true"){
    KeyboardAndMouse.checked = true
} 


if (NHFD["cellphone"] === "true"){
    yesCell.checked = true
} else {
    noCell.checked = true
}

if (NHFD["GCdocs"] === "true"){
    yesGCDOCS.checked = true
} else {
    noGCDOCS.checked = true
}