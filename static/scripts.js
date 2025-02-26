const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone');
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
const otherEquipment = 5;
const coreEmployeeElement = document.getElementById('core-personel');
const employee = document.getElementById('employ-status');

/// add all fields except for check box fields and dropdown

/// write functions to assign values to the check box fields and dynamically grey them out when
// one is selected.

// const form_fields = {
//   startDate: undefined,
//   endDate: undefined,
//   firstName: undefined,
//   lastName: undefined,
//   phoneNumber: undefined,
//   email: undefined,
//   address: undefined,
//   employeeStatus: undefined,
//   typeOfEmployee: undefined,
//   fromPublicService: undefined,
//   SupervisorOrManager: undefined,
//   performancePay: undefined,
//   buildingLocation: undefined,
//   teleworkOrOnsite: undefined,
//   employeeTitle: undefined,
//   employeeSector: undefined,
//   employeeBranch: undefined,
//   employeeDirectorate: undefined,
//   SupervisorName: undefined,
//   numberOfMonitors: undefined,
//   KeyboardAndMouse: undefined,
//   otherEquipment: undefined,
//   cellphone: undefined,
//   cellSupervisorOrManager: undefined,
//   mailboxAccess: undefined,
//   software: undefined,
//   Gcdocs: undefined,
//   other: undefined,
// };

function coreEm() {
  if (coreEmployeeElement === null) {
    console.log('core EM check box is unchecked');
  } else {
    console.log(coreEmployeeElement.value);
  }
}
