function validateform(){
    var name = document.getElementById("enter-username").value;
    var password = document.getElementById("enter-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if(checkPassword(password))  checkPasswordMatch(password, confirmPassword);
    var birthdate = document.getElementById("enter-birthdate").value;
    if(name === "")
    {
        alert("Username cannot be empty!");
    }else{
        if(checkPassword(password))
        {
            if(checkPasswordMatch(password, confirmPassword))
            {
                if(checkGender() !== false)
                {
                    if(checkAge(birthdate))
                    {
                        alert("Register Succesfull")
                        document.getElementById("myForm").reset();
                    }
                }
            }
        }
       

    }
    {
    }
};

function checkPassword(password){
    var lowercase = 0;
    var uppercase = 0;
    var numeric = 0;
    for( var i = 0; i < password.length; i++){
        var charcheck = password.charCodeAt(i);
        //check if character is number
        if(charcheck > 47 && charcheck < 58 )
        {
            numeric = 1;
        }
        //check if character is uppercase
        if(charcheck > 64 && charcheck < 91){
            uppercase = 1;
        }
        //check if character is lowecase
        if(charcheck > 96 && charcheck < 123)
        {
            lowercase = 1;
        }
    }
    if(password.length < 8 || numeric === 0 || uppercase === 0 || lowercase === 0)
    {
        alert("Password must at least have 8 characters, a lowercase and an uppercase letter, and have at least 1 number");
    }else{
        return true;
    }
    
}

function checkPasswordMatch(password, confirmPassword){
    if(password === confirmPassword) return true;
    alert("Password do not match!")
}


function checkGender(){
    var gender;
    if(document.getElementById("gendermale").checked)
    {
        return "male";
    }else if(document.getElementById("genderfemale").checked )
    {
        return "female";
    }else{
        alert("Choose Gender!");
        return false;
    }
}

function checkAge(birthdate){
    var yy = birthdate.slice(0,4);
    var mm = birthdate.slice(5,7);
    var dd = birthdate.slice(8, 10);

    var today = new Date();
    var curyear = today.getFullYear();
    var curmonth = today.getMonth()+1;
    var curdate = today.getDate(); 
    console.log(curyear + '-' + curmonth + '-' + curdate)
    if(curyear - yy >= 17)
    {
        if(curmonth - mm >= 0)
        {
            if(curmonth === 0)
            {
                if(curdate - dd >= 0)
                {
                    return true;
                }else{
                    alert("You must be at least 17 years old to register");
                } 
            }else return true;
        }else alert("You must be at least 17 years old to register");
    }else{
        alert("You must be at least 17 years old to register");
    }
}