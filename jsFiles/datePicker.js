// Function to check if a date falls on a weekend (Saturday or Sunday)
function isWeekend(date) {
  var day = date.getDay();
  return day === 0 || day === 6;
}

// Function to add business days to a given date
function addBusinessDays(startDate, daysToAdd) {
  var currentDate = new Date(startDate);
  var addedDays = 0;

  while (addedDays < daysToAdd) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (!isWeekend(currentDate)) {
      addedDays++;
    }
  }

  return currentDate;
}

// Function to format a date as mm-dd-yyyy
function formatDate(date) {
  var month = date.getMonth() + 1; // Months are zero-based
  var day = date.getDate();
  var year = date.getFullYear();

  return (
    (month < 10 ? '0' : '') +
    month +
    '-' +
    (day < 10 ? '0' : '') +
    day +
    '-' +
    year
  );
}

// Get today's date
var today = new Date();

// Calculate the next 5 business days and store them in `disabledDates`
var disabledDates = [];
// business days to disable
for (var i = 1; i <= 4; i++) {
  ///
  var nextBusinessDay = addBusinessDays(today, i);
  disabledDates.push(formatDate(nextBusinessDay));
}

// Function to initialize a datepicker with disabled dates
function initializeDatePicker(elementId) {
  var dateInput = document.getElementById(elementId);
  if (dateInput) {
    $(dateInput).datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'mm-dd-yyyy',
      startDate: new Date(),
      daysOfWeekDisabled: '0,6', // Disable weekends
      beforeShowDay: function (date) {
        var formattedDate = formatDate(date);
        // Disable the next 5 business days
        if (disabledDates.includes(formattedDate)) {
          return { enabled: false, classes: 'disabled-date' };
        }
        return { enabled: true };
      },
    });
  }
}

// Initialize both datepickers when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeDatePicker('start_date');
  initializeDatePicker('end_date');
});
