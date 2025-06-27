let dropDownList = document.querySelector(".dropDownList");

let dropDownBtn = document.querySelector(".dropDownBtn");

let triangle = document.getElementById("triangle")
let triangleOpen = false;

dropDownBtn.addEventListener("click", function () {
    if (triangleOpen === false) {
        triangle.style.rotate = "-90deg";
        triangle.style.transition = "ease .6s";
        triangleOpen = true;
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


    } else { //if triangle open is open aka down, list shows
        triangle.style.rotate = "0deg";
        triangle.style.transition = "ease .6s";
        triangleOpen = false;
        let button1 = document.getElementById("l1").animate([
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