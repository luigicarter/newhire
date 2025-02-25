const coreEmployeeElement = document.getElementById('core-personel');

function coreEm() {
  if (coreEmployeeElement === null) {
    console.log('core EM check box is unchecked');
  } else {
    console.log(coreEmployeeElement.value);
  }
}

coreEmployeeElement.addEventListener('click', coreEm);
