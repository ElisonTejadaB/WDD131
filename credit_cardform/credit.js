/* // Function to validate card details and display error/success messages
document.getElementById('card-btn').addEventListener('click', function () {
    // Grab input values
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const cardMonth = document.getElementById('card-month').value;
    const cardYear = document.getElementById('card-year').value;
    const cardCVC = document.getElementById('card-cvc').value;
  
    // Regular expressions for validation
    const cardNumberPattern = /^[0-9]{16}$/;
    const cardHolderPattern = /^[a-zA-Z\s]+$/;
    const expPattern = /^[0-9]{2}$/;
    const cvcPattern = /^[0-9]{3,4}$/;
  
    // Hide previous error messages
    document.getElementById('form-errors').classList.add('hidden');
    document.getElementById('card-success').classList.add('hidden');
  
    // Validation checks
    let isValid = true;
    if (!cardNumberPattern.test(cardNumber)) {
      isValid = false;
      document.getElementById('card-number').classList.add('invalid');
    } else {
      document.getElementById('card-number').classList.remove('invalid');
    }
    
    if (!cardHolderPattern.test(cardHolder)) {
      isValid = false;
      document.getElementById('card-holder').classList.add('invalid');
    } else {
      document.getElementById('card-holder').classList.remove('invalid');
    }
  
    if (!expPattern.test(cardMonth) || !expPattern.test(cardYear)) {
      isValid = false;
      document.getElementById('card-month').classList.add('invalid');
      document.getElementById('card-year').classList.add('invalid');
    } else {
      document.getElementById('card-month').classList.remove('invalid');
      document.getElementById('card-year').classList.remove('invalid');
    }
  
    if (!cvcPattern.test(cardCVC)) {
      isValid = false;
      document.getElementById('card-cvc').classList.add('invalid');
    } else {
      document.getElementById('card-cvc').classList.remove('invalid');
    }
  
    // If all validations pass
    if (isValid) {
      document.getElementById('card-success').classList.remove('hidden');
      document.getElementById('form-errors').classList.add('hidden');
      console.log('Payment successful'); // Simulate successful submission
    } else {
      document.getElementById('form-errors').classList.remove('hidden');
      document.getElementById('card-success').classList.add('hidden');
      console.log('Error: Invalid input'); // Simulate error
    }
  });
   */

  /* // Function to validate card details and display error/success messages
document.getElementById('card-btn').addEventListener('click', function () {
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
    } else {
        document.getElementById('form-errors').classList.remove('hidden');
        document.getElementById('card-success').classList.add('hidden');
    }
});
 */



document.getElementById('card-btn').addEventListener('click', function () {
  const cardNumber = document.getElementById('card-number').value.trim();
  const cardHolder = document.getElementById('card-holder').value.trim();
  const cardMonth = document.getElementById('card-month').value.trim();
  const cardYear = document.getElementById('card-year').value.trim();
  const cardCVC = document.getElementById('card-cvc').value.trim();

  const cardNumberPattern = /^[0-9]{16}$/;
  const cardHolderPattern = /^[a-zA-Z\s]+$/;
  const expPattern = /^[0-9]{2}$/;
  const cvcPattern = /^[0-9]{3,4}$/;

  let isValid = true;

  function showError(elementId, isError) {
      const element = document.getElementById(elementId);
      if (isError) {
          element.classList.add('invalid');
          isValid = false;
      } else {
          element.classList.remove('invalid');
      }
  }

  showError('card-number', !cardNumberPattern.test(cardNumber));
  showError('card-holder', !cardHolderPattern.test(cardHolder));
  showError('card-month', !expPattern.test(cardMonth));
  showError('card-year', !expPattern.test(cardYear));
  showError('card-cvc', !cvcPattern.test(cardCVC));

  if (isValid) {
      document.getElementById('card-success').classList.remove('hidden');
      document.getElementById('form-errors').classList.add('hidden');
  } else {
      document.getElementById('form-errors').classList.remove('hidden');
      document.getElementById('card-success').classList.add('hidden');
  }
});
