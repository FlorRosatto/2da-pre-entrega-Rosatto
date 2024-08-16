export function showLevels(levels) {
    const levelList = levels.map(level => `<li>${level}</li>`).join('');
    document.getElementById('level-list').innerHTML = levelList;

levels.forEach(level => {
    const li = document.createElement('li');
    li.textContent = level; // Agrega el nivel al elemento <li>
    levelList.appendChild(li); // Añade el <li> a la lista
});
}

