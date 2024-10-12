
        document.getElementById("menu").addEventListener("click", function() {
            var dropdown = document.querySelector(".dropdown");
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
            function viewHandler(event) {
                const clickedElement = event.target;
            
                // Let's assume the full image path is constructed from the src of the clicked element
                const srcParts = clickedElement.src.split("-");
                const newImageSrc = `${srcParts[0]} norris-full.jpeg`; 
            
                // Use the viewerTemplate function to create the HTML
                const viewerHTML = viewerTemplate(newImageSrc, 'Full image');
            
                // Insert the HTML into the document
                document.body.insertAdjacentHTML("afterbegin", viewerHTML);
            
                // Add a listener to the close button to remove the viewer
                const closeButton = document.querySelector('.close-viewer');
                closeButton.addEventListener('click', closeViewer);
            }
            
            function closeViewer() {
                const viewer = document.querySelector('.viewer');
                if (viewer) {
                    viewer.remove();
                }
            }
            
            // Add the event listener to your images
            const images = document.querySelectorAll('img');
            images.forEach(img => img.addEventListener('click', viewHandler));
            
            

        });
        