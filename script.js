function showMessage() {
    alert("Welcome to Rishita Sadhu's Portfolio Website ✨");
}

console.log("Portfolio Loaded Successfully");


const form = document.getElementById("contact-form");

const successMessage = document.getElementById("success-message");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.innerHTML = "✅ Message Sent Successfully!";

    successMessage.style.color = "#ff4d8d";

    successMessage.style.marginTop = "15px";

    form.reset();

});