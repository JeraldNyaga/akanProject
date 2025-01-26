
function getInfo(event){

    event.preventDefault();
    console.log("Hello it is Jerald");

    let dummyInfo = Number(document.getElementById('date').value)
    let gender = Number(document.getElementById('gender').value)
    console.log(gender)
    console.log(typeof dummyInfo)


}
const thirtyMonthday = [4, 6, 9, 11];

function validateMonthInput(year, month) {
  const leapCheck = checkWhetherLeap(year);

  if (!leapCheck && month > 28) {
    return `Error Message`;
  } else if (month in thirtyMonthday && month > 30) {
    return `Invalid date`;
  } else {
    return true;
  }
}
validateMonthInput(2004, 2);

let thirty = [4, 6, 9, 11];
console.log(typeof thirty[1])
