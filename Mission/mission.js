// Test my code
const themeSelector = document.getElementById("theme-selector");
    const logo = document.getElementById("logo");
    
    themeSelector.addEventListener("change", changeTheme);
    
    function changeTheme() {
        const selectedTheme = themeSelector.value;
    
        if (selectedTheme === "dark") {
            document.body.classList.add("dark");
            logo.src = "./images/logo_dark.png";  // Ensure correct image path
        } else {
            document.body.classList.remove("dark");
            logo.src = "./images/blue-logo.png";   // Ensure correct image path
        }
    }
    