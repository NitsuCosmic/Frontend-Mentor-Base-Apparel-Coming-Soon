const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

function validateLocalPart(email) {
	const emailRegex = /^[a-zA-Z0-9._-]+$/;
	return emailRegex.test(email.split("@")[0]);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (emailInput.value === "" || emailInput.value === null) {
		errorMsg.innerText = "The email addres must not be empty";
		errorIcon.classList.add("error");
		emailInput.classList.add("error");
	} else if (!validateLocalPart(emailInput.value) || !emailInput.value.includes("@")) {
		errorMsg.innerText =
			"Please provide a valid email. Please use alphanumeric characters, underscores, and dashes.";
		errorIcon.classList.add("error");
		emailInput.classList.add("error");
	}
});

emailInput.addEventListener("focus", () => {
	errorMsg.innerText = "";
	errorIcon.classList.remove("error");
	emailInput.classList.remove("error");
});
