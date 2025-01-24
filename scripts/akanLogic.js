const maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
const femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let date = 24;
let month = 1;
let year = 2025;
// 0 represents Male and 1 represents female
let gender = 0;

//formula 

function getDayOfWeek() {
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = date;

    const indexOfDay = Math.floor(((CC / 4 - (2 * CC) -1 ) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);

    return indexOfDay;
}

function checkWhetherLeap(userYear){

    userYear -= 1;
    if ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) {
      return ture;
    } else {
      return false;
    }

}

function monthAlteration(){
    if (checkWhetherLeap() && MM == 1 || 2){
        MM += 12;
        YY -= 1;

        return [MM, YY]
    } else{
        return [MM, YY]
    }
}

function getAkanName(){

}
let CC = Math.floor(year / 100)
console.log(getDayOfWeek())