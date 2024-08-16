import { getFormValues, showValuesInConsole } from './contact-dom.js';

export function initializeForm() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const values = getFormValues();
        showValuesInConsole(values);

        alert('Form submitted successfully!');
    });
}