document.getElementById("menu").addEventListener("click", function() {
    const dropdown = document.querySelector(".dropdown");
    const isExpanded = dropdown.style.display === "block";
    dropdown.style.display = isExpanded ? "none" : "block";
    this.setAttribute("aria-expanded", !isExpanded);
    dropdown.setAttribute("aria-hidden", isExpanded);
});

// Handle window resize to adjust menu visibility
window.addEventListener('resize', function() {
    const dropdown = document.querySelector('.dropdown');
    const menuButton = document.getElementById('menu');
    if (window.innerWidth >= 850) {
        dropdown.style.display = 'flex';  // Show menu items on large screens
        menuButton.style.display = 'none';  // Hide menu button on large screens
    } else {
        dropdown.style.display = 'none';  // Hide menu items on small screens
        menuButton.style.display = 'block';  // Show the menu button
    }
});

// View image modal
function viewHandler(event) {
    const clickedElement = event.target;
    const newImageSrc = clickedElement.src.replace("-sm", "-full");  // Replace "-sm" with "-full"

    const viewerHTML = viewerTemplate(newImageSrc, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    // Add close button event
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);

    // Close modal on Escape key press
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeViewer();
        }
    });
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

// Viewer template for modal
function viewerTemplate(src, alt) {
    return `
        <div class="viewer" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <img src="${src}" alt="${alt}" style="max-width: 90%; max-height: 90%; box-shadow: 0 0 20px white;">
            <button class="close-viewer" style="position: absolute; top: 20px; right: 20px; background: white; border: none; padding: 10px; cursor: pointer;">✖</button>
        </div>
    `;
}

// Add event listeners to gallery images
const images = document.querySelectorAll('.gallery img');
images.forEach(img => img.addEventListener('click', viewHandler));
