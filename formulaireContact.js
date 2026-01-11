const form = document.querySelector("form")
if (form === undefined) {
    //ne rien faire pour l'instant, on nest pas sur le formulaire de contacts
} else {
    const nameInput = document.querySelector("#name")
    const nameError = document.querySelector("#name-error")

    const emailInput = document.querySelector("#email")
    const emailError = document.querySelector("#email-error")

    const messageInput = document.querySelector("#message")
    const messageError = document.querySelector("#message-error")

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        if (nameInput.value === "") {
            nameError.classList.remove("hidden")
        }
        else {
            nameError.classList.add("hidden")
            console.log("name:", nameInput.value);
        }

        if (emailInput.value === "") {
            emailError.classList.remove("hidden")
        }
        else {
            emailError.classList.add("hidden")
            console.log("mail:", emailInput.value);
        }

        if (messageInput.value.trim().length < 40) {
            messageError.classList.remove("hidden")
            valid = false
        } else {
            messageError.classList.add("hidden")
            console.log("message:", messageInput.value)
        }

    })
}