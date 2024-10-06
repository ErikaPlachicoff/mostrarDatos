// Seleccionar los elementos del DOM
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Agregar un evento de clic al botón
buttonText.addEventListener('click', () => {
    const value = inputText.value; // Tomo el valor del input
    if (value) {
        // obtener los datos guardados
        let datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];
        
        //agregar el nuevo dato al array
        datosGuardados.push(value);

        // guardar el array actualizado en localstoragee
        localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
        alert('Dato guardado con éxito!');

        // limpiar el campo de texto
        inputText.value = '';
    } else {
        alert('Por favor, ingresa un dato.');
    }
});
