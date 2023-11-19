const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const lastname = document.getElementById('lastname');
const errorIcon = document.getElementById("error-icon-id");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorIcon = inputControl.querySelector('.error-icon');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    errorIcon.style.display = 'block'; // Show the error icon
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorIcon = inputControl.querySelector('.error-icon');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    errorIcon.style.display = 'none'; // Hide the error icon
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const lastnameValue = lastname.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First name cannot be empty');
    } else {
        setSuccess(firstname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Lokks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last name cannot be empty');
    } else {
        setSuccess(lastname);
    }

};
