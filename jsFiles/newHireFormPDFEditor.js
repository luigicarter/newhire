import fs from "fs"
import { GetObjectFromJson } from "./pdfCreation";

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

const currentFormObject = GetObjectFromJson(curentHash)


startDate.innerText = currentFormObject["startDate"]
// endDate.value = currentFormObject["endDate"]
// firstName.value = currentFormObject["firstName"]
// lastName.value = currentFormObject["lastName"]
// phoneNumber.value = currentFormObject["phoneNumber"]
// email.value = currentFormObject["email"]
// address.value = currentFormObject["address"]
// employeeStatus.value = currentFormObject["employeeStatus"]
// buildingLocation.value = currentFormObject["buildingLocation"]
