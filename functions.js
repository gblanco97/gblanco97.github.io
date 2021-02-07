//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//
function getTime() {
    var currentdate = new Date(); 
    var timenow = + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
      document.getElementById("time").innerHTML = "It is "+timenow;
    }