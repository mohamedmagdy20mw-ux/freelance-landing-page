// =========================
// Get Started Button
// =========================

function showMessage() {

    alert("Thank you for choosing our business!");

}


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    // Success message

    formMessage.textContent =
        "Your message has been sent successfully!";


    // Clear form

    contactForm.reset();

});