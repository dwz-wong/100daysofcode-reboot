const hero_form = document.getElementById("hero__form")
const email = document.getElementById("form__email")
const icon_error = document.getElementById("email__icon-error")
const email_error = document.getElementById("email__error")

hero_form.addEventListener('submit', function(event){
    event.preventDefault();

    const email_validation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!email_validation.test()) {
        email_error.style.display = "block"
        icon_error.style.display = "block"
        
        email.focus()
        return false;
    }
})
