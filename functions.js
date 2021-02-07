//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//
function getTime() {
    let selectedElement = document.getElementById("time");
    console.log(selectedElement);
    selectedElement.innerText = new Date()
    }