const form = document.querySelector("form");

if (form !== undefined && form !== null) {

    const nameInput = document.querySelector("#name");
    const nameError = document.querySelector("#name-error");

    const emailInput = document.querySelector("#email");
    const emailError = document.querySelector("#email-error");

    const messageInput = document.querySelector("#message");
    const messageError = document.querySelector("#message-error");

    const successMessage = document.querySelector("#success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;

        // Vérification du nom
        if (nameInput.value === "") {
            nameError.classList.remove("hidden");
            valid = false;
        } else {
            nameError.classList.add("hidden");
            console.log("name:", nameInput.value);
        }

        // Vérification de l'email
        if (emailInput.value === "") {
            emailError.classList.remove("hidden");
            valid = false;
        } else {
            emailError.classList.add("hidden");
            console.log("mail:", emailInput.value);
        }

        // Vérification du message
        if (messageInput.value.trim().length < 40) {
            messageError.classList.remove("hidden");
            valid = false;
        } else {
            messageError.classList.add("hidden");
            console.log("message:", messageInput.value);
        }

        // Si tout est valide afficher message + reset
        if (valid) {
            form.reset();

            successMessage.classList.remove("hidden");

            //faire disparaître le message après 3 secondes
            setTimeout(() => {
                successMessage.classList.add("hidden");
            }, 3000);
        }
    });
}