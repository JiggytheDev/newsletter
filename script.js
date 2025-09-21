document.getElementById("email").addEventListener("input", (event) => {
    const input = document.getElementById("email");
    const email = input.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    const format = document.querySelector(".error");
    const valid = regex.test(email);
    if (!valid && email.length) {
        format.classList.add("invalid");
        format.classList.add("block");
    } else {
        format.classList.remove("invalid");
        format.classList.remove("block");
        console.log("valid");
    }
});

document.getElementById("emailAddy").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("email");
    const email = input.value;
    const userEmail = document.getElementById("userEmail");
    userEmail.innerHTML = `${email}`;
    const regex = / {2,}/g;
    const newEmail = email.replaceAll(regex, ).trim();
    console.log(newEmail);
});

document.getElementById("btn").addEventListener("click", (event) => {
    const input = document.getElementById("email");
    const email = input.value;
    const inputPage = document.getElementById("container");
    const thanksPage = document.getElementById("success");
    const enter = document.querySelector(".enter");
    if (email) {
        inputPage.style.display = "none";
        thanksPage.style.display = "block";
    } else {
        enter.classList.add("block");
        enter.classList.add("invalid");
    }
});
