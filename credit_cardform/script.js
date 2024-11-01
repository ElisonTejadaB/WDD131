/* document.getElementById('card-btn').addEventListener('click', function () {
    // Grab input values
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardHolder = document.getElementById('card-holder').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCVC = document.getElementById('card-cvc').value.trim();
  
    // Regular expressions for validation
    const cardNumberPattern = /^[0-9]{16}$/;
    const cardHolderPattern = /^[a-zA-Z\s]+$/;
    const expPattern = /^[0-9]{2}$/;
    const cvcPattern = /^[0-9]{3,4}$/;
  
    // Assume all fields are valid initially
    let isValid = true;
  
    // Function to show or hide error messages
    function showError(elementId, isError) {
      const element = document.getElementById(elementId);
      if (isError) {
        element.classList.add('invalid');
        isValid = false;
      } else {
        element.classList.remove('invalid');
      }
    }
  
    // Validation checks
    showError('card-number', !cardNumberPattern.test(cardNumber));
    showError('card-holder', !cardHolderPattern.test(cardHolder));
    showError('card-month', !expPattern.test(cardMonth));
    showError('card-year', !expPattern.test(cardYear));
    showError('card-cvc', !cvcPattern.test(cardCVC));
  
    // Show success or error message
    if (isValid) {
      document.getElementById('card-success').classList.remove('hidden');
      document.getElementById('form-errors').classList.add('hidden');
      console.log('Payment successful');
    } else {
      document.getElementById('form-errors').classList.remove('hidden');
      document.getElementById('card-success').classList.add('hidden');
      console.log('Error: Invalid input');
    }
  });
   */

  /* document.getElementById('card-btn').addEventListener('click', function () {
    // Grab input values
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardHolder = document.getElementById('card-holder').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCVC = document.getElementById('card-cvc').value.trim();

    // Regular expressions for validation
    const cardNumberPattern = /^[0-9]{16}$/; // 16 digits
    const cardHolderPattern = /^[a-zA-Z\s]+$/; // letters and spaces only
    const expPattern = /^(0[1-9]|1[0-2])$/; // MM format (01-12)
    const cvcPattern = /^[0-9]{3,4}$/; // 3 or 4 digits

    // Assume all fields are valid initially
    let isValid = true;

    // Function to show or hide error messages
    function showError(elementId, isError) {
        const element = document.getElementById(elementId);
        if (isError) {
            element.classList.add('invalid');
            isValid = false;
        } else {
            element.classList.remove('invalid');
        }
    }

    // Validate inputs
    showError('card-number', !cardNumberPattern.test(cardNumber));
    showError('card-holder', !cardHolderPattern.test(cardHolder));
    showError('card-month', !expPattern.test(cardMonth));
    showError('card-year', !expPattern.test(cardYear));
    showError('card-cvc', !cvcPattern.test(cardCVC));

    // Check expiration date
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Get current month (0-11)

    if (parseInt(cardYear) < currentYear || (parseInt(cardYear) === currentYear && parseInt(cardMonth) < currentMonth)) {
        showError('card-month', true);
        showError('card-year', true);
        isValid = false;
    }

    // Show success or error message
    if (isValid) {
        document.getElementById('card-success').classList.remove('hidden');
        document.getElementById('form-errors').classList.add('hidden');
        console.log('Payment successful');
    } else {
        document.getElementById('form-errors').classList.remove('hidden');
        document.getElementById('card-success').classList.add('hidden');
        console.log('Error: Invalid input');
    }
});
 */
// Function to validate card details and display error/success messages
d/* ocument.getElementById('card-btn').addEventListener('click', function () {
    // Grab input values
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardHolder = document.getElementById('card-holder').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCVC = document.getElementById('card-cvc').value.trim();
  
    // Regular expressions for validation
    const cardNumberPattern = /^[0-9]{16}$/;
    const cardHolderPattern = /^[a-zA-Z\s]+$/;
    const expPattern = /^[0-9]{2}$/;
    const cvcPattern = /^[0-9]{3,4}$/;
  
    // Assume all fields are valid initially
    let isValid = true;
  
    // Function to show or hide error messages
    function showError(elementId, isError) {
      const element = document.getElementById(elementId);
      if (isError) {
        element.classList.add('invalid');
        isValid = false;
      } else {
        element.classList.remove('invalid');
      }
    }
  
    // Validation checks with debugging logs
    showError('card-number', !cardNumberPattern.test(cardNumber));
    console.log('Card Number Valid:', cardNumberPattern.test(cardNumber));
  
    showError('card-holder', !cardHolderPattern.test(cardHolder));
    console.log('Card Holder Valid:', cardHolderPattern.test(cardHolder));
  
    showError('card-month', !expPattern.test(cardMonth));
    console.log('Card Month Valid:', expPattern.test(cardMonth));
  
    showError('card-year', !expPattern.test(cardYear));
    console.log('Card Year Valid:', expPattern.test(cardYear));
  
    showError('card-cvc', !cvcPattern.test(cardCVC));
    console.log('Card CVC Valid:', cvcPattern.test(cardCVC));
  
    // Show success or error message
    if (isValid) {
      document.getElementById('card-success').classList.remove('hidden');
      document.getElementById('form-errors').classList.add('hidden');
      console.log('Payment successful'); // Log for debugging
    } else {
      document.getElementById('form-errors').classList.remove('hidden');
      document.getElementById('card-success').classList.add('hidden');
      console.log('Error: Invalid input'); // Log for debugging
    }
  });
   */

  document.getElementById('card-btn').addEventListener('click', function () {
    // Grab input values
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardHolder = document.getElementById('card-holder').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCVC = document.getElementById('card-cvc').value.trim();

    // Regular expressions for validation
    const cardNumberPattern = /^[0-9]{16}$/; // 16 digits
    const cardHolderPattern = /^[a-zA-Z\s]+$/; // letters and spaces only
    const expPattern = /^(0[1-9]|1[0-2])$/; // MM format (01-12)
    const cvcPattern = /^[0-9]{3,4}$/; // 3 or 4 digits

    // Assume all fields are valid initially
    let isValid = true;

    // Function to show or hide error messages
    function showError(input, isError) {
        if (isError) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    }

    // Validate inputs
    showError(document.getElementById('card-number'), !cardNumberPattern.test(cardNumber));
    showError(document.getElementById('card-holder'), !cardHolderPattern.test(cardHolder));
    showError(document.getElementById('card-month'), !expPattern.test(cardMonth));
    showError(document.getElementById('card-year'), !expPattern.test(cardYear));
    showError(document.getElementById('card-cvc'), !cvcPattern.test(cardCVC));

    // Check expiration date
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Get current month (0-11)

    if (parseInt(cardYear) < currentYear || (parseInt(cardYear) === currentYear && parseInt(cardMonth) < currentMonth)) {
        showError(document.getElementById('card-month'), true);
        showError(document.getElementById('card-year'), true);
        isValid = false;
    }

    // Show success or error message
    if (isValid) {
        document.getElementById('card-success').classList.remove('hidden');
        document.getElementById('form-errors').classList.add('hidden');
    } else {
        document.getElementById('form-errors').classList.remove('hidden');
        document.getElementById('card-success').classList.add('hidden');
    }
});
