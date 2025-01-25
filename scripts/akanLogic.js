const maleAkanNames = ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi']
const femaleAkanNames = ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']


let date = 25;
let month = 12;
let year = 2001;
// 0 represents Male and 1 represents female
let gender = 0;
let indexOfDay = getDayOfWeek();

//formula 

// Test out your code

function getDayOfWeek() {
    const CC = Math.floor(year / 100);
    // let monthYear = monthAlteration(checkWhetherLeap(2025));
    // let updatedMonth = Number(monthYear[0]);
    // let updatedYear = Number(monthYear[1]);
    const YY = year % 100;
    const MM = month;
    const DD = date;

    const indexOfDay =(DD + Math.floor((13*(MM + 1))/5) + YY + Math.floor((YY / 4)) + Math.floor((CC / 4)) - (2*CC)) % 7

    return (indexOfDay + 7) % 7;
}

// function checkWhetherLeap(userYear){

//     userYear -= 1;
//     if ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) {
//       return true;
//     } else {
//       return false;
//     }

// }

// function monthAlteration(){
//     if (checkWhetherLeap() && month == 1 || 2){
//         month += 12;
//         year -= 1;

//         return [month, year]
//     } else{
//         return [month, year]
//     }
// }

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


console.log(getAkanName(indexOfDay))
