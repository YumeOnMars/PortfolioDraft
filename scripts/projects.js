let dropDownList = document.querySelector(".dropDownList");

let dropDownBtn = document.querySelector(".dropDownBtn");

let triangle = document.getElementById("triangle")
let triangleOpen = false;

dropDownBtn.addEventListener("click", function () {
    if (triangleOpen === false) { //if triangleOpen var is false. Meaning the triangle is facing left and the Dropdownlist hasn't been opened/showing
        triangle.style.rotate = "-90deg"; //rotates the triangle downward.
        triangle.style.transition = "ease .6s";
        triangleOpen = true; //sets the variable to true, to show that the list is now open.
        let button1 = document.getElementById("l1").animate([
            {
                transform: "translateY(-50%)"
            },
            {
                transform: "translateY(-12%)"
            },
        ], {
            duration: 400,
            fill: "forwards"
        });

        let button2 = document.getElementById("l2").animate([
            {
                transform: "translateY(-160%)"
            },
            {
                transform: "translateY(-3%)"
            },
        ], {
            duration: 400,
            fill: "forwards"
        });

        let button3 = document.getElementById("l3").animate([
            {
                transform: "translateY(-250%)"
            },
            {
                transform: "translateY(5%)"
            },
        ], {
            duration: 400,
            fill: "forwards"
        });

                let button4 = document.getElementById("l4").animate([
            {
                transform: "translateY(-340%)"
            },
            {
                transform: "translateY(5%)"
            },
        ], {
            duration: 400,
            fill: "forwards"
        });

                        let button5 = document.getElementById("l5").animate([
            {
                transform: "translateY(-430%)"
            },
            {
                transform: "translateY(10%)"
            },
        ], {
            duration: 400,
            fill: "forwards"
        });


    } else { //if triangle is open meaning it is facing down (List is currently displaying)
        triangle.style.rotate = "0deg"; //rotate triangle facing left to close it
        triangle.style.transition = "ease .6s"; 
        triangleOpen = false; //sets the variable that detects whether the list/dropdown is open or not to false to show that it's closed now.
        clearButtonsAndStuff(); //Clears all the images and textboxes that showed when user clicked an option.
        let button1 = document.getElementById("l1").animate([ //translates all the list items up under behind the Projects DropdownBackground
            {
                transform: "translateY(-12%)"
            },
            {
                transform: "translateY(-160%)"
            }
        ], {
            duration: 400,
            fill: "forwards"
        });
        let button2 = document.getElementById("l2").animate([
                    {
                transform: "translateY(0%)"
            },
            {
                transform: "translateY(-250%)"
            }
        ], {
            duration: 400,
            fill: "forwards"
        });
        let button3 = document.getElementById("l3").animate([
                    {
                transform: "translateY(0%)"
            },
            {
                transform: "translateY(-380%)"
            }
        ], {
            duration: 400,
            fill: "forwards"
        });

                let button4 = document.getElementById("l4").animate([
                    {
                transform: "translateY(0%)"
            },
            {
                transform: "translateY(-500%)"
            }
        ], {
            duration: 400,
            fill: "forwards"
        });

        
                let button5 = document.getElementById("l5").animate([
                    {
                transform: "translateY(0%)"
            },
            {
                transform: "translateY(-600%)"
            }
        ], {
            duration: 400,
            fill: "forwards"
        });
    }
})

let button1 = document.getElementById("l1");
let button2 = document.getElementById("l2");
let button3 = document.getElementById("l3");
let button4 = document.getElementById("l4");
let button5 = document.getElementById("l5");

let textBox1 = document.querySelector(".descriptionTextBox"); //Left TextBox for AI Impact Website
let textBox2 = document.querySelector(".descriptionTextBox2"); //right textbox for Story of Life
let textBox3 = document.querySelector(".descriptionTextBox3"); //left textbox for Aura Quizzer
let textBox4 = document.querySelector(".descriptionTextBox4"); //right textbox for Cooking Game
let textBox5 = document.querySelector(".descriptionTextBox5"); //left textbox for Roblox Tycoon Game

let cookingImg = document.querySelector("#cookingImg");
let robloxImgs = document.querySelector(".RobloxImages");

function clearButtonsAndStuff() { //resets the bgcolor of every button that was clicked & the textboxes and images it shows
    //also used when dropdown arrow is closed.
    button1.style.backgroundColor = "rgba(0, 0, 0, 0.668)";
    button2.style.backgroundColor = "rgba(0, 0, 0, 0.668)";
    button3.style.backgroundColor = "rgba(0, 0, 0, 0.668)";
    button4.style.backgroundColor = "rgba(0, 0, 0, 0.668)";
    button5.style.backgroundColor = "rgba(0, 0, 0, 0.668)";

    textBox1.style.display = "none";
    textBox2.style.display = "none";
    textBox3.style.display = "none";
    textBox4.style.display = "none";
    textBox5.style.display = "none";

    cookingImg.style.display = "none";
    robloxImgs.style.display = "none";
}

button1.addEventListener("click", function() {
    clearButtonsAndStuff();
    button1.style.backgroundColor = "rgba(193, 4, 64, 0.668)";
    textBox1.style.display = "block";
});

button2.addEventListener("click", function() {
    clearButtonsAndStuff();
    button2.style.backgroundColor = "rgba(193, 4, 64, 0.668)";
    textBox2.style.display = "block";   
});

button3.addEventListener("click", function() {
    clearButtonsAndStuff();
    button3.style.backgroundColor = "rgba(193, 4, 64, 0.668)";
    textBox3.style.display = "block";
});

button4.addEventListener("click", function() {
    clearButtonsAndStuff();
    button4.style.backgroundColor = "rgba(193, 4, 64, 0.668)";
    textBox4.style.display = "block";
    cookingImg.style.display = "block";
});

button5.addEventListener("click", function() {
    clearButtonsAndStuff();
    button5.style.backgroundColor = "rgba(193, 4, 64, 0.668)";
    textBox5.style.display = "block";
    robloxImgs.style.display = "flex";
});

//open images on click (maybe do in the future)
//let povImg = document.getElementById("pov")

//povImg.addEventListener("mousedown", function() {
    //console.log("lock")
    //povImg.style.position = "absolute";
    //povImg.style.top = "12vh";
    //povImg.style.left = "-38vw";
    //povImg.style.transform = "scale(4.5)";
    //povImg.style.transition = "ease .5s";
    //povImg.style.zIndex = "7"; 
//})
//let swingImg = document.getElementById("swing");
//let tycoonImg = document.getElementById("tycoon");
//let codeImg = document.getElementById("code");

