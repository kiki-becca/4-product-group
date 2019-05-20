function openCharger(chargerName) {
  var i;
  var x = document.getElementsByClassName("charger");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(chargerName).style.display = "block";  
}