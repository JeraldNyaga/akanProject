const maleAkanNames = ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi']
const femaleAkanNames = ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']
const thirtyMonthday = [4, 6, 9, 11];
const daysOfWeek = ["Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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
function getAkanName(event){
    event.preventDefault();
    if (gender == 0){
        akanName = maleAkanNames[indexOfDay];
        return showResult(akanName, validateMonthInput(year, month, date), indexOfDay)
    } else if(gender == 1){
        akanName = femaleAkanNames[indexOfDay];
        return showResult(akanName, validateMonthInput(year, month, date), indexOfDay);
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

function showResult(akanName, validation, indexOfDay){
    if(validation){
        let nameAkan = akanName;
        let dayBorn = daysOfWeek[indexOfDay];

        let preMessageAkan = `Your Akan name is: ${nameAkan}`;
        let preMessageDay = `You were born on: ${dayBorn}`;

        document.getElementById("results").style.display="block";
        document.getElementById("AkanName").innerText=preMessageAkan;
        document.getElementById("dayWeek").innerText=preMessageDay;
    }
    else{
        alert("Incorrect date entered");
    }
}