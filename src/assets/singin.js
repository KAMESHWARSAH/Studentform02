const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

var user = document.forms['form'][username];
var password = document.forms['form'][password];
var user_error = document.getElementById('user_error');
var password_error = document.getElementById('password_error');

function validated() {
    if (user.value.length < 9) {
        user.style.border = "1 px sloid red";
        user_error.style.display = "block";
        user.focus();
        return false;
    }
    if (password.value.length < 9) {
        password.style.border = "1 px sloid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}