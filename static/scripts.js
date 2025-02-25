const coreEmployeeElement = document.getElementById('core-personel');
const employee = document.getElementById('employ-status');
const start_date = document.getElementById('start-date');

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

function coreEm() {
  if (coreEmployeeElement === null) {
    console.log('core EM check box is unchecked');
  } else {
    console.log(coreEmployeeElement.value);
  }
}

// function dropdown_selection(component) {
//   if (component === ){

//   }
// }

start_date.addEventListener("", () => {
  if (start_date)
});

employee.addEventListener('click', (e) => {
  console.log(e.value);
});

console.log();
