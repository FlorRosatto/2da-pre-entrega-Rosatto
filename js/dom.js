export function showGreeting(country) {
    const greetingMessage = document.getElementById('greeting-message');
    
    if (country) {
        greetingMessage.textContent = `Hello and welcome to our page from ${country}!`;
    } else {
        greetingMessage.textContent = 'Sorry, we do not teach other countries.';
    }
}