document.addEventListener('DOMContentLoaded', () => {
    // Sample Location Data
    const locationData = {
        'downtown': {
            title: 'Downtown Parking',
            address: '123 Main Street',
            spots: 100,
            available: 45,
            rate: 2.5,
            amenities: [
                '24/7 Security',
                'EV Charging',
                'Covered Parking',
                'Elevator Access',
                'Car Wash'
            ],
            rules: [
                'No overnight parking',
                'Max height: 2.1m',
                'No refunds',
                'Valid ticket required'
            ]
        }
    };

    // Get Location from URL
    const urlParams = new URLSearchParams(window.location.search);
    const locationId = urlParams.get('location') || 'downtown';
    const location = locationData[locationId];

    // Set Location Info
    document.getElementById('locationTitle').textContent = location.title;
    document.getElementById('locationAddress').textContent = location.address;
    document.getElementById('availableSpots').textContent = location.available;
    document.getElementById('summaryLocation').textContent = location.title;

    // Populate Amenities & Rules
    populateList('amenitiesList', location.amenities, 'check');
    populateList('rulesList', location.rules, 'exclamation');

    // Generate Time Slots
    populateTimeSlots();

    // Generate Parking Spots
    generateParkingSpots(location.available);

    // Event Listeners
    setupEventHandlers(location.rate);
});

function populateList(elementId, items, iconType) {
    const list = document.getElementById(elementId);
    list.innerHTML = items.map(item => `
        <li>
            <i class="fas fa-${iconType}-circle text-${iconType === 'check' ? 'green' : 'orange'}-500"></i>
            ${item}
        </li>
    `).join('');
}

function populateTimeSlots() {
    const timeSelect = document.getElementById('bookingTime');
    for(let hour = 0; hour < 24; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        timeSelect.innerHTML += `<option value="${time}">${time}</option>`;
    }
}

function generateParkingSpots(availableCount) {
    const grid = document.getElementById('parkingSpotsGrid');
    const totalSpots = 50; // Example number
    
    for(let i = 1; i <= totalSpots; i++) {
        const spot = document.createElement('div');
        spot.className = `parking-spot ${i <= availableCount ? 'available' : 'occupied'}`;
        spot.textContent = `A${i.toString().padStart(2, '0')}`;
        if(i <= availableCount) {
            spot.addEventListener('click', () => handleSpotSelection(spot));
        }
        grid.appendChild(spot);
    }
}

function setupEventHandlers(hourlyRate) {
    const bookingDate = document.getElementById('bookingDate');
    const bookingTime = document.getElementById('bookingTime');
    const bookBtn = document.getElementById('bookNowBtn');

    // Set default date to today
    bookingDate.min = new Date().toISOString().split('T')[0];
    
    // Update booking summary
    [bookingDate, bookingTime].forEach(element => {
        element.addEventListener('change', updateBookingSummary);
    });

    function updateBookingSummary() {
        const date = bookingDate.value;
        const time = bookingTime.value;
        const duration = 1; // Default 1 hour
        
        if(date && time) {
            document.getElementById('summaryDateTime').textContent = `${date} ${time}`;
            document.getElementById('summaryDuration').textContent = `${duration} hour`;
            document.getElementById('summaryTotal').textContent = `$${(hourlyRate * duration).toFixed(2)}`;
            bookBtn.disabled = false;
        }
    }
}

function handleSpotSelection(spotElement) {
    const spots = document.querySelectorAll('.parking-spot');
    spots.forEach(spot => spot.classList.remove('selected'));
    spotElement.classList.add('selected');
}