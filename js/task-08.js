const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();

const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;
    
    if (email === '' || password === '') {
        alert('всі поля повинні бути заповнені')
    } else {
            const formData = {
              email,
              password,
            };
        
        console.log(formData);
        form.reset();
    }
}