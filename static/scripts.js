/// all static fields
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
const previousDepartmentField = document.getElementById(
  'other-department-text'
);

//// Submit button for the form

const SubmitButton = document.getElementById('SubmitButton');

///

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
  fromPublicServiceField: undefined, //assigned from check box // is user coming from anotehr department or have the worked in the past
  otherDepartment: () => {
    if (fromPublicService.checked) {
      return previousDepartmentField.value;
    } else {
      return 'not from public service';
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
  cellSupervisorOrManager: () => {
    if (
      isManagerOrSupervisorCell.value ===
      "Si oui, est-ce que l'employé / If yes, is employee:"
    ) {
      return 'not specified';
    } else {
      return isManagerOrSupervisorCell.value;
    }
  },
  teleworkOrOnsite: undefined,
  mailboxAccess: () => {
    return mailboxAccess.value;
  },
  software: () => {
    return softwareAccess.value;
  },
  Gcdocs: undefined,
  other: () => {
    return otherRequirments.value;
  },
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
      form_fields.typeOfEmployee = value;
      employeeCoreCheckCount++;
      console.log(form_fields.typeOfEmployee);
      console.log(employeePersonnelType);
      employeeESSPersonel.disabled = true;
      //// handles if user unclicks core employee check box
    } else if (employeeCoreCheckCount > 0) {
      employeePersonnelType = undefined;
      form_fields.typeOfEmployee = undefined;
      employeeCoreCheckCount--;
      console.log(employeePersonnelType);
      console.log(form_fields.typeOfEmployee);
      employeeESSPersonel.disabled = false;
    }
  }
  /////handles if user clicks on ESS check box
  else if (value === 'ESS') {
    if (employeeESSCheckCount === 0) {
      employeePersonnelType = value;
      form_fields.typeOfEmployee = value;
      employeeESSCheckCount++;
      employeeCorePersonel.disabled = true;
      console.log(form_fields.typeOfEmployee);
      /// handles if the user unclicks in ESS check box
    } else if (employeeESSCheckCount > 0) {
      employeePersonnelType = undefined;
      form_fields.typeOfEmployee = undefined;
      employeeESSCheckCount--;
      console.log(employeePersonnelType);
      console.log(form_fields.typeOfEmployee);

      employeeCorePersonel.disabled = false;
    }
    /// handles if the user clicks on "oui" if if they come from public service
  } else if (value === 'fromPublicService') {
    if (publicServiceCount === 0) {
      isEmployeeFromPublicService = true;
      form_fields.fromPublicServiceField = true;
      publicServiceCount++;
      notFromPublicService.disabled = true;
      previousDepartment.style.display = 'flex';
      console.log(
        'this is from the form field obvject' + form_fields.fromPublicService
      );
      console.log(isEmployeeFromPublicService);
      /// handles if the user DOUBLE clicks on "oui" if if they come from public service
    } else if (publicServiceCount > 0) {
      isEmployeeFromPublicService = undefined;
      form_fields.fromPublicServiceField = undefined;
      previousDepartment.style.display = 'none';
      publicServiceCount--;
      console.log(form_fields.fromPublicServiceField);
      notFromPublicService.disabled = false;
      console.log(isEmployeeFromPublicService);
    }
  } else if (value === 'notFromPublicServer') {
    /// handles if the user clicks on "Non" if if they come from public service
    if (notFromPublicCount === 0) {
      isEmployeeFromPublicService = false;
      form_fields.fromPublicServiceField = false;
      notFromPublicCount++;
      fromPublicService.disabled = true;
      console.log(form_fields.fromPublicServiceField);
      /// handles if the user DOUBLE clicks on "Non" if if they come from public service
    } else if (notFromPublicCount > 0) {
      isEmployeeFromPublicService = undefined;
      form_fields.fromPublicServiceField = undefined;
      notFromPublicCount--;
      fromPublicService.disabled = false;
      console.log(form_fields.fromPublicServiceField);
    }
  } else if (value === 'isASupervior') {
    /// handles if the user clicks on "oui" for if the user is a supervisor/manager
    if (isASupervisorCount === 0) {
      notSupervisor.disabled = true;
      form_fields.SupervisorOrManager = true;
      isASuperviorAnswer = true;
      isASupervisorCount++;
      console.log(isASuperviorAnswer);
      /// handles if the user DOUBLE clicks on "oui" for if the user is a supervisor/manager
    } else if (isASupervisorCount > 0) {
      notSupervisor.disabled = false;
      form_fields.SupervisorOrManager = undefined;
      isASupervisorCount--;
      isASuperviorAnswer = undefined;
      console.log(isASuperviorAnswer);
    }
  } else if (value === 'Is not a supervior') {
    /// handles if the user  clicks on "NON" for if the user is a supervisor/manager
    if (isNotASupervisorCount === 0) {
      isASuperviorAnswer = false;
      form_fields.SupervisorOrManager = false;
      isSupervisor.disabled = true;
      isNotASupervisorCount++;
      console.log(isASuperviorAnswer);
      /// handles if the user  clicks on "NON" for if the user is a supervisor/manager
    } else if (isNotASupervisorCount > 0) {
      isASuperviorAnswer = undefined;
      form_fields.SupervisorOrManager = undefined;
      isSupervisor.disabled = false;
      isNotASupervisorCount--;
      console.log(isASuperviorAnswer);
    }
    /// handles if the user  clicks on "Oui" for if the user is going to receive performance pay
  } else if (value === 'Employee will receive performance pay') {
    if (yesPerformancePayCount === 0) {
      noPerformancePay.disabled = true;
      form_fields.performancePay = true;
      yesPerformancePayCount++;
      performancePayAnswer = true;
      console.log(performancePayAnswer);
      /// handles if the user DOUBLE  clicks on "Oui" for if the user is going to receive performance pay
    } else if (yesPerformancePayCount > 0) {
      noPerformancePay.disabled = false;
      form_fields.performancePay = undefined;
      yesPerformancePayCount--;
      performancePayAnswer = undefined;
      console.log(performancePayAnswer);
    }
    /// handles if the user  clicks on "NON" for if the user is going to receive performance pay
  } else if (value === 'Employee not will receive performance pay') {
    if (noPerformancePayCount === 0) {
      yesPerformancePay.disabled = true;
      form_fields.performancePay = false;
      noPerformancePayCount++;
      performancePayAnswer = false;
      console.log(performancePayAnswer);
      /// handles if the user DOUBLE clicks on "NON" for if the user is going to receive performance pay
    } else if (noPerformancePayCount > 0) {
      yesPerformancePay.disabled = false;
      form_fields.performancePay = undefined;
      noPerformancePayCount--;
      performancePayAnswer = undefined;
      console.log(performancePayAnswer);
    }
    /// handles if the user  clicks on "telework" for if the user is going to work from home
  } else if (value === 'telework') {
    if (yesTeleworkCount === 0) {
      form_fields.teleworkOrOnsite = 'telework';
      onSite.disabled = true;
      yesTeleworkCount++;
      teleworkOrOnsite = 'Telework';
      console.log(teleworkOrOnsite);
      /// handles if the user  clicks on double "telework" for if the user is going to work from home
    } else if (yesTeleworkCount > 0) {
      onSite.disabled = false;
      form_fields.teleworkOrOnsite = undefined;
      yesTeleworkCount--;
      teleworkOrOnsite = undefined;
      console.log(teleworkOrOnsite);
    }
    /// handles if the user  clicks on "Onsite" for if the user is going to work from home
  } else if (value === 'Onsite') {
    if (yesOnsiteCount === 0) {
      telework.disabled = true;
      form_fields.teleworkOrOnsite = 'Onsite';
      yesOnsiteCount++;
      teleworkOrOnsite = 'Onsite';
      console.log(teleworkOrOnsite);
      /// handles if the user double clicks on "Onsite" for if the user is going to work from home
    } else if (yesOnsiteCount > 0) {
      telework.disabled = false;
      form_fields.teleworkOrOnsite = undefined;
      yesOnsiteCount--;
      teleworkOrOnsite = undefined;
      console.log(teleworkOrOnsite);
    }
    /// handles if the user  clicks on "keyboard and mouse" for if the user needs a mouse and keyboard
  } else if (value === 'keyboard-mouse') {
    if (yesNeedAKeyboardCount === 0) {
      form_fields.KeyboardAndMouse = true;
      needMouseAndKeyboard = true;
      yesNeedAKeyboardCount++;
      console.log(needMouseAndKeyboard);
      /// handles if the user double clicks on "keyboard and mouse" for if the user needs a mouse and keyboard
    } else if (yesNeedAKeyboardCount > 0) {
      needMouseAndKeyboard = false;
      form_fields.KeyboardAndMouse = undefined;
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
      form_fields.Gcdocs = true;
      noGCDOCS.disabled = true;
      gcdocsAccessAnswer = true;
      yesGCdocsCount++;
      console.log(gcdocsAccessAnswer);
      /// handles if the user double clicks on "oui" for if the user needs GCDOCS Access
    } else if (yesGCdocsCount > 0) {
      noGCDOCS.disabled = false;
      gcdocsAccessAnswer = undefined;
      form_fields.Gcdocs = undefined;
      yesGCdocsCount--;
      console.log(gcdocsAccessAnswer);
    }
  } else if (value === 'NoGCdocs') {
    if (noGCdocsCount === 0) {
      yesGCDOCS.disabled = true;
      form_fields.Gcdocs = false;
      noGCdocsCount++;
      gcdocsAccessAnswer = false;
      console.log(gcdocsAccessAnswer);
    } else if (noGCdocsCount > 0) {
      yesGCDOCS.disabled = false;
      form_fields.Gcdocs = undefined;
      noGCdocsCount--;
      gcdocsAccessAnswer = undefined;
      console.log(gcdocsAccessAnswer);
    }
  } else if (value === 'yes-cellphone') {
    if (yesCellCount === 0) {
      noCell.disabled = true;
      form_fields.cellphone = true;
      yesCellCount++;
      needCellAnswer = true;
      console.log(needCellAnswer);
    } else if (yesCellCount > 0) {
      noCell.disabled = false;
      form_fields.cellphone = undefined;
      yesCellCount--;
      needCellAnswer = undefined;
      console.log(needCellAnswer);
    }
  } else if (value === 'no-cellphone') {
    if (noCellCount === 0) {
      yesCell.disabled = true;
      form_fields.cellphone = false;
      noCellCount++;
      needCellAnswer = false;
      isManagerOrSupervisorCell.disabled = true;
      console.log(needCellAnswer);
    } else if (noCellCount > 0) {
      yesCell.disabled = false;
      isManagerOrSupervisorCell.disabled = false;
      noCellCount--;
      form_fields.cellphone = undefined;
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

const transferJson = {
  body: {},
  other: {},
};

function RequestBuilder(JsonToSend, formObj) {
  for (let entry in formObj) {
    if (typeof formObj[entry] === 'function') {
      JsonToSend['body'][entry] = `${formObj[entry]()}`;
    } else {
      JsonToSend['body'][entry] = `${formObj[entry]}`;
    }
  }

  console.log(JsonToSend);
}

/////// Submit Button
SubmitButton.addEventListener('click', () =>
  RequestBuilder(transferJson, form_fields)
);
