document.addEventListener("DOMContentLoaded", function() {
    console.log("plans.js se ha cargado correctamente");
function applyDiscount(plan) {
    let originalPrice;
    let discountedPrice;
    switch(plan) {
        case 1:
            originalPrice = 100;
            break;
        case 2:
            originalPrice = 200;
            break;
        case 3:
            originalPrice = 300;
            break;
        default:
            return;
    }
    discountedPrice = originalPrice * 0.9; // 10% discount
    document.getElementById(`discounted-price-${plan}`).textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
}


document.addEventListener("DOMContentLoaded", function() {
    const plans = [
        { 
            id: 1, 
            name: "Plan 1", 
            description: "Basic English Language Plan: 'Starter'", 
            targetAudience: "Beginners and those looking to build a strong foundation in English.",
            price: 100 
        },
        { 
            id: 2, 
            name: "Plan 2", 
            description: "Intermediate English Language Plan: 'Progressive'", 
            targetAudience: "Learners with some prior English knowledge aiming to improve their skills.",
            price: 200 
        },
        { 
            id: 3, 
            name: "Plan 3", 
            description: "Advanced English Language Plan: 'Fluency Mastery'", 
            targetAudience: "Advanced learners striving for fluency and advanced proficiency.",
            price: 300 
        }
    ];

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

    function applyDiscount(planId) {
        const plan = plans.find(p => p.id === planId);
        const discountedPrice = plan.price * 0.9;
        document.getElementById(`discounted-price-${planId}`).textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
    }

    const buttons = document.querySelectorAll(".discount-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const planId = parseInt(this.getAttribute("data-plan-id"));
            applyDiscount(planId);
        });
    });
} else {
    console.error("Element with ID 'plans-container' not found.");
}
});})

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






const plans = [
    {
        id: 1,
        name: "Starter",
        classesPerWeek: 2,
        duration: 60 // in minutes
    },
    {
        id: 2,
        name: "Progressive",
        classesPerWeek: 3,
        duration: 90 // in minutes
    },
    {
        id: 3,
        name: "Fluency Mastery",
        classesPerWeek: 4,
        duration: 120 // in minutes
    }
];
