 document.addEventListener('DOMContentLoaded', function() {
  console.log("contact.js se ha cargado correctamente");
    // Obtener referencia al formulario
    const form = document.getElementById('signup-form');

    // Agregar evento de envío al formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el envío predeterminado del formulario
        event.preventDefault();

        // Capturar valores de los campos del formulario
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const motivation = document.getElementById('motivation').value;

        // Mostrar los valores capturados en la consola
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Age:', age);
        console.log('Motivation:', motivation);

      document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
})})})