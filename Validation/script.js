const showPassword=document.querySelector('.fa-eye');
const hidePassword=document.querySelector('.fa-eye-slash');
const username=document.querySelector('#uname')
const email=document.querySelector('#email')
const password=document.querySelector('#password');
showPassword.addEventListener('click',function(){
    password.type='text';
    showPassword.style.display='none';
    hidePassword.style.display='block'
})
hidePassword.addEventListener('click',function(){
    password.type='password';
    hidePassword.style.display='none';
    showPassword.style.display='block';
})

function setError(input,message){
   formError=input.parentElement;
   formError.classList.add('error')
   formError.classList.remove('success');
   span =formError.querySelector('.span');
   span.innerHTML=message;
   span.style.color='red';
    
}
function setSuccess(input,message){
    formSuccess=input.parentElement;
    formSuccess.classList.add('success');
    formSuccess.classList.remove('error');
    span =formSuccess.querySelector('.span');
    span.innerHTML=message;
    span.style.color='rgba(29, 145, 29, 1)'
}

console.log(username);

username.addEventListener('keyup',function(){
    valueUsername=username.value.trim()
    if(valueUsername.length==''){
        setError(username,'username not empty.')
    }else if(valueUsername.length<5){
        setError(username,'Username has 5 or more than.')
    }else{
        setSuccess(username,'Success')
    }
})
const isValidEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
email.addEventListener('keyup',function(){
    valueEmail=email.value.trim();
    if(valueEmail.length==''){
        setError(email,'Email not empty.')
    }else if(!isValidEmail(valueEmail)){
        setError(email,'Invalid email.')
    }else{
        setSuccess(email,'Success');
    }
})
