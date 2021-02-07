//manip button//
function briefTitle(){
    let selectedElement = document.getElementById("mainTitle");
    console.log(selectedElement);
    selectedElement.innerText = "Portfolio";
}

//time function//
function currentTime(i){
    if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ":" + m;
      t = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
    