const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const levelList = levels.map(level => `<li>${level}</li>`).join('');
document.getElementById('level-list').innerHTML = levelList;


const niveles = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Función para mostrar los niveles
function mostrarNiveles(niveles) {
    const levelList = niveles.map(nivel => `<li>${nivel}</li>`).join('');
    document.getElementById('level-list').innerHTML = levelList;
}

// Mostrar todos los niveles al cargar la página
mostrarNiveles(niveles);

// Manejar el evento de búsqueda
document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const resultados = niveles.filter(nivel => nivel.includes(searchInput.toUpperCase()));
    mostrarNiveles(resultados);
});
