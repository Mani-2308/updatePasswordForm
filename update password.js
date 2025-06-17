let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

newPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
});

confirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value !== newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
});

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
    if (confirmPasswordEl.value === "") {
        confirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
    if (newPasswordEl.value !== "" && confirmPasswordEl.value !== "") {
        newPasswordEl.value = "";
        confirmPasswordEl.value = "";
    }
});