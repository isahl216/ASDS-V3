// Fetch and display data from localStorage
function loadData() {
  const data = JSON.parse(localStorage.getItem('submissionData'));
  if (data) {
    const tableBody = document.querySelector('#submissionsTable tbody');
    const row = `
      <tr>
        <td>${data.teamCode}</td>
        <td>${data.medicName}</td>
        <td>${data.emtName}</td>
        <td>${data.driverName}</td>
        <td>${data.ambulanceCode}</td>
        <td>${data.timeOfCall}</td>
        <td>${data.dispatchTime}</td>
        <td>${data.enRoute}</td>
        <td>${data.arrival}</td>
        <td>${data.departure}</td>
        <td>${data.destination}</td>
        <td>${data.inService}</td>
        <td>${data.tripType}</td>
        <td>${data.narcoticPouch}</td>
      </tr>
    `;
    tableBody.innerHTML = row;
  }
}

loadData();