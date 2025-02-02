document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    document.getElementById('username').textContent = userData.name || 'User';

    // Load bookings
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const activeBookings = bookings.filter(booking => !booking.completed);
    
    const bookingList = document.getElementById('activeBookings');
    activeBookings.forEach(booking => {
        bookingList.innerHTML += `
            <div class="booking-card">
                <h3>${booking.location}</h3>
                <p>${booking.date} | ${booking.time}</p>
                <p>Spot: ${booking.spot} | Total: $${booking.total}</p>
                <button class="btn-cancel">Cancel Booking</button>
            </div>
        `;
    });
});