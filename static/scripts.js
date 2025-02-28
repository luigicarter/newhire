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
const fromPublicService = document.getElementById('from-public-service');
const notFromPublicService = document.getElementById('not-from-public-service');
//////// is user the supervisor
const isSupervisor = document.getElementById('IsSupervisor');
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

//// hidden fields
const previousDepartment = document.getElementById('other-department');

//// Tracking variables
////////// employee type checkboxes
let employeeCoreCheckCount = 0;
let employeeESSCheckCount = 0;
let employeePersonnelType = undefined;
/////////// check if employee is from public services
let publicServiceCount = 0;
let notFromPublicCount = 0;
let isEmployeeFromPublicService = undefined;
///
let isASupervisorCount = 0;
let isNotASupervisor = 0;
let isASuperviorAnswer = undefined;

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
  }
  /////handles if user clicks on ESS check box
  else if (value === 'ESS') {
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
    /// handles if the user clicks on "oui" if if they come from public service
  } else if (value === 'fromPublicService') {
    if (publicServiceCount === 0) {
      isEmployeeFromPublicService = true;
      publicServiceCount++;

      notFromPublicService.disabled = true;
      previousDepartment.style.display = 'flex';
      console.log(isEmployeeFromPublicService);
      /// handles if the user DOUBLE clicks on "oui" if if they come from public service
    } else if (publicServiceCount > 0) {
      isEmployeeFromPublicService = undefined;
      previousDepartment.style.display = 'none';
      publicServiceCount--;
      console.log('public service count is ' + publicServiceCount);
      notFromPublicService.disabled = false;
      console.log(isEmployeeFromPublicService);
    }
    /// handles if the user clicks on "Non" if if they come from public service
  } else if (value === 'notFromPublicServer') {
    if (notFromPublicCount === 0) {
      isEmployeeFromPublicService = false;
      notFromPublicCount++;
      fromPublicService.disabled = true;
      console.log(isEmployeeFromPublicService);
      /// handles if the user DOUBLE clicks on "Non" if if they come from public service
    } else if (notFromPublicCount > 0) {
      isEmployeeFromPublicService = undefined;
      notFromPublicCount--;
      fromPublicService.disabled = false;
      console.log(isEmployeeFromPublicService);
    }
    /// handles if the user clicks on "oui" for if the user is a supervisor/manager
  } else if (value === 'isASupervior') {
    if (isASupervisorCount === 0) {
      notSupervisor.disabled = true;
      isASuperviorAnswer = true;
      isASupervisorCount++;
      console.log(isASuperviorAnswer);
      /// handles if the user DOUBLE clicks on "oui" for if the user is a supervisor/manager
    } else if (isASupervisorCount > 0) {
      notSupervisor.disabled = false;
      isASupervisorCount--;
      isASuperviorAnswer = undefined;
      console.log(isASuperviorAnswer);
    }
  }
}

/// event handlers for check boxes
/////// core and ESS employee check boxes
employeeCorePersonel.addEventListener('click', checkBoxesHandler);
employeeESSPersonel.addEventListener('click', checkBoxesHandler);
///// from public service and not from public service checkboxes
fromPublicService.addEventListener('click', checkBoxesHandler);
notFromPublicService.addEventListener('click', checkBoxesHandler);
/// is the user a supervisor or manager checkboxes
isSupervisor.addEventListener('click', checkBoxesHandler);
