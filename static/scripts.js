/// all static fields
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
const employeeStatus = document.getElementById('employ-status');
const buildingLocation = document.getElementById('building-location');
const employeeTitle = document.getElementById('employee-title');
const employeeSector = document.getElementById('employee-sector');
const employeeBranch = document.getElementById('employee branch');
const employeeDirectorate = document.getElementById('directorate');
const SupervisorName = document.getElementById('supervisor-name');
const numberOfMonitors = document.getElementById('number-of-monitors');
const KeyboardAndMouse = document.getElementById('keyboard-mouse');
const otherEquipmentCheck = document.getElementById('other-equipment-check');
const otherEquipmentText = document.getElementById('other-equipment-textbox');
const mailboxAccess = document.getElementById('access-to-shared-mailbox');
const softwareAccess = document.getElementById('software-access');
const otherRequirments = document.getElementById('other-requirements');

//check box fields
//////////////// type of employee
const employeeCorePersonel = document.getElementById('core-personel');
const employeeESSPersonel = document.getElementById('ESS-personel');
////////// employee is from public check check boxes ?
const FromPublicService = document.getElementById('from-public-service');
const notFromPublicService = document.getElementById('not-from-public-service');
//////// is user the supervisor
const isSupervisor = document.getElementById('isSupervisor');
const notSupervisor = document.getElementById('NotSupervisor');
//////// performance pay check boxes
const yesPerformancePay = document.getElementById('performance-pay-yes');
const noPerformancePay = document.getElementById('performance-pay-no');
////////// onsite work
const telework = document.getElementById('telework');
const onSite = document.getElementById('onsite');
///////// cell phone
const yesCell = document.getElementById('yes-cellphone');
const noCell = document.getElementById('no-cellphone');
const isManagerOrSupervisor = document.getElementById('isManagement-cell');
////////// GCDOCS access
const yesGCDOCS = document.getElementById('YesGCdocs');
const noGCDOCS = document.getElementById('NoGCDOCS');

//// Tracking variables
////////// employee type checkboxes
let employeeCoreCheckCount = 0;
let employeeESSCheckCount = 0;
let employeePersonnelType = undefined;
/////////// check if employee is from public services
let publicServiceCount = 0;
let isEmployeeFromPublicService;

/// todo a function to assign values to the check box fields and dynamically grey them out when one is selected.

function checkBoxesHandler(event) {
  const value = event.target.value;
  console.log(`value of the clicked check box is : ${value}`);

  /// handles if user clicks on core employyee box
  if (value === 'Core') {
    if (employeeCoreCheckCount === 0) {
      employeePersonnelType = value;
      employeeCoreCheckCount++;
      console.log(employeeCoreCheckCount);
      console.log(employeePersonnelType);
      employeeESSPersonel.disabled = true;
      //// handles if user unclicks core employee check box
    } else if (employeeCoreCheckCount > 0) {
      employeePersonnelType = undefined;
      employeeCoreCheckCount--;
      console.log(employeePersonnelType);
      console.log(employeeCoreCheckCount);
      employeeESSPersonel.disabled = false;
    }
    /////handles if user clicks on ESS check box
  } else if (value === 'ESS') {
    if (employeeESSCheckCount === 0) {
      employeePersonnelType = value;
      employeeESSCheckCount++;
      employeeCorePersonel.disabled = true;
      console.log(employeePersonnelType);
      /// handles if the user unclicks in ESS check box
    } else if (employeeESSCheckCount > 0) {
      employeePersonnelType = undefined;
      employeeESSCheckCount--;
      console.log(employeePersonnelType);
      employeeCorePersonel.disabled = false;
    }
  }
}

/// event handlers for check boxes
employeeCorePersonel.addEventListener('click', checkBoxesHandler);
employeeESSPersonel.addEventListener('click', checkBoxesHandler);
