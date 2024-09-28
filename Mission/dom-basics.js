const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";
newSection.appendChild(newP);

/*  Dark and White Background*/

document.body.appendChild(newSection);

const themeSelector = document.getElementById("theme-selector");
const logo = document.getElementById("logo");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
        logo.src = "white-logo.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "blue-logo.png";
    }
}