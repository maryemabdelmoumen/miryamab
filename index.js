class TabbedMenu {
    constructor() {
      this.menuLinks = document.querySelectorAll(".nav-item");
      this.menuSections = document.querySelectorAll(".menu-section");
      this.init();
    }
  
    init() {
      this.menuLinks.forEach(link => {
        link.addEventListener("click", () => this.openMenuSection(link));
      });
  
      
      this.menuLinks[1].click();
    }
  
    openMenuSection(link) {
      this.menuSections.forEach(section => section.style.display = "none");
      const target = link.getAttribute("href");
      document.querySelector(target).style.display = "block";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const tabbedMenu = new TabbedMenu();
  });
  function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu-section");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("w3-red");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.classList.add("w3-red");
  }
  
  
  document.getElementById("myLink").click();
  
