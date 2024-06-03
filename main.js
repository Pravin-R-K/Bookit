function handleSubmit() {
    event.preventDefault();
    let userName = document.getElementById("username");
    let password = document.getElementById("password");

    if (!checkString(userName.value)) {
        setError(userName, "Username must be atleast 8 characters.");
    } else {
        setSuccess(userName);
    }
    if (!checkString(password.value)) {
        setError(password, "Password must be atleast 8 characters.");
    } else {
        setSuccess(password);
    }
}

function handleSignup() {
    event.preventDefault();
    handleSubmit();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password2");
    if (
        password != confirmPassword.value ||
        confirmPassword.value.length == 0
    ) {
        setError(confirmPassword, "Repeat the password correctly.");
    } else {
        setSuccess(confirmPassword);
    }
}

function checkString(str) {
    return str.length >= 8 ? true : false;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errEle = inputGroup.querySelector(".error");

    errEle.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errEle = inputGroup.querySelector(".error");

    errEle.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}
