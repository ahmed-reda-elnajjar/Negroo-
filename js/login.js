const email = document.getElementById("email");
const password = document.getElementById("password");
const invalidMail = document.getElementById("invalidmail");
const invalidPassword = document.getElementById("invalidpassword");
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

    formBtn.addEventListener('click', (e) => {
       
        e.preventDefault();
        const getUser = localStorage.getItem("Email");
        const getPass = localStorage.getItem("Password");
        const emailValue = email.value;
        const passwordValue = password.value;
      
        if (emailValue  == "" && passwordValue == "") {
          alert("Input field has no value");
        } else {
          if (emailValue == getUser && passwordValue == getPass) {
            alert("Login successfull, hi }");
            window.location.href = "main.html";
          } 
          else {
            alert("Incorrect email or password");
          }
        }
    });

