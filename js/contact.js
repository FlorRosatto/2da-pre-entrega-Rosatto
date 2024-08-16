import { saveFormValues, loadFormValues } from './contact-dom.js';

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', saveFormValues);
    } else {
        console.error('Save button not found');
    }

    loadFormValues();
});
