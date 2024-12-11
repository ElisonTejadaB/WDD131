document.addEventListener("DOMContentLoaded", function() {
    const endUserLogin = document.getElementById("end-user-login");
    const technicianLogin = document.getElementById("technician-login");

    endUserLogin.addEventListener("click", function() {
        window.location.href = "user.html";
    });

    technicianLogin.addEventListener("click", function() {
        window.location.href = "technician.html";
    });
    
});

// Function to redirect to the dashboard based on the request
function redirectToPage() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, completa los campos requeridos.");
        return;
    }

    // Redirect based on the username
    if (username === "admin") {
        window.location.href = "admin.html"; 
    } else if (username === "user") {
        window.location.href = "incident.html"; 
    } else {
        alert("Unrecognized user. Please try again.");
    }
}

// Assign the event to the form
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            redirectToPage(); 
        });
    } else {
        console.error("No form found with the ID 'loginForm'.");
    }
});
document.getElementById("incidentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Basic validation to ensure all fields are completed
    const reporterName = document.getElementById("reporterName").value.trim();
    const contactEmail = document.getElementById("contactEmail").value.trim();
    const incidentTitle = document.getElementById("incidentTitle").value.trim();
    const incidentDescription = document.getElementById("incidentDescription").value.trim();
    const priority = document.getElementById("priority").value;
    const impact = document.getElementById("impact").value;
    const service = document.getElementById("service").value.trim();
    const dateTime = document.getElementById("dateTime").value;

    if (!reporterName || !contactEmail || !incidentTitle || !incidentDescription || !priority || !impact || !service || !dateTime) {
        alert("Please complete all fields before submitting the form.");
        return;
    }

    // Simulates submission and shows a message -- working in that
   /*  alert("Incident has been recorded successfully!\n" +
        `Reporter: ${reporterName}\n` +
        `Email: ${contactEmail}\n` +
        `Title: ${incidentTitle}\n` +
        `Priority: ${priority}\n` +
        `Impact: ${impact}\n` +
        `Affected Service: ${service}\n` +
        `Date/Time: ${dateTime}`); */
});

/* ********************************************************************************************************************** */
    // Example incidents (replace with backend integration later) -- working in that
const incidents = [
    { id: 1, title: "Email Down", priority: "High", impact: "Critical", status: "Open" },
    { id: 2, title: "Network Issue", priority: "Medium", impact: "Significant", status: "In Progress" },
    { id: 3, title: "Slow Computer", priority: "Low", impact: "Minor", status: "Open" },
];

// Populate the incident table
const incidentTableBody = document.querySelector("#incidentTable tbody");
function populateIncidentTable() {
    incidentTableBody.innerHTML = ""; 
    incidents.forEach((incident) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${incident.id}</td>
            <td>${incident.title}</td>
            <td>${incident.priority}</td>
            <td>${incident.impact}</td>
            <td>${incident.status}</td>
            <td><button class="select-incident" data-id="${incident.id}">Select</button></td>
        `;
        incidentTableBody.appendChild(row);
    });
}
populateIncidentTable();

// Select an incident to populate the solution form
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("select-incident")) {
        const incidentId = event.target.getAttribute("data-id");
        const incident = incidents.find((inc) => inc.id == incidentId);
        if (incident) {
            document.getElementById("incidentId").value = incident.id;
            document.getElementById("solutionDescription").value = ""; 
            document.getElementById("statusCheckbox").checked = incident.status === "Closed";
        }
    }
});

// Handle solution submission
document.getElementById("solutionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const incidentId = document.getElementById("incidentId").value;
    const solutionDescription = document.getElementById("solutionDescription").value.trim();
    const isClosed = document.getElementById("statusCheckbox").checked;

    if (!incidentId) {
        alert("Please select an incident to report a solution.");
        return;
    }

    if (!solutionDescription) {
        alert("Please provide a solution description.");
        return;
    }

    // Simulate updating the incident (replace with backend integration)
    const incident = incidents.find((inc) => inc.id == incidentId);
    if (incident) {
        incident.status = isClosed ? "Closed" : "Open";
        alert(`Solution for Incident ID ${incidentId} has been submitted:\n${solutionDescription}\nStatus: ${incident.status}`);
        populateIncidentTable();
    }
});
