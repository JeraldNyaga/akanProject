
function getInfo(event){

    event.preventDefault();
    console.log("Hello it is Jerald");

    let dummyInfo = Number(document.getElementById('date').value)
    let gender = Number(document.getElementById('gender').value)
    console.log(gender)
    console.log(typeof dummyInfo)


}
