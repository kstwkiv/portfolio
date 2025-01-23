// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("enter-button");

    // When the button is clicked, redirect to the main portfolio content
    button.addEventListener("click", function () {
        window.location.href = "#main-content"; // You can replace this with the actual page or section
    });
});
