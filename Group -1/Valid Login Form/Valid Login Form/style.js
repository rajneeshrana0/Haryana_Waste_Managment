const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const  password = document.getElementById("password");
const cpassword = document.getElementById("confirm_password");




form.addEventListener('submit',(event) =>{
    event.preventDefault();
    validate();
})

const sendData = (usernameVal,sRate,count) =>{
    if(sRate === count)
    {
        alert("Registration Succesfull");
        swal("Welcome "+usernameVal," Registration Succesfull !", "success");
    }
}
const successmsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName('.form-cotrol'); 
    var count = formCon.length-1;
    for(let i=0;i<formCon.length;i++)
    {
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal,sRate,count)
        }else{
            return false;
        }
    }
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length-1) return false;
    return true;
}
const validate = () =>{
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const  passwordVal = password.value.trim();
const cpasswordVal = confirm_password.value.trim();


    // validate username 
if(usernameVal === ""){
    setErrormsg(username,'username cannot be blank');
}
else if(usernameVal.length <= 2)
{
    setErrormsg(username,'username min 3 char');
}else{
    setSuccessmsg(username);
}

// validate email
if(emailVal === ""){
    setErrormsg(email,'emailVal cannot be blank');
}
else if(!isEmail(emailVal))
{
    setErrormsg(email,'Not Valid Email');
}else{
    setSuccessmsg(email);
}

// validate phone

if(phoneVal === ""){
    setErrormsg(phone,' phone number cannot blank');
}
else if(phoneVal.length != 10)
{
    setErrormsg(phone,' Not a valid Phone Number');
}else{
    setSuccessmsg(phone);
}

// validate password

if(passwordVal === ""){
    setErrormsg(password,' password cannot blank');
}
else if(passwordVal.length < 5)
{
    setErrormsg(phone,' Minimum 6 character');
}else{
    setSuccessmsg(password);
}
// validate confirm_password

if(cpasswordVal === ""){
    setErrormsg(cpassword,' confirm password cannot blank');
}
else if(passwordVal != cpasswordVal)
{
    setErrormsg(phone,' Password not Matching');
}else{
    setSuccessmsg(cpassword);
}
    successmsg(usernameVal);
}
function setErrormsg(input,errormsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText = errormsg;
}
function setSuccessmsg(input){
    const formControl = input.parentElement;
    formControl.className="form-control success";
}