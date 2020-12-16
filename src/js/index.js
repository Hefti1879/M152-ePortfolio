function showSidenav() {
    var x = document.getElementById("topNav");
    if (x.className === "hidden sm:block") {
      x.className = "sideNav";
    } else {
      x.className = "hidden sm:block";
    }
}