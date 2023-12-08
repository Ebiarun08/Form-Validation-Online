var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');


function validateName(){
    var name =document.getElementById('username').value;

    if(name.length == 0){
        nameerror.innerHTML ='Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='Write a fullname'
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>'
    return true;
}
function validatePhone(){
    var phone1 = document.getElementById('phone');
    var phone=phone1.value.trim()
    
    if (phone.length == 0){
        phoneerror.innerHTML ='phone num required';
        return false; 
    }
    if(phone.length != 10){
        phoneerror.innerHTML = 'Enter 10dig num';
        return false
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = 'only numbers'
        return false
    }
    phoneerror.innerHTML ='<i class="fa-solid fa-check-to-slot"></i>'
    return true;
}
function validateEmail(){
    var email =document.getElementById('email').value;


    if(email.length == 0){
        emailerror.innerHTML = 'E-mail is requierd';
        return false;
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailerror.innerHTML ='Enter valid Email';
        return false;
    }
    emailerror.innerHTML='<i class="fa-solid fa-check-to-slot"></i>';
    return true
}
function validateMessage(){
    var message =document.querySelector('#message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageerror.innerHTML =left + 'more characters required'
        return false
    }
    
    messageerror.innerHTML='<i class="fa-solid fa-check-to-slot"></i>';
    return true;

}
function validateform(){
if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
    submiterror.style.display = 'block';
    submiterror.innerHTML ='please fix Error to submit';
    setTimeout(function(){submiterror.style.display = 'none';},3000);
    return false;

}
}

