export function getFormValues() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const motivation = document.getElementById('motivation').value;

    return { firstName, lastName, email, phone, age, motivation };
}

export function showValuesInConsole(values) {
    console.log('First Name:', values.firstName);
    console.log('Last Name:', values.lastName);
    console.log('Email:', values.email);
    console.log('Phone:', values.phone);
    console.log('Age:', values.age);
    console.log('Motivation:', values.motivation);
}

export function saveFormValues() {
    const values = getFormValues();
    localStorage.setItem('formData', JSON.stringify(values));
    alert('Form data saved.');
}

export function loadFormValues() {
    const storedValues = JSON.parse(localStorage.getItem('formData'));
    if (storedValues) {
        document.getElementById('first-name').value = storedValues.firstName || '';
        document.getElementById('last-name').value = storedValues.lastName || '';
        document.getElementById('email').value = storedValues.email || '';
        document.getElementById('phone').value = storedValues.phone || '';
        document.getElementById('age').value = storedValues.age || '';
        document.getElementById('motivation').value = storedValues.motivation || '';
    }
}


window.onload = function() {
    
    localStorage.removeItem('formData');
    
    document.getElementById("myForm").reset();
};
