let toggle = document.querySelector(".toggle");
let text   = document.querySelector(".text");

function AnimatedToggle() {

        toggle.classList.toggle("active");

        if(toggle.classList.contains("active")){
                text.innerHTML = "On";
        }
        else {
                text.innerHTML = "Off";
        }
}