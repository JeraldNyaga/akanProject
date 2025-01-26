const maleAkanNames = ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi']
const femaleAkanNames = ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']
const thirtyMonthday = [4, 6, 9, 11];

// 0  means Male
// 1 means female

let date = Number(document.getElementById('date').value);
let month = Number(document.getElementById('month').value);
let year = Number(document.getElementById('year').value);
let gender = Number(document.getElementById('gender').value);
let indexOfDay = getDayOfWeek();

function getDayOfWeek() {
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = date;

    const indexOfDay =(DD + Math.floor((13*(MM + 1))/5) + YY + Math.floor((YY / 4)) + Math.floor((CC / 4)) - (2*CC)) % 7

    return (indexOfDay + 7) % 7;
}
function getAkanName(indexOfDayWeek){
    if (gender == 0){
        akanName = maleAkanNames[indexOfDayWeek];
        return akanName
    } else if(gender == 1){
        akanName = femaleAkanNames[indexOfDayWeek];
        return akanName;
    } else{
        return 'Invalid name';
    }
}

function checkWhetherLeap(userYear) {
  if ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

function validateMonthInput(year, month, date){
    const leapCheck = checkWhetherLeap(year);

    if(!leapCheck && month === 2 && date > 28){
        return `Error Message`;
    }
    else if (month in thirtyMonthday && date > 30) {
        return  `Invalid date`
    }
    else if(month > 12 || month < 1 || date > 31 || date < 1 || year > 2025 || year || 1800){
        return `invalid date`
    }
    else{
        return true
    }
}