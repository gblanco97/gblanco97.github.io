//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//
function getTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function time() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();    
    // adding 0 for single digits
    
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('time').innerHTML = hh + ":" + mm;
  }
  