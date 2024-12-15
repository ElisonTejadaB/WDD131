document.getElementById("incidentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const reporterName = document.getElementById("reporterName").value;
  const contactEmail = document.getElementById("contactEmail").value;
  const incidentTitle = document.getElementById("incidentTitle").value;
  const incidentDescription = document.getElementById("incidentDescription").value;
  const priority = document.getElementById("priority").value;
  const impact = document.getElementById("impact").value;
  const service = document.getElementById("service").value;
  const dateTime = document.getElementById("dateTime").value;

  // Create a new temporary view in a new tab/window
  const newWindow = window.open("", "_blank");

  // Add basic styling for better presentation
  newWindow.document.write(`
    <html>
      <head>
        <title>Incident Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            margin: 0;
            background-color: #f9f9f9;
          }
          h1 {
            color: #333;
          }
          p {
            margin: 8px 0;
          }
          strong {
            color: #555;
          }
        </style>
      </head>
      <body>
        <h1>Incident Report</h1>
        <p><strong>Reporter Name:</strong> ${reporterName}</p>
        <p><strong>Contact Email:</strong> ${contactEmail}</p>
        <p><strong>Incident Title:</strong> ${incidentTitle}</p>
        <p><strong>Incident Description:</strong> ${incidentDescription}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Impact:</strong> ${impact}</p>
        <p><strong>Affected Service:</strong> ${service}</p>
        <p><strong>Date/Time:</strong> ${dateTime}</p>
      </body>
    </html>
  `);

  // Focus the new window for the user
  newWindow.focus();
});
