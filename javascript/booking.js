document.addEventListener('DOMContentLoaded', () => {
    // Load booking data from localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    
    if(bookingData) {
        document.getElementById('totalAmount').textContent = bookingData.total.toFixed(2);
    }

    // Initialize Stripe
    const stripe = Stripe('pk_test_your_stripe_key');
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#cardElement');
});

function processPayment() {
    // Simulate payment processing
    const paymentResult = Math.random() > 0.1;
    
    if(paymentResult) {
        localStorage.setItem('bookingConfirmed', true);
        window.location.href = 'dashboard.html';
    } else {
        alert('Payment failed. Please try again.');
    }
}