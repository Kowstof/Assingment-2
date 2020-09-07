function setActive(item) {
  var all = document.getElementsByClassName('nav');
  var active = document.getElementById(item.id);

  for (i = 0; i < all.length; i++) {
    all[i].classList.remove("active");
  }

  active.classList.add("active");
  updateHeight(active);
}

function updateHeight(page) {
  var frame = document.getElementById('frame');
  if (page.id == "about") {
    frame.style.height = '500px';
  }
  else if (page.id == "town") {
    frame.style.height = '1700px';
  }
  else {
    frame.style.height = '800px';
  }
}
