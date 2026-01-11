const toggleLink = document.getElementById("bouttonMode");

toggleLink.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.classList.toggle("light");
    //document.textColor.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleLink.textContent = "MODE SOMBRE";
    } else {
        toggleLink.textContent = "MODE CLAIR";
    }
});