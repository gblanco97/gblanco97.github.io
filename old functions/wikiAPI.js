function wikiAPI() {

    var searchTearm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    connect.open('GET', url);

    connect.onload = function () {
        var wikiThing = JSON.parse(this.response);
        //console.log(wikiThing);
        console.log(wikiThing.query.pages);
        var pages = wikiThing.query.pages;
        for (var i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4',);
            document.getElementById("wiki").appendChild(newDiv);
            newDiv.innerText = pages[i].title;

            var pageSource = "https://eng.wikipedia.org/?curlid="
            var newAnchor = document.createElement("a");
            newAnchor.href = pageSource+pages[i].pageid;
            newAnchor.className = 'd-block';
            newAnchor.innerText = pages [i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        };
    }
    connect.send();
}


