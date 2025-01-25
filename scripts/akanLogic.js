const maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
const femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


let date = 15;
let month = 8;
let year = 1995;
// 0 represents Male and 1 represents female
let gender = 1;
let indexOfDay = getDayOfWeek();
console.log(indexOfDay)

//formula 

// Test out your code

function getDayOfWeek() {
    const CC = Math.floor(year / 100);
    let monthYear = monthAlteration(checkWhetherLeap(2025));
    let updatedMonth = Number(monthYear[0]);
    let updatedYear = Number(monthYear[1]);
    const YY = updatedYear % 100;
    const MM = updatedMonth;
    const DD = date;

    const indexOfDay = Math.floor(((CC / 4 - (2 * CC) -1 ) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);

    return indexOfDay;
}

function checkWhetherLeap(userYear){

    userYear -= 1;
    if ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) {
      return true;
    } else {
      return false;
    }

}

function monthAlteration(){
    if (checkWhetherLeap() && month == 1 || 2){
        month += 12;
        year -= 1;

        return [month, year]
    } else{
        return [month, year]
    }
}

function getAkanName(){
    let akanName = null;
    if (gender == 0){
        akanName = maleAkanNames[indexOfDay];
        return akanName
    } else if(gender == 1){
        akanName = femaleAkanNames[indexOfDay];
        return akanName;
    } else{
        return 'Invalid name';
    }
}


console.log(getAkanName())
