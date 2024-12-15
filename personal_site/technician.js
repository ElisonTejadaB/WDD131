
  const incidentTable = document.getElementById('incidentTable');

  incidentTable.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'TD') {
      // Select the entire row
      const row = target.parentNode;
      row.classList.toggle('selected');

      // Get the checkbox in the row
      const checkbox = row.querySelector('input[type="checkbox"]');

      // Update the status based on checkbox state
      const statusCell = row.cells[4]; // Assuming status is in the 5th column
      const status = checkbox.checked ? 'Closed' : 'Open';
      statusCell.textContent = status;
    }
  });
  
  const incidentIdInput = document.getElementById('incidentId');
  
  incidentTable.addEventListener('click', (event) => {
      const target = event.target;
  
      if (target.tagName === 'TD') {
          const row = target.parentNode;
          const incidentId = row.cells[1].textContent; // Assuming incident ID is in the second column
  
          incidentIdInput.value = incidentId;
          // Optionally, you can style the selected row or remove the selection on a new click
      }
  });