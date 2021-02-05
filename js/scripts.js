var emailField = document.getElementById("emailField");
var button = document.getElementById("button");
var response = document.getElementById("response");

button.addEventListener("click", function() {
    var email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = "Hiya Cowboy, this email will work for us 🤠";
    } else {
        response.innerHTML = "Sorry, this email is not cool enough 😩";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // RegEx check for ___@___.___ format
    return re.test(String(email).toLowerCase());
}