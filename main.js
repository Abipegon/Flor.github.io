/* Archivo: scripts.js */

let workData = {};
let emergencyData = {};
let exerciseData = {};

function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function login() {
    var username = document.getElementById('username').value;
    document.getElementById('display-username').textContent = username;
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
}

function register() {
    var newUsername = document.getElementById('new-username').value;
    alert("Usuario registrado: " + newUsername);
    showLogin();
}

function logout() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function goBack() {
    document.getElementById('work-data-container').style.display = 'none';
    document.getElementById('emergency-data-container').style.display = 'none';
    document.getElementById('exercise-data-container').style.display = 'none';
    document.getElementById('all-data-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
}

function showWorkData() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('work-data-container').style.display = 'block';
}

function showEmergencyData() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('emergency-data-container').style.display = 'block';
}

function showExerciseData() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('exercise-data-container').style.display = 'block';
}

function showAllData() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('all-data-container').style.display = 'block';

    document.getElementById('all-work-data').innerHTML = `
        <p>Empresa: ${workData.company || ''}</p>
        <p>Horario de entrada: ${workData.workStart || ''}</p>
        <p>Horario de salida: ${workData.workEnd || ''}</p>
        <p>Trabajos Pendientes: ${workData.pendingTasks ? workData.pendingTasks.join(', ') : ''}</p>
        <p>Trabajos Realizados: ${workData.completedTasks ? workData.completedTasks.join(', ') : ''}</p>
    `;

    document.getElementById('all-emergency-data').innerHTML = `
        <p>Hospital más cercano: ${emergencyData.hospital || ''}</p>
        <p>Fecha de consulta médica: ${emergencyData.appointmentDate || ''}</p>
        <p>Hora de consulta médica: ${emergencyData.appointmentTime || ''}</p>
        <p>Presión Arterial: ${emergencyData.bloodPressure || ''}</p>
        <p>Peso: ${emergencyData.weight || ''}</p>
        <p>Altura: ${emergencyData.height || ''}</p>
        <p>Glucosa: ${emergencyData.glucose || ''}</p>
        <p>Frecuencia Respiratoria: ${emergencyData.respiratoryRate || ''}</p>
        <p>Alergias: ${emergencyData.allergy || ''}</p>
    `;

    document.getElementById('all-exercise-data').innerHTML = `
        <p>Tipo de ejercicio: ${exerciseData.exerciseType || ''}</p>
        <p>Ejercicio específico: ${exerciseData.specificExercise || ''}</p>
        <p>Ejercicios Realizados: ${exerciseData.exerciseTasks ? exerciseData.exerciseTasks.join(', ') : ''}</p>
    `;
}

function addTask() {
    var task = document.getElementById('new-task').value;
    var taskList = document.getElementById('pending-tasks');
    var taskItem = document.createElement('div');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    document.getElementById('new-task').value = ''; // Clear the input field
}
