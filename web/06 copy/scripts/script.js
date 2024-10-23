document.getElementById('register-me').addEventListener('click', function () {
    var title = document.querySelector('.logo');
    var loginBtn = document.getElementById('loginBtn');
    var rememberMeLabel = document.querySelector('.remember-me');
    var passwordBtn = document.getElementById('question'); 
    var bottonQuest = document.getElementById('register-me'); 
    
    if (title.innerText === 'WELCOME') {
        title.innerText = 'REGISTER';
        loginBtn.innerText = 'REGISTER';
        rememberMeLabel.style.opacity = '0';
        passwordBtn.style.opacity = '0';
        document.getElementById('email').value = ''; 
        document.getElementById('password').value = '';
        bottonQuest.innerText = "Register";
        document.getElementById('email').placeholder = 'New Username'; 
        document.getElementById('password').placeholder = 'New Password';
        document.getElementById('password').type = 'password';
    } else {
        title.innerText = 'WELCOME';
        loginBtn.innerText = 'LOGIN';
        rememberMeLabel.style.opacity = '1';
        passwordBtn.style.opacity = '1';
        bottonQuest.innerText = "Register now";
        document.getElementById('email').placeholder = 'Username'; 
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('password').type = 'password';
    }
});
document.getElementById('email').addEventListener('input', function () {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        emailError.style.display = 'block';
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }
});