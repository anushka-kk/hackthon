// Location data
const locationData = {
    'downtown': {
        title: 'Downtown Parking',
        address: '123 Main Street, Downtown',
        totalSpots: 100,
        availableSpots: 45,
        hourlyRate: 2.50,
        amenities: [
            'Security Cameras',
            'Covered Parking',
            'EV Charging',
            'Elevator Access',
            'Card Payment',
            '24/7 Access'
        ],
        rules: [
            'No overnight parking without permit',
            'Maximum height: 2.1m',
            'Park within marked spaces',
            'Keep parking ticket visible',
            'No refunds after payment'
        ]
    },
    'airport': {
        title: 'Airport Parking',
        address: '789 Airport Road',
        totalSpots: 500,
        availableSpots: 200,
        hourlyRate: 3.00,
        amenities: [
            'Shuttle Service',
            'Luggage Assistance',
            'Security Patrols',
            'Covered Parking',
            'Car Wash',
            'Valet Service'
        ],
        rules: [
            'Minimum 2-hour parking',
            'Lost ticket fee applies',
            'No vehicle maintenance',
            'Security checks in effect',
            'Show boarding pass for discounts'
        ]
    },
    'railway': {
        title: 'Railway Station Parking',
        address: '456 Railway Avenue',
        totalSpots: 150,
        availableSpots: 70,
        hourlyRate: 2.00,
        amenities: [
            'Direct Platform Access',
            'CCTV Surveillance',
            'Weather Protection',
            'Ticket Machine',
            'Help Point',
            'Disabled Parking'
        ],
        rules: [
            'Valid ticket required',
            'No long-term storage',
            'Platform access rules apply',
            'Peak hour rates differ',
            'Railway bylaws in effect'
        ]
    },
    'park': {
        title: 'Public Park Parking',
        address: '321 Park Road',
        totalSpots: 80,
        availableSpots: 35,
        hourlyRate: 1.50,
        amenities: [
            'Park Access',
            'Public Restrooms',
            'Picnic Area',
            'Water Fountain',
            'Bicycle Racks',
            'Family Spots'
        ],
        rules: [
            'Dawn to dusk operation',
            'No overnight parking',
            'Event day rates apply',
            'Park rules in effect',
            'No commercial vehicles'
        ]
    }
};

// Get location ID from URL
const urlParams = new URLSearchParams(window.location.search);
const locationId = urlParams.get('location') || 'downtown';
const location = locationData[locationId];

// Populate page with location data
document.addEventListener('DOMContentLoaded', function() {
    // Set location details
    document.getElementById('locationTitle').textContent = location.title;
    document.getElementById('locationAddress').textContent = location.address;
    document.getElementById('availableSpots').textContent = location.availableSpots;

    // Populate amenities
    const amenitiesList = document.getElementById('amenitiesList');
    location.amenities.forEach(amenity => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check text-green-500"></i> ${amenity}`;
        amenitiesList.appendChild(li);
    });

    // Populate rules
    const rulesList = document.getElementById('rulesList');
    location.rules.forEach(rule => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-exclamation-circle text-yellow-500"></i> ${rule}`;
        rulesList.appendChild(li);
    });

    // Populate time slots
    populateTimeSlots();

    // Generate parking spots
    generateParkingSpots();

    // Set up event listeners
    setupEventListeners();
});

// Populate time slots
function populateTimeSlots() {
    const timeSelect = document.getElementById('parkingTime');
    for(let hour = 0; hour < 24; hour++) {
        for(let min = 0; min < 60; min += 30) {
            const time=hour.toString
        }}}