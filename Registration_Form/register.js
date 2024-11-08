document.addEventListener("DOMContentLoaded", function () {
  let participantCount = 1;

  const addButton = document.getElementById("add");
  const participantsFieldset = document.querySelector(".participants");
  const form = document.querySelector("form");
  const summarySection = document.getElementById("summary");

  // Function to generate the participant HTML with unique IDs
  function participantTemplate(count) {
    return `
      <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname_${count}"> First Name<span>*</span></label>
          <input id="fname_${count}" type="text" name="fname_${count}" required />
        </div>
        <div class="item activities">
          <label for="activity_${count}">Activity #<span>*</span></label>
          <input id="activity_${count}" type="text" name="activity_${count}" />
        </div>
        <div class="item">
          <label for="fee_${count}">Fee ($)<span>*</span></label>
          <input id="fee_${count}" type="number" name="fee_${count}" />
        </div>
        <div class="item">
          <label for="date_${count}">Desired Date <span>*</span></label>
          <input id="date_${count}" type="date" name="date_${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade_${count}" name="grade_${count}">
            <option value="" disabled selected>Select Grade</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }

  // Add event listener to "Add Participant" button
  addButton.addEventListener("click", function () {
    participantCount++; // Increment the participant count

    // Generate the new participant HTML and insert it before the button
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
  });

  // Function to calculate the total fee
  function totalFees() {
    // The selector below grabs any element with an id starting with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    
    // Convert NodeList to an array
    feeElements = [...feeElements];

    // Calculate the total fee using reduce()
    const total = feeElements.reduce((sum, feeInput) => {
      const fee = parseFloat(feeInput.value) || 0; // If input is empty or invalid, count as 0
      return sum + fee;
    }, 0);

    return total;
  }

  // Function to create success message template
  function successTemplate(info) {
    return `
      <h2>Registration Successful!</h2>
      <p>Adult Name: ${info.adultName}</p>
      <p>Number of Participants: ${info.numParticipants}</p>
      <p>Total Fee: $${info.totalFee.toFixed(2)}</p>
    `;
  }

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get adult information
    const adultName = document.getElementById("adult_name").value;
    const numParticipants = participantCount;

    // Calculate the total fee
    const totalFee = totalFees();

    // Hide the form and display the success message
    form.style.display = "none";
    summarySection.innerHTML = successTemplate({
      adultName,
      numParticipants,
      totalFee
    });

    // Optionally, hide the "Add Participant" button after form submission
    addButton.style.display = "none";
  }

  // Add event listener to form submit button
  form.addEventListener("submit", submitForm);
});
