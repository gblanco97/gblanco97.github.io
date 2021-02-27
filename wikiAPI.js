function wikiAPI() {
    var searchTearm = document.getElementById('searchTerm').value;
    var connect new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;
}