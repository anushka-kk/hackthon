document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show error message
    function showError(element, errorElement) {
        element.style.borderColor = '#dc2626';
        errorElement.style.display = 'block';
    }

    // Function to hide error message
    function hideError(element, errorElement) {
        element.style.borderColor = '#ddd';
        errorElement.style.display = 'none';
    }

    // Input validation on blur
    emailInput.addEventListener('blur', function() {
        if (!this.value) {
            showError(this, emailError);
            emailError.textContent = 'Please enter your email address';
        } else if (!isValidEmail(this.value)) {
            showError(this, emailError);
            emailError.textContent = 'Please enter a valid email address';
        } else {
            hideError(this, emailError);
        }
    });

    passwordInput.addEventListener('blur', function() {
        if (!this.value) {
            showError(this, passwordError);
        } else {
            hideError(this, passwordError);
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate email
        if (!emailInput.value || !isValidEmail(emailInput.value)) {
            showError(emailInput, emailError);
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value) {
            showError(passwordInput, passwordError);
            isValid = false;
        }

        if (isValid) {
            // Here you would typically make an API call to your backend
            console.log('Form submitted successfully');
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
            console.log('Remember me:', document.getElementById('remember').checked);
            
            // Clear form
            loginForm.reset();
        }
    });
});