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
function happySort(happiness) {
    var happy = prompt('include something that makes you happy');
    happy = happy.toLowerCase();
    happyArray.push(happy);
    var sortedHappy = happyArray.sort();
    varhappyAsUL - sortedHappy.map(function (i) {
        return i
    })

    document.getElementById('happyList').innerHTML =
    '<li>' + happyAsUL.join('</li><li>') + '<li>'
}

function lastHappy(){
    index = happyArray.length - 1;
    document.getElementById("lasthappy").innerHTML = happyArray[index];
}

newArray = ["coffee", "sunshine", "snacks", "dogs"];