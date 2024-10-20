const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const invalidMail = document.getElementById("invalidmail");
const invalidPassword = document.getElementById("invalidpassword");
const invalidConfirmPassword = document.getElementById("invalidconfirmpassword");
const formBtn = document.getElementById('formBtn');
const emailRegex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;


email.addEventListener('input', (e) => {
    let value = e.target.value;
    if(emailRegex.test(value) == true)
        {
            invalidMail.style.display = "none";
            email.style.border = "2px solid black";
        }
        else{
            invalidMail.style.display = "block";
            email.style.border = "2px solid red";
        }
    })

    password.addEventListener('input', (e) => {
        let value = e.target.value;
        if(passwordRegex.test(value) == true)
        {
            invalidPassword.style.display = "none";
            password.style.border = "2px solid black";
        }
        else
        {
            invalidPassword.style.display = "block";
            password.style.border = "2px solid red";
        }
    })


    confirmPassword.addEventListener('input', (e) => {
        let value = e.target.value;
        if(value == password.value)
        {
            invalidConfirmPassword.style.display = "none";
            confirmPassword.style.border = "2px solid black";
        }
        else
        {
            invalidConfirmPassword.style.display = "block";
            confirmPassword.style.border = "2px solid red";
        }
    })


   

    let userRegistered = new Array ();
    userRegistered=JSON.parse(localStorage.getItem("user")) || [];

    userRegistered.push({
        "email":email.value,
        "password":password.value
    })


    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let isFormValid = true;
        const inputs = document.querySelectorAll('input');
        
        inputs.forEach((input) => {
            input.style.border = '1px solid black';
            
            if (input.value.trim().length === 0 || input.style.borderColor === 'red') {
                input.style.border = '2px solid red';
                isFormValid = false;
            }
        });
    
        if (isFormValid) {
            alert("Registration successful");
        } else {
            alert("Please correct the errors in the form before submitting.");
        }

        let mail = email.value.trim();
        let pass1 = password.value.trim();
        let pass2 = confirmPassword.value.trim();

        localStorage.setItem("Email", mail);
        localStorage.setItem("Password", pass1);
        localStorage.setItem("Cpassword", pass2);
   });
