const maleAkanNames = ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi']
const femaleAkanNames = ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']
const thirtyMonthday = [4, 6, 9, 11];
const daysOfWeek = ["Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// 0  means Male
// 1 means female

function getDayOfWeek() {
    let date = Number(document.getElementById("date").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = date;

    const indexOfDay =(DD + Math.floor((13*(MM + 1))/5) + YY + Math.floor((YY / 4)) + Math.floor((CC / 4)) - (2*CC)) % 7

    return (indexOfDay + 7) % 7;
}
function getAkanName(event){
    event.preventDefault();
    let gender = Number(document.getElementById("gender").value);
    if (gender == 0){
        akanName = maleAkanNames[getDayOfWeek()];
        return showResult(akanName, validateMonthInput(), getDayOfWeek())
    } else if(gender == 1){
        akanName = femaleAkanNames[getDayOfWeek()];
        return showResult(akanName, validateMonthInput(), getDayOfWeek());
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

function validateMonthInput(){
    let checkYear = Number(document.getElementById("year").value);
    let checkMonth = Number(document.getElementById("month").value);
    let checkDate = Number(document.getElementById("date").value);
    const leapCheck = checkWhetherLeap(checkYear);
    console.log(`${checkDate} ${checkMonth} ${checkYear}`);

    if(((!leapCheck) && (checkMonth == 2) && (checkDate > 28))){
        let errorMessage = `Invalid February date.\nFebruary has 28 days in a year that is not leap.`
        return [false, errorMessage];

    } else if ((leapCheck) && (checkMonth == 2) && (checkDate > 29)) {
        let errorMessage = `Invalid February date.\nFebruary has a maximum of 29 days in a year that is leap.`;
        return [false, errorMessage];

    } else if ((thirtyMonthday.includes(checkMonth)) && (checkDate > 30)) {
        let errorMessage = `Invalid date.\n${monthsOfYear[checkMonth-1]} has a maximum of 30 days.`;
        return [false, errorMessage];
    } else if (
      checkMonth > 12 ||
      checkMonth < 1 ||
      checkDate > 31 ||
      checkDate < 1 ||
      checkYear > 2025 ||
      checkYear < 1800
    ) {
      return [false, `Injected data`];
    } else {
      return [true, `Success`];
    }
}

function showResult(akanName, validation, indexOfDay){
    if(validation[0]){
        let nameAkan = akanName;
        let dayBorn = daysOfWeek[indexOfDay];

        let preMessageAkan = ` ${nameAkan}`;
        let preMessageDay = ` ${dayBorn}`;

        document.getElementById("results").style.display="block";
        document.getElementById("akanSpan").innerText = preMessageAkan;
        document.getElementById("dayBorn").innerText = preMessageDay;
    }
    else{
        let errorMsg = validateMonthInput()[1];
        document.getElementById("results").style.display = "block";
        document.getElementById("results").style.backgroundColor = "#D32F2F";   
        document.getElementById("AkanName").innerText = errorMsg;
        document.getElementById("dayWeek").innerText = "Try Again";
        document.getElementById("AkanName").style.color = "#F5E6CC";
        document.getElementById("dayWeek").style.color = "#F5E6CC";
    }
}