import { initializeEvents } from './events.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    initializeEvents();
});

function selectPlan(planId) {
    const selectedPlan = { id: planId, date: new Date() };
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    alert('You have selected the plan: ' + planId);
}


document.addEventListener('DOMContentLoaded', function() {
    const savedPlan = JSON.parse(localStorage.getItem('selectedPlan'));
    if (savedPlan) {
        alert('Your previously selected plan is: ' + savedPlan.id);
    }
});

