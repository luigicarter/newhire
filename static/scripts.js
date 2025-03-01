/// all static fields
const startDate = document.getElementById('start_date');
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
const otherEquipmentList = document.getElementById('other-equipment-list');
const mailboxAccess = document.getElementById('access-to-shared-mailbox');
const softwareAccess = document.getElementById('software-access');
const otherRequirments = document.getElementById('other-requirements');
const isManagerOrSupervisorCell = document.getElementById('isManagement-cell');

/// variable to manipulate div
const otherEquipmentText = document.getElementById('other-equipment-textbox'); ///  this is a div

//check box fields
//////////////// type of employee

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

// Object to record all fields
//// each item returns the value of the field it's assigned to
const form_fields = {
  startDate: () => {
    return startDate.value;
  },
  endDate: () => {
    return endDate.value;
  },
  firstName: () => {
    return firstName.value;
  },
  lastName: () => {
    return lastName.value;
  },
  phoneNumber: () => {
    return phoneNumber.value;
  },
  email: () => {
    return email.value;
  },
  address: () => {
    return address.value;
  },
  employeeStatus: () => {
    return employeeStatus.value;
  }, /// casual , term, indeterminate ....

  typeOfEmployee: undefined, /// assigned form check box /// core or ESS
  fromPublicService: undefined, //assigned from check box // is user coming from anotehr department or have the worked in the past
  otherDepartment: () => {
    if (fromPublicService.checked) {
      return previousDepartment.value;
    } else {
      return undefined;
    }
  }, /// if the user is from another department, it would be listed here
  SupervisorOrManager: undefined, // to check if user is a manager or supervisor
  performancePay: undefined, // will user receive performance pay
  buildingLocation: () => {
    return buildingLocation.value;
  }, // which building location us the user going to work in

  teleworkOrOnsite: undefined, /// is user teleworking or on site
  employeeTitle: () => {
    return employeeTitle.value;
  }, // self explinatory
  employeeSector: () => {
    return employeeSector.value;
  }, // self explinatory
  employeeBranch: () => {
    return employeeBranch.value;
  }, /// self explinatory
  employeeDirectorate: () => {
    return employeeDirectorate.value;
  }, /// self explinatory
  SupervisorName: () => {
    return SupervisorName.value;
  }, // self explinatory
  numberOfMonitors: () => {
    return numberOfMonitors.value;
  }, // self explinatory
  KeyboardAndMouse: undefined, // self explinatory
  otherEquipmentText: () => {
    if (otherEquipmentCheck.checked) {
      return otherEquipmentList.value;
    }
  }, /// self explinatory
  cellphone: undefined, // self explinatory
  cellSupervisorOrManager: undefined,
  mailboxAccess: undefined,
  software: undefined,
  Gcdocs: undefined,
  other: undefined,
};

//// Tracking variables
////////// employee type checkboxes
let employeeCoreCheckCount = 0;
let employeeESSCheckCount = 0;
let employeePersonnelType = undefined;

/////////// check if employee is from public services
let publicServiceCount = 0;
let notFromPublicCount = 0;
let isEmployeeFromPublicService = undefined;
/// if user is a supervisor/manager checkboxes
let isASupervisorCount = 0;
let isNotASupervisorCount = 0;
let isASuperviorAnswer = undefined;
/// performance pay tracking variables
let yesPerformancePayCount = 0;
let noPerformancePayCount = 0;
let performancePayAnswer = undefined;

/// telework or onsite checkboxes tracking variables
let yesTeleworkCount = 0;
let yesOnsiteCount = 0;
let teleworkOrOnsite = undefined;
/// other equipment checkbox tracking variables
let yesNeedAKeyboardCount = 0;
let needOtherEquipmentCount = 0;
let needMouseAndKeyboard = undefined;
let otherEquipmentAnswer = undefined;
/// GCdocs checkboxes tracking varaibles
let yesGCdocsCount = 0;
let noGCdocsCount = 0;
let gcdocsAccessAnswer = undefined;
/// cell phone checkboxes tracking variables
let yesCellCount = 0;
let noCellCount = 0;
let needCellAnswer = undefined;

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
  } else if (value === 'notFromPublicServer') {
    /// handles if the user clicks on "Non" if if they come from public service
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
  } else if (value === 'isASupervior') {
    /// handles if the user clicks on "oui" for if the user is a supervisor/manager
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
  } else if (value === 'Is not a supervior') {
    /// handles if the user  clicks on "NON" for if the user is a supervisor/manager
    if (isNotASupervisorCount === 0) {
      isASuperviorAnswer = false;
      isSupervisor.disabled = true;
      isNotASupervisorCount++;
      console.log(isASuperviorAnswer);
      /// handles if the user  clicks on "NON" for if the user is a supervisor/manager
    } else if (isNotASupervisorCount > 0) {
      isASuperviorAnswer = undefined;
      isSupervisor.disabled = false;
      isNotASupervisorCount--;
      console.log(isASuperviorAnswer);
    }
    /// handles if the user  clicks on "Oui" for if the user is going to receive performance pay
  } else if (value === 'Employee will receive performance pay') {
    if (yesPerformancePayCount === 0) {
      noPerformancePay.disabled = true;
      yesPerformancePayCount++;
      performancePayAnswer = true;
      console.log(performancePayAnswer);
      /// handles if the user DOUBLE  clicks on "Oui" for if the user is going to receive performance pay
    } else if (yesPerformancePayCount > 0) {
      noPerformancePay.disabled = false;
      yesPerformancePayCount--;
      performancePayAnswer = undefined;
      console.log(performancePayAnswer);
    }
    /// handles if the user  clicks on "NON" for if the user is going to receive performance pay
  } else if (value === 'Employee not will receive performance pay') {
    if (noPerformancePayCount === 0) {
      yesPerformancePay.disabled = true;
      noPerformancePayCount++;
      performancePayAnswer = false;
      console.log(performancePayAnswer);
      /// handles if the user DOUBLE clicks on "NON" for if the user is going to receive performance pay
    } else if (noPerformancePayCount > 0) {
      yesPerformancePay.disabled = false;
      noPerformancePayCount--;
      performancePayAnswer = undefined;
      console.log(performancePayAnswer);
    }
    /// handles if the user  clicks on "telework" for if the user is going to work from home
  } else if (value === 'telework') {
    if (yesTeleworkCount === 0) {
      onSite.disabled = true;
      yesTeleworkCount++;
      teleworkOrOnsite = 'Telework';
      console.log(teleworkOrOnsite);
      /// handles if the user  clicks on double "telework" for if the user is going to work from home
    } else if (yesTeleworkCount > 0) {
      onSite.disabled = false;
      yesTeleworkCount--;
      teleworkOrOnsite = undefined;
      console.log(teleworkOrOnsite);
    }
    /// handles if the user  clicks on "Onsite" for if the user is going to work from home
  } else if (value === 'Onsite') {
    if (yesOnsiteCount === 0) {
      telework.disabled = true;
      yesOnsiteCount++;
      teleworkOrOnsite = 'Onsite';
      console.log(teleworkOrOnsite);
      /// handles if the user double clicks on "Onsite" for if the user is going to work from home
    } else if (yesOnsiteCount > 0) {
      telework.disabled = false;
      yesOnsiteCount--;
      teleworkOrOnsite = undefined;
      console.log(teleworkOrOnsite);
    }
    /// handles if the user  clicks on "keyboard and mouse" for if the user needs a mouse and keyboard
  } else if (value === 'keyboard-mouse') {
    if (yesNeedAKeyboardCount === 0) {
      needMouseAndKeyboard = true;
      yesNeedAKeyboardCount++;
      console.log(needMouseAndKeyboard);
      /// handles if the user double clicks on "keyboard and mouse" for if the user needs a mouse and keyboard
    } else if (yesNeedAKeyboardCount > 0) {
      needMouseAndKeyboard = false;
      yesNeedAKeyboardCount--;
      console.log(needMouseAndKeyboard);
    }
    /// handles if the user  clicks on "Other Hardware Requirements:" for if the user needs more equipment
  } else if (value === 'other-equipment-check') {
    if (needOtherEquipmentCount === 0) {
      otherEquipmentAnswer = true;
      otherEquipmentText.style.display = 'flex';
      needOtherEquipmentCount++;
      console.log(otherEquipmentAnswer);
      /// handles if the user double clicks on "Other Hardware Requirements:" for if the user needs more equipment
    } else if (needOtherEquipmentCount > 0) {
      otherEquipmentAnswer = false;
      otherEquipmentText.style.display = 'none';
      needOtherEquipmentCount--;
      console.log(otherEquipmentAnswer);
    }
    /// handles if the user  clicks on "oui" for if the user needs GCDOCS Access
  } else if (value === 'YesGCdocs') {
    if (yesGCdocsCount === 0) {
      noGCDOCS.disabled = true;
      gcdocsAccessAnswer = true;
      yesGCdocsCount++;
      console.log(gcdocsAccessAnswer);
      /// handles if the user double clicks on "oui" for if the user needs GCDOCS Access
    } else if (yesGCdocsCount > 0) {
      noGCDOCS.disabled = false;
      gcdocsAccessAnswer = undefined;
      yesGCdocsCount--;
      console.log(gcdocsAccessAnswer);
    }
  } else if (value === 'NoGCdocs') {
    if (noGCdocsCount === 0) {
      yesGCDOCS.disabled = true;
      noGCdocsCount++;
      gcdocsAccessAnswer = false;
      console.log(gcdocsAccessAnswer);
    } else if (noGCdocsCount > 0) {
      yesGCDOCS.disabled = false;
      noGCdocsCount--;
      gcdocsAccessAnswer = undefined;
      console.log(gcdocsAccessAnswer);
    }
  } else if (value === 'yes-cellphone') {
    if (yesCellCount === 0) {
      noCell.disabled = true;
      yesCellCount++;
      needCellAnswer = true;
      console.log(needCellAnswer);
    } else if (yesCellCount > 0) {
      noCell.disabled = false;
      yesCellCount--;
      needCellAnswer = undefined;
      console.log(needCellAnswer);
    }
  } else if (value === 'no-cellphone') {
    if (noCellCount === 0) {
      yesCell.disabled = true;
      noCellCount++;
      needCellAnswer = false;
      isManagerOrSupervisorCell.disabled = true;
      console.log(needCellAnswer);
    } else if (noCellCount > 0) {
      yesCell.disabled = false;
      isManagerOrSupervisorCell.disabled = false;
      noCellCount--;
      needCellAnswer = undefined;
      console.log(needCellAnswer);
    }
  }
}

/////////////////////// event handlers for check boxes

//// core and ESS employee check boxes
employeeCorePersonel.addEventListener('click', checkBoxesHandler);
employeeESSPersonel.addEventListener('click', checkBoxesHandler);
///// from public service and not from public service checkboxes
fromPublicService.addEventListener('click', checkBoxesHandler);
notFromPublicService.addEventListener('click', checkBoxesHandler);
/// is the user a supervisor or manager checkboxes
isSupervisor.addEventListener('click', checkBoxesHandler);
notSupervisor.addEventListener('click', checkBoxesHandler);
/// performance pay check boxes
yesPerformancePay.addEventListener('click', checkBoxesHandler);
noPerformancePay.addEventListener('click', checkBoxesHandler);
/// telework and onsite checkboxes
telework.addEventListener('click', checkBoxesHandler);
onSite.addEventListener('click', checkBoxesHandler);
/// keybaord and mouse and other equipment checkboes
KeyboardAndMouse.addEventListener('click', checkBoxesHandler);
otherEquipmentCheck.addEventListener('click', checkBoxesHandler);
/// GCdocs access checkboxes
yesGCDOCS.addEventListener('click', checkBoxesHandler);
noGCDOCS.addEventListener('click', checkBoxesHandler);
////cell phone checkboxes
yesCell.addEventListener('click', checkBoxesHandler);
noCell.addEventListener('click', checkBoxesHandler);
