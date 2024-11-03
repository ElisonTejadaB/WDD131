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
 */

/* document.getElementById('card-btn').addEventListener('click', function () {
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
 */

/* $(document).ready(function () {

  Stripe.setPublishableKey('pk_test_9D43kM3d2vEHZYzPzwAblYXl');

  var cardNumber, cardMonth, cardYear, cardCVC, cardHolder;

  // check for any empty inputs
  function findEmpty() {
      var emptyText = $('#form-container input').filter(function () {

          return $(this).val == null;
      });

      // add invalid class to empty inputs
      console.log(emptyText.prevObject);
      emptyText.prevObject.addClass('invalid');
  }

  
  // check card type on card number input blur 
  $('#card-number').blur(function (event) {
      event.preventDefault();
      checkCardType();
  });

  // on button click: 
  $('#card-btn').click(function (event) {

      // get each input value and use Stripe to determine whether they are valid
      var cardNumber = $('#card-number').val();
      var isValidNo = Stripe.card.validateCardNumber(cardNumber);
      var expMonth = $('#card-month').val();
      var expYear = $('#card-year').val();
      var isValidExpiry = Stripe.card.validateExpiry(expMonth, expYear);
      var cardCVC = $('#card-cvc').val();
      var isValidCVC = Stripe.card.validateCVC(cardCVC);
      var cardHolder = $('#card-holder').val();
      event.preventDefault();

      // alert the user if any fields are missing
      if (!cardNumber || !cardCVC || !cardHolder || !expMonth || !expYear) {
          console.log(cardNumber + cardCVC + cardHolder + cardMonth + cardYear);
          $('#form-errors').addClass('hidden');
          $('#card-success').addClass('hidden');
          $('#form-errors').removeClass('hidden');
          $('#card-error').text('Please complete all fields.');
          findEmpty();
      } else {

          // alert the user if any fields are invalid
          if (!isValidNo || !isValidExpiry || !isValidCVC) {
              $('#form-errors').css('display', 'block');
              if (!isValidNo) {
                  $('#card-error').text('Invalid credit card number.');
              } else if (!isValidExpiry) {
                  $('#card-error').text('Invalid expiration date.')
              } else if (!isValidCVC) {
                  $('#card-error').text('Invalid CVC code.')
              }

          } else {
              $('#card-success').removeClass('hidden');
          }
      }
  })

});
 */
/* document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const cardNumber = document.querySelector('input[name="card-number"]');
  const cardHolder = document.querySelector('input[name="card-holder"]');
  const expirationMonth = document.querySelector('input[name="exp-month"]');
  const expirationYear = document.querySelector('input[name="exp-year"]');
  const cvv = document.querySelector('input[name="cvv"]');
  const errorMessage = document.querySelector('.error-message');

  if (!cardNumber.value || !cardHolder.value || !expirationMonth.value || !expirationYear.value || !cvv.value) {
      errorMessage.style.display = 'flex'; // Show error message
  } else {
      errorMessage.style.display = 'none'; // Hide error message
      // Continue with form submission or processing
      alert('Payment processed!');
  }
  document.querySelector('#paymentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const form = e.target;
    const errorMessage = document.querySelector('.error-message');

    // Check form validity using HTML5 validation API
    if (!form.checkValidity()) {
        errorMessage.style.display = 'flex'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        // Here you can add further logic, e.g., processing the payment
        alert('Payment processed!');
    }
});

});
 */
document.querySelector('#paymentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  const cardNumber = document.querySelector('#card-number');
  const cardHolder = document.querySelector('#card-holder');
  const expMonth = document.querySelector('#exp-month');
  const expYear = document.querySelector('#exp-year');
  const cvv = document.querySelector('#cvv');
  const errorMessage = document.querySelector('.error-message');

  // Check each field's validity
  const isCardNumberValid = cardNumber.checkValidity();
  const isCardHolderValid = cardHolder.checkValidity();
  const isExpMonthValid = expMonth.checkValidity();
  const isExpYearValid = expYear.checkValidity();
  const isCVVValid = cvv.checkValidity();

  if (isCardNumberValid && isCardHolderValid && isExpMonthValid && isExpYearValid && isCVVValid) {
      errorMessage.style.display = 'none'; // Hide error message if all fields are valid
      alert('Payment processed!'); // Proceed with form submission (or any other action)
  } else {
      errorMessage.style.display = 'flex'; // Show error message if any field is invalid
  }
});
