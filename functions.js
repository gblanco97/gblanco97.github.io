//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//

var date = new Date();   // get a new date
var n = date.toDateString();   // get date as string
var time = date.toLocaleTimeString();   // get time as string
// set the innerHTML of that element to the date a space the time
document.getElementById('time').innerHTML = n + ' ' + time;
    