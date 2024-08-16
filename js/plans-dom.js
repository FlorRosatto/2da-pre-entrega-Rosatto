import { plans } from './plans-data.js';

export function showPlans() {
    const plansContainer = document.getElementById("plans-container");
    if (plansContainer) {
        plans.forEach(plan => {
            const card = document.createElement("div");
            card.className = "cardsContainerPlans";

            card.innerHTML = `
                <div class="titleCard">
                    <h3>${plan.name}</h3>
                    <span>${plan.description}</span>
                </div>
                <ul>
                    <li>Target Audience: ${plan.targetAudience}</li>
                </ul>
                <div class="containerBtn"><button class="buttonCards"><a href="./pages/plans.html">View More</a></button></div>
                <div class="card">
                    <p>Price: $${plan.price}</p>
                    <button class="discount-button" data-plan-id="${plan.id}">Apply 10% Discount</button>
                    <p id="discounted-price-${plan.id}"></p>
                </div>
            `;

            plansContainer.appendChild(card);
        });
    } else {
        console.error("Element with ID 'plans-container' not found.");
    }
}

export function updateDiscountedPrice(planId, discountedPrice) {
    document.getElementById(`discounted-price-${planId}`).textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
}

