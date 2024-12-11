const showPassword=document.querySelector('.fa-eye');
const hidePassword=document.querySelector('.fa-eye-slash');
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
