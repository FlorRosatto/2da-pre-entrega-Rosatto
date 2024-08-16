import { levels } from './exams-data.js';
import { showLevels } from './exams-dom.js';
import { initializeLevelSearch } from './exams-events.js';

document.addEventListener("DOMContentLoaded", function() {
    showLevels(levels); 
    initializeLevelSearch();
});