function showSidenav() {
    var el = document.getElementById("topNav");
    if (el.className === "hidden sm:block") {
      el.className = "sideNav";
    } else {
      el.className = "hidden sm:block";
    }
}

function switchImage(number){

  var id = "photo" + number;
  var el = document.getElementById(id);
  var source = el.src.replace(/^.*[\\\/]/, '');
  if(source == id + ".jpg"){
    el.src = "img/" + id + "_edited.jpg";
  }else {
    el.src = "img/" + id + ".jpg";
  }

}