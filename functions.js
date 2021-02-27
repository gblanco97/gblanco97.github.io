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

//array function//
    function parseArray(array) {
        var happy = prompt("add something that makes you happy"); //ask for input
        array.push(happy); //.push method adds a value to an array
        var x = array.sort(); //.sort method sorts values in an array
        var y = x.length; //.length method accesses the length of an array
        console.log(x[y-1]); //log the last item in the array
        console.log(array); //log the entire array
      }
      var newArray = ["coffee", "sunshine", "snacks", "dogs"];