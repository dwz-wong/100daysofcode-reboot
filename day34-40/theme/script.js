const theme_btn = document.getElementById("theme__btn");
const circle = document.getElementById("circle");
const theme_value = document.getElementById("theme__value");

theme_btn.addEventListener("click", function() {
    if (theme_value.value === "1") {
        circle.style.left = "1.87em";
        theme_value.value = "2";
    }
    else if (theme_value.value === "2") {
        circle.style.left = "3.65em";
        theme_value.value = "3";
    }
    else if (theme_value.value === "3") {
        circle.style.left = ".3rem";
        theme_value.value = "1";
    }
})
