const hamMenu = document.querySelector("#ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
let menuToggle = false;

const buttonIds = ['ProjectsBtn', 'PassionsBtn', 'HomeBtn', 'ConnectBtn', 'AboutMeBtn'];

// Automatically set active nav button based on the current page
function autoSetActiveButton() {
  const currentPath = window.location.pathname.split("/").pop(); // e.g., 'aboutme.html'

  buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (!button) return;

    const href = button.getAttribute("href");
    if (href === currentPath) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}


window.addEventListener("DOMContentLoaded", autoSetActiveButton);


document.addEventListener("swup:contentReplaced", autoSetActiveButton);

hamMenu.addEventListener("click", function () {
  if (!menuToggle) {
    hamMenu.src = "images/X.png";
    offScreenMenu.animate([
      { transform: "translateX(450px)" },
      { transform: "translateX(0px)" }
    ], {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards"
    });
    menuToggle = true;
  } else {
    hamMenu.src = "images/hammenu.png";
    offScreenMenu.animate([
      { transform: "translateX(0px)" },
      { transform: "translateX(450px)" }
    ], {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards"
    });
    menuToggle = false;
  }
});