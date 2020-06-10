const validateform = formId => {
    // Password Checker
    const checkPassword = password => {
        /* 1 = Length
         * 2 = No Lowercase, Uppercase, Number
         */
        var lowercase = false;
        var uppercase = false;
        var numeric = false;

        if (password.length < 8)
            return 1;
        for(pwdChar of password){
            //check if character is number
            if(!isNaN(parseInt(pwdChar)))
                numeric = true;
            //check if character is uppercase
            else {
                if (pwdChar.charCodeAt() >= 97 && pwdChar.charCodeAt() <= 122)
                    lowercase = true;
                else if (pwdChar.charCodeAt() >= 65 && pwdChar.charCodeAt() <= 90)
                    uppercase = true;
            }
            if (lowercase && uppercase && numeric) 
                return 0;
        }
        return 2;
    };
    // DoB Checker
    const checkAge = birthdate => {
        const dateOfBirth = new Date(birthdate);
        const today = new Date();
        today.setFullYear(today.getFullYear() - dateOfBirth.getFullYear());
        today.setMonth(today.getMonth() - dateOfBirth.getMonth());
        today.setDate(today.getDate() - dateOfBirth.getDate());
        if (today.getFullYear() < 17) 
            return 1;
        return 0;
    };

    if (!formId) {
        alert('Invalid form has been submitted');
        return;
    }
    const email = formId.querySelector('#enter-email');
    const name = formId.querySelector('#enter-username');
    const password = formId.querySelector('#enter-password');
    const confirmPassword = formId.querySelector('#confirm-password');
    const birthDate = formId.querySelector('#enter-birthdate');
    const gender = formId.querySelector('#gender');
    const country = formId.querySelector('#selectcountry');
    const tos = formId.querySelector('#tos-consent');
    // Element existencies
    if (!email || !name || !password || !confirmPassword || !birthDate || !gender || !country || !tos) {
        alert('Invalid form has been submitted');
        return;
    }
    // Email
    if (!email.value) {
        alert('Email cannot be empty');
        return;
    }
    // Name
    if(!name.value) {
        alert('Username cannot be empty!');
        return;
    }
    // Passwords
    const pwdTest = checkPassword(password.value);
    if (pwdTest) {
        if (pwdTest === 1) 
            alert('Password must at least have 8 characters');
        else
            alert('Password must at least have a lowercase, an uppercase letter, and a number');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
    }
    // Check Age
    if (!birthDate.value) {
        alert('You must enter your date of birth');
        return;
    }
    if (checkAge(birthDate.value)) {
        alert('You must be 17 years old or older to register');
        return;
    }
    // Gender
    if (!gender.value) {
        alert('You must select a gender');
        return;
    }
    // Country
    if (!country.value) {
        alert('You must select a country');
        return;
    }
    if (!tos.checked) {
        alert('You must check the ToS before submitting');
        return;
    }
    alert('Registration Succesful');
    formId.reset();
};