let revealButton = document.querySelector("#RevealProjectsBtn");
let backgroundVid = document.querySelector("#ProjectStartBackground");
let display = document.querySelector("#ProjectDisplayingBackground");


revealButton.addEventListener("click", function() {
    backgroundVid.style.display = "none";
    display.style.display = "block";
    revealButton.style.display = "none";
})