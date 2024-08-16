// exams-events.js
export function initializeLevelSearch() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value;
        const results = levels.filter(level => level.includes(searchInput.toUpperCase()));
        displayLevels(results);
    });
}
