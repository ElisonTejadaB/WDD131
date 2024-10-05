
document.getElementById("menu").addEventListener("click", function() {
    var dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});