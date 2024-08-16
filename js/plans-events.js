import { plans } from './plans-data.js';
import { updateDiscountedPrice } from './plans-dom.js';

export function initializeEvents() {
    const buttons = document.querySelectorAll(".discount-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const planId = parseInt(this.getAttribute("data-plan-id"));
            applyDiscount(planId);
        });
    });
}

function applyDiscount(planId) {
    const plan = plans.find(p => p.id === planId);
    const discountedPrice = plan.price * 0.9;
    updateDiscountedPrice(planId, discountedPrice);
}

export function initializePriceCalculation() {
    document.getElementById('calculate').addEventListener('click', function() {
        let plan = document.getElementById('plan').value;
        let classType = document.getElementById('classType').value;

        let pricePerHour;
        let totalDuration = 0; // Total class duration in minutes per week

        if (classType === "individual") {
            pricePerHour = 20;
        } else if (classType === "group") {
            pricePerHour = 15;
        } else {
            document.getElementById('result').innerText = "Invalid class type";
            return;
        }

        switch(plan) {
            case "starter":
                totalDuration = 2 * 60; // 2 classes of 60 minutes per week
                break;
            case "progressive":
                totalDuration = 3 * 90; // 3 classes of 90 minutes per week
                break;
            case "fluency":
                totalDuration = 4 * 120; // 4 classes of 120 minutes per week
                break;
            default:
                document.getElementById('result').innerText = "Invalid plan";
                return;
        }

        let totalPrice = (totalDuration / 60) * pricePerHour; // Convert minutes to hours
        document.getElementById('result').innerText = "The total price for the classes is: $" + totalPrice + " per week";
        console.log("The total price for the classes is: $" + totalPrice + " per week");
    });
}
