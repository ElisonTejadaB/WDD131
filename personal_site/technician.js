
  const incidentTable = document.getElementById('incidentTable');

  incidentTable.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'TD') {
      
      const row = target.parentNode;
      row.classList.toggle('selected');

     
      const checkbox = row.querySelector('input[type="checkbox"]');

      
      const statusCell = row.cells[4]; 
      const status = checkbox.checked ? 'Closed' : 'Open';
      statusCell.textContent = status;
    }
  });
  
  const incidentIdInput = document.getElementById('incidentId');
  
  incidentTable.addEventListener('click', (event) => {
      const target = event.target;
  
      if (target.tagName === 'TD') {
          const row = target.parentNode;
          const incidentId = row.cells[1].textContent; 
  
          incidentIdInput.value = incidentId;
          
      }
  });