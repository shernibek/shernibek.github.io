function navigationClick() {
    var x = document.getElementById("navigation-list");
    if (window.innerWidth < 769){
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    } else {
        x.style.display = "block";
    }
}