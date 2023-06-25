const newsletter_container = document.getElementById("newsletter__container");
const newsletter_form = document.getElementById("newsletter__form");
const form_email = document.getElementById("form__email");
const email_error = document.getElementById("email__error");
const success_container = document.getElementById("success__container");
const success_email = document.getElementById("success__email");
const success_button = document.getElementById("success__button");

newsletter__form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let result = validateEmail(form_email.value);
    if (result === true) {
        newsletter_container.style.display = "none";
        success_email.innerHTML = form_email.value;
        success_container.style.display = "block";
    }
    else {
        form_email.style.borderColor = "hsl(4, 100%, 67%)";
        email_error.style.display = "block";
        form_email.focus();
    }
})

function validateEmail(userEmail) {
    let email_regex = /^[a-zA-Z][a-zA-Z0-9\.]+@[a-z]+\.[a-z]{3}$/;
    let result = email_regex.test(userEmail);
    return result;
}

function checker() {
    let email_regex = /^[a-zA-Z][a-zA-Z0-9\.]+@[a-z]+\.[a-z]{3}$/;

    if (email_regex.test(form_email.value)) {
        form_email.style.borderColor = "hsl(231, 7%, 60%)";
        email_error.style.display = "none";
    }
    else if (form_email.value === "") {
        form_email.style.borderColor = "hsl(231, 7%, 60%)";
        email_error.style.display = "none";
    }
}

success_button.addEventListener("click", function(){
    form_email.value = "";
    success_container.style.display = "none";
    newsletter_container.style.display = "flex";
})
