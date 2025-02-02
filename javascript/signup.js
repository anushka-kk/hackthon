document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // First Name validation
    const firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    // Last Name validation
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Confirm Password validation
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (isValid) {
        // Here you would typically send the data to your server
        console.log('Registration data:', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value
        });
        
        // For demo purposes, simulate successful registration
        alert('Registration successful!');
        // Redirect to login page
        // window.location.href = 'login.html';
    }
});