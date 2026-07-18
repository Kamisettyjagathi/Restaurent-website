// Restaurant Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome to Food Corner Restaurant!");

    const button = document.querySelector(".btn");

    if (button) {

        button.addEventListener("click", function () {

            alert("Thank you for choosing Food Corner Restaurant!");
        });
    }
});
