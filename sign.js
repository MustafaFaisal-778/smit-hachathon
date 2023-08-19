login=document.getElementById("login");
signUp=document.getElementById("signUp");

changeLogin=document.getElementById("changeLogin")
changeSignup=document.getElementById("changeSignup")

let inputemail = document.getElementById("email");
let inputpassword = document.getElementById("password");

let resetpassword=document.getElementById("resetpassword");

let displayLogin=()=>{
    login.style.display="block";
    signUp.style.display="none";
    changeLogin.style.display="none";
    changeSignup.style.display="block";
    console.log(resetpassword.value);
    console.log(password.value);
    
}
signUp=document.getElementById("signUp");
let name = document.getElementById("name");
let fname = document.getElementById('fname');

function displaySignup() {
    login.style.display = "none";
    signUp.style.display = "block";
    changeLogin.style.display="block";
    changeSignup.style.display="none";
    
}


signUp.addEventlistener("click",()=>{

})

