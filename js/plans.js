import { showPlans } from './plans-dom.js';
import { initializeEvents, initializePriceCalculation } from './plans-events.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log("plans.js has loaded successfully");
    showPlans();
    initializeEvents();
    initializePriceCalculation();
});


