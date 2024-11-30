/* document.getElementById('caseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para registrar el caso
    alert('Caso registrado con éxito!');
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para verificar el estado del caso
    const caseId = document.getElementById('caseId').value;
    document.getElementById('statusResult').innerText = `Estado del caso ${caseId}: En proceso`;
});
 *//* 

document.getElementById('caseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para registrar el caso
    alert('Caso registrado con éxito!');
    // Podrías agregar una redirección a una página de confirmación si lo deseas
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para verificar el estado del caso
    const caseId = document.getElementById('caseId').value;
    document.getElementById('statusResult').innerText = `Estado del caso ${caseId}: En proceso`;
});
 */

<>/* document.getElementById('caseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para registrar el caso
    alert('Caso registrado con éxito!');
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para verificar el estado del caso
    const caseId = document.getElementById('caseId').value;
    document.getElementById('statusResult').innerText = `Estado del caso ${caseId}: En proceso`;
});
 */ /*

document.getElementById('caseForm').addEventListener('submit', function(event) {
   event.preventDefault();
   // Aquí iría la lógica para registrar el caso
   alert('Caso registrado con éxito!');
   // Podrías agregar una redirección a una página de confirmación si lo deseas
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
   event.preventDefault();
   // Aquí iría la lógica para verificar el estado del caso
   const caseId = document.getElementById('caseId').value;
   document.getElementById('statusResult').innerText = `Estado del caso ${caseId}: En proceso`;
});
*/
    <script src="./personal.js"></script><script src="./persona-status.html"></script><script src="./personal.html"></script></>
// Simulamos una base de datos local
let casesDatabase = [];

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('#yourElementId');
    if (element) {
        element.addEventListener('click', function() {
            // Your event handler code here
        });
    } else {
        console.error('Element not found');
    }
});


document.getElementById('caseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const equipment = document.getElementById('equipment').value;
    const issue = document.getElementById('issue').value;
    const details = document.getElementById('details').value;

    // Crear un objeto de caso con un ID único
    const caseId = `CASE-${Math.floor(Math.random() * 10000)}`;
    const caseData = { caseId, firstName, lastName, phone, email, department, equipment, issue, details };

    // Guardar el caso en la base de datos simulada
    casesDatabase.push(caseData);

    // Guardar la base de datos en localStorage (opcional)
    localStorage.setItem('casesDatabase', JSON.stringify(casesDatabase));

    alert('Caso registrado con éxito!');

    // Redirigir a la página de detalles del caso
    window.location.href = `./personal-detalles.html?caseId=${caseId}`;
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const caseId = document.getElementById('caseId').value;

    // Recuperar la base de datos simulada de localStorage (opcional)
    casesDatabase = JSON.parse(localStorage.getItem('casesDatabase')) || [];

    const caseData = casesDatabase.find(c => c.caseId === caseId);

    const statusResult = document.getElementById('statusResult');
    if (caseData) {
        statusResult.innerText = `Estado del caso ${caseId}: En proceso`;
    } else {
        statusResult.innerText = `Caso ${caseId} no encontrado`;
    }
});function redirectToDetails() {
    window.location.href = './personal-detalles.html';
}

// Mostrar detalles del caso en details.html
if (window.location.pathname.includes('./personal-detalles.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('caseId');

    casesDatabase = JSON.parse(localStorage.getItem('casesDatabase')) || [];
    const caseData = casesDatabase.find(c => c.caseId === caseId);

    const caseDetails = document.getElementById('caseDetails');
    if (caseData) {
        caseDetails.innerHTML = `
            <p><strong>ID del Caso:</strong> ${caseData.caseId}</p>
            <p><strong>Nombres:</strong> ${caseData.firstName}</p>
            <p><strong>Apellidos:</strong> ${caseData.lastName}</p>
            <p><strong>Teléfono:</strong> ${caseData.phone}</p>
            <p><strong>Email:</strong> ${caseData.email}</p>
            <p><strong>Departamento:</strong> ${caseData.department}</p>
            <p><strong>Equipo Informático:</strong> ${caseData.equipment}</p>
            <p><strong>Tipo de Caso:</strong> ${caseData.issue}</p>
            <p><strong>Detalle del Problema:</strong> ${caseData.details}</p>
        `;
    } else {
        caseDetails.innerHTML = `<p>Caso no encontrado</p>`;
    }
}
