// Selecciar el elemento donde muestra los datos
const dataElement = document.getElementById('data');

// obtener los valores guardados en el localStorage
const savedData = JSON.parse(localStorage.getItem('datosGuardados'));


if (savedData && savedData.length > 0) {
    // crea una lista con los datos guardados
    savedData.forEach(dato => {
        const datoElement = document.createElement('p');
        datoElement.textContent = dato;
        dataElement.appendChild(datoElement);
    });
} else {
    
    dataElement.textContent = 'No hay datos guardados.';
}