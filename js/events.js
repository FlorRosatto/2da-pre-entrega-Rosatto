import { showGreeting } from './dom.js';

export function initializeEvents() {
    const submitBtn = document.getElementById('submit-btn');
    const countrySelect = document.getElementById('country-select');

    submitBtn.addEventListener('click', function() {
        const selectedCountry = countrySelect.value;
        showGreeting(selectedCountry);
    });
}