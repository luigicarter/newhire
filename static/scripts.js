const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');

const coreEmployeeElement = document.getElementById('core-personel');
<<<<<<< HEAD
const employee = document.getElementById('employ-status');

/// add all fields except for check box fields and dropdown

/// write functions to assign values to the check box fields and dynamically grey them out when
// one is selected.

const form_fields = {
  startDate: undefined,
  endDate: undefined,
  firstName: undefined,
  lastName: undefined,
  phoneNumber: undefined,
  email: undefined,
  address: undefined,
  employeeStatus: undefined,
  typeOfEmployee: undefined,
  fromPublicService: undefined,
  SupervisorOrManager: undefined,
  performancePay: undefined,
  buildingLocation: undefined,
  teleworkOrOnsite: undefined,
  employeeTitle: undefined,
  employeeSector: undefined,
  employeeBranch: undefined,
  employeeDirectorate: undefined,
  SupervisorName: undefined,
  numberOfMonitors: undefined,
  KeyboardAndMouse: undefined,
  otherEquipment: undefined,
  cellphone: undefined,
  cellSupervisorOrManager: undefined,
  mailboxAccess: undefined,
  software: undefined,
  Gcdocs: undefined,
  other: undefined,
};
=======
>>>>>>> parent of 799f872 (created form object)

function coreEm() {
  if (coreEmployeeElement === null) {
    console.log('core EM check box is unchecked');
  } else {
    console.log(coreEmployeeElement.value);
  }
}
<<<<<<< HEAD
=======

coreEmployeeElement.addEventListener('click', coreEm);
>>>>>>> parent of 799f872 (created form object)
