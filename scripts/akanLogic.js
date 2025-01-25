const maleAkanNames = ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi']
const femaleAkanNames = ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']

// 0  means Male
// 1 means female

let date = 25;
let month = 12;
let year = 2001;
let gender = 0;
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

