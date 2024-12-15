const newWindow = window.open("Report ", "Report_blank"); // Open a new tab
if (newWindow) {
    newWindow.document.write(`...`); // Add content
    newWindow.focus(); // Focus on the new tab
} else {
    alert("Popup blocked! Please allow popups for this site.");
}
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
  
    // Create a new temporal view (e.g., a new page)
    const newWindow = window.open("Report", "Report_blank"); 
    newWindow.document.write(`
      <h1>Incident Report</h1>
      <p><strong>Reporter Name:</strong> ${reporterName}</p>
      <p><strong>Contact Email:</strong> ${contactEmail}</p>
      <p><strong>Incident Title:</strong> ${incidentTitle}</p>
      <p><strong>Incident Description:</strong> ${incidentDescription}</p>
      <p><strong>Priority:</strong> ${priority}</p>
      <p><strong>Impact:</strong> ${impact}</p>
      <p><strong>Affected Service:</strong> ${service}</p>
      <p><strong>Date/Time:</strong> ${dateTime}</p>
    `);
    console.log(`
        <h1>Incident Report</h1>
        <p><strong>Reporter Name:</strong> ${reporterName}</p>
        <p><strong>Contact Email:</strong> ${contactEmail}</p>
        <p><strong>Incident Title:</strong> ${incidentTitle}</p>
        <p><strong>Incident Description:</strong> ${incidentDescription}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Impact:</strong> ${impact}</p>
        <p><strong>Affected Service:</strong> ${service}</p>
        <p><strong>Date/Time:</strong> ${dateTime}</p>
    `);
  
    // Alternatively, you can store the data in local storage or send it to a server:
    // localStorage.setItem('incidentData', JSON.stringify({
    //   reporterName, contactEmail, incidentTitle, incidentDescription, priority, impact, service, dateTime
    // }));
  
    // Or, you can send it to a server using AJAX or Fetch API:
    // fetch('/your-server-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     reporterName, contactEmail, incidentTitle, incidentDescription, priority, impact, service, dateTime
    //   })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle server response
    // });
  });
