document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
const submitBtn = document.getElementById('submit-btn');
const countrySelect = document.getElementById('country-select');
const greetingMessage = document.getElementById('greeting-message');

submitBtn.addEventListener('click', function() {
    const selectedCountry = countrySelect.value;
    if (selectedCountry) {
        greetingMessage.textContent = `Hello and welcome to our page from ${selectedCountry}!`;
    } else {
        greetingMessage.textContent = 'Sorry, we do not teach other countries.';
    }
})})
