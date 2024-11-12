// script.js
// Game logic and data management
let busesInService = 50;
let studentsLate = 0;
let adultsLateForWork = 0;
let missedMedicalAppts = 0;

// Function to handle anti-social incidents
function handleIncident() {
  // Reduce the number of buses in service
  busesInService--;

  // Update the impact metrics
  studentsLate += 2;
  adultsLateForWork += 1;
  missedMedicalAppts += 1;

  // Display the incident popup
  showIncidentPopup();

  // Update the data visualization
  updateDataVisualization();
}

// Function to display the incident popup
function showIncidentPopup() {
  const incidentPopup = document.querySelector('.incident-popup');
  incidentPopup.textContent = 'An incident of anti-social behavior has occurred, and a bus has been taken out of service.';
  incidentPopup.style.display = 'block';

  // Hide the popup after a few seconds
  setTimeout(() => {
    incidentPopup.style.display = 'none';
  }, 5000);
}

// Function to update the data visualization
function updateDataVisualization() {
  const dataVisualization = document.querySelector('.data-visualization');
  dataVisualization.innerHTML = `
    <h2>Key Metrics</h2>
    <p>Buses in Service: ${busesInService}</p>
    <p>Students Late: ${studentsLate}</p>
    <p>Adults Late for Work: ${adultsLateForWork}</p>
    <p>Missed Medical Appointments: ${missedMedicalAppts}</p>
  `;
}

// Simulate an incident every few seconds
setInterval(handleIncident, 10000);