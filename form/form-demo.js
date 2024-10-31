document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('checkoutForm');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const creditCardContainer = document.getElementById('creditCardNumberContainer');
    const paypalContainer = document.getElementById('paypalUsernameContainer');
  
    // Attach event listeners
    paymentMethodSelect.addEventListener('change', togglePaymentDetails);
    form.addEventListener('submit', validateForm);
  
    function validateForm(event) {
        const errors = [];
        let isValid = true;
  
        // Validate full name
        if (!document.getElementById('fullName').value) {
            errors.push("Full Name is required.");
            isValid = false;
        }
  
        // Validate email
        const email = document.getElementById('email').value;
        if (!email) {
            errors.push("Email is required.");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push("Email is invalid.");
            isValid = false;
        }
  
        // Validate address
        if (!document.getElementById('address').value) {
            errors.push("Address is required.");
            isValid = false;
        }
  
        // Validate payment information based on selected method
        if (paymentMethodSelect.value === 'creditCard') {
            if (!document.getElementById('creditCardNumber').value) {
                errors.push("Credit Card Number is required.");
                isValid = false;
            }
        } else if (paymentMethodSelect.value === 'paypal') {
            if (!document.getElementById('paypalUsername').value) {
                errors.push("PayPal Username is required.");
                isValid = false;
            }
        }
  
        // Prevent form submission if not valid
        if (!isValid) {
            event.preventDefault();
            showErrors(errors);
        }
    }
  
    function togglePaymentDetails() {
        const selectedPaymentMethod = paymentMethodSelect.value;
  
        // Hide all payment containers
        creditCardContainer.classList.add('hide');
        paypalContainer.classList.add('hide');
  
        // Reset required attributes
        document.getElementById('creditCardNumber').removeAttribute('required');
        document.getElementById('paypalUsername').removeAttribute('required');
  
        // Show the appropriate payment method container and set required
        if (selectedPaymentMethod === 'creditCard') {
            creditCardContainer.classList.remove('hide');
            document.getElementById('creditCardNumber').setAttribute('required', 'required');
        } else if (selectedPaymentMethod === 'paypal') {
            paypalContainer.classList.remove('hide');
            document.getElementById('paypalUsername').setAttribute('required', 'required');
        }
    }
  
    // Helper function to display errors
    function showErrors(errors) {
        const errorEl = document.querySelector(".errors");
        errorEl.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    }
  });
   



/* document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkoutForm');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const creditCardContainer = document.getElementById('creditCardNumberContainer');
    const paypalContainer = document.getElementById('paypalUsernameContainer');

    // Attach event listeners
    paymentMethodSelect.addEventListener('change', togglePaymentDetails);
    form.addEventListener('submit', validateForm);

    function validateForm(event) {
        console.log("Starting validation...");
        const errors = [];
        let isValid = true;

        // Validate full name
        const fullName = document.getElementById('fullName').value;
        console.log("Full Name entered:", fullName);
        if (!fullName) {
            errors.push("Full Name is required.");
            isValid = false;
        } else if (fullName !== "Bob") { // Check for "Bob"
            errors.push("Only people named 'Bob' can submit this form.");
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value;
        console.log("Email entered:", email);
        if (!email) {
            errors.push("Email is required.");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push("Email is invalid.");
            isValid = false;
        }

        // Validate address
        const address = document.getElementById('address').value;
        console.log("Address entered:", address);
        if (!address) {
            errors.push("Address is required.");
            isValid = false;
        }

        // Validate payment information based on selected method
        const selectedPaymentMethod = paymentMethodSelect.value;
        console.log("Selected payment method:", selectedPaymentMethod);
        
        if (selectedPaymentMethod === 'creditCard') {
            const creditCardNumber = document.getElementById('creditCardNumber').value;
            console.log("Credit Card Number entered:", creditCardNumber);
            if (!creditCardNumber) {
                errors.push("Credit Card Number is required.");
                isValid = false;
            } else if (creditCardNumber !== "1234123412341234") { // Specific card validation
                errors.push("The credit card number is invalid. Please use 1234123412341234 for testing.");
                isValid = false;
            }
        } else if (selectedPaymentMethod === 'paypal') {
            const paypalUsername = document.getElementById('paypalUsername').value;
            console.log("PayPal Username entered:", paypalUsername);
            if (!paypalUsername) {
                errors.push("PayPal Username is required.");
                isValid = false;
            }
        } else {
            errors.push("Please select a payment method.");
            isValid = false;
        }

        // If any validation fails, prevent form submission and show errors
        if (!isValid) {
            event.preventDefault(); // Stop form submission
            showErrors(errors);
            console.log("Validation failed with errors:", errors);
        } else {
            console.log("Validation passed.");
        }
    }

    function togglePaymentDetails() {
        const selectedPaymentMethod = paymentMethodSelect.value;

        // Hide all payment containers
        creditCardContainer.classList.add('hide');
        paypalContainer.classList.add('hide');

        // Reset required attributes
        document.getElementById('creditCardNumber').removeAttribute('required');
        document.getElementById('paypalUsername').removeAttribute('required');

        // Show the appropriate payment method container and set required
        if (selectedPaymentMethod === 'creditCard') {
            creditCardContainer.classList.remove('hide');
            document.getElementById('creditCardNumber').setAttribute('required', 'required');
        } else if (selectedPaymentMethod === 'paypal') {
            paypalContainer.classList.remove('hide');
            document.getElementById('paypalUsername').setAttribute('required', 'required');
        }
    }

    // Helper function to display errors
    function showErrors(errors) {
        const errorEl = document.querySelector(".errors");
        errorEl.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    }

    // Redirect after validation
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const fullName = document.getElementById('fullName').value;
        const actionUrl = `./completed.html?fullName=${encodeURIComponent(fullName)}`;
        
        window.location.href = actionUrl; // Redirect to completed.html with query parameter
    });

     
});
 

 */