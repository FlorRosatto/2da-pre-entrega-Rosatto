fetch('../data/plans.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const plansContainer = document.getElementById('plans-container');
        
        data.forEach(plan => {
            const planElement = document.createElement('div');
            planElement.className = 'plan';

            const planTitle = document.createElement('h2');
            planTitle.textContent = plan.name;
            planElement.appendChild(planTitle);

            const planDescription = document.createElement('p');
            planDescription.textContent = `Description: ${plan.description}`;
            planElement.appendChild(planDescription);

            const planTargetAudience = document.createElement('p');
            planTargetAudience.textContent = `Target Audience: ${plan.targetAudience}`;
            planElement.appendChild(planTargetAudience);

            const planPrice = document.createElement('p');
            planPrice.textContent = `Price: $${plan.price}`;
            planElement.appendChild(planPrice);

            plansContainer.appendChild(planElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
