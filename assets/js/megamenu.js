
function openCategory(evt, catName) {
  var i, tab2, tablinks;
  tab2 = document.getElementsByClassName("tab2");
  for (i = 0; i < tab2.length; i++) {
    tab2[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(catName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openSubCategory(evt, subcatName) {
  var i, tab2, tablinks;
  tab2 = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tab2.length; i++) {
    tab2[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(subcatName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();