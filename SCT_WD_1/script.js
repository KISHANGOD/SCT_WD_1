// Function to detect scroll and change navbar style
window.onscroll = function() {
    changeNavbarStyle();
  };
  
  function changeNavbarStyle() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  