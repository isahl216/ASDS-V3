// Real-Time Clock
function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Riyadh', hour12: false };
  const saudiTime = now.toLocaleString('en-US', options);
  document.getElementById('realTimeClock').textContent = `Saudi Arabia Time: ${saudiTime}`;
}
setInterval(updateClock, 1000);
updateClock();

// Log Time Function
function logTime(buttonId) {
  const now = new Date();
  const options = { timeZone: 'Asia/Riyadh', hour12: false };
  const saudiTime = now.toLocaleString('en-US', options);
  document.getElementById(buttonId).textContent = saudiTime;
}

// Submit Data Function
function submitData() {
  const data = {
    teamCode: JSON.parse(localStorage.getItem('teamData')).teamCode,
    medicName: JSON.parse(localStorage.getItem('teamData')).medicName,
    emtName: JSON.parse(localStorage.getItem('teamData')).emtName,
    driverName: JSON.parse(localStorage.getItem('teamData')).driverName,
    ambulanceCode: JSON.parse(localStorage.getItem('teamData')).ambulanceCode,
    timeOfCall: document.getElementById('timeOfCall').textContent,
    dispatchTime: document.getElementById('dispatchTime').textContent,
    enRoute: document.getElementById('enRoute').textContent,
    arrival: document.getElementById('arrival').textContent,
    departure: document.getElementById('departure').textContent,
    destination: document.getElementById('destination').textContent,
    inService: document.getElementById('inService').textContent,
    tripType: document.getElementById('tripType').value,
    narcoticPouch: document.getElementById('narcoticPouch').value,
  };

  // Save data to localStorage (for demo purposes)
  localStorage.setItem('submissionData', JSON.stringify(data));
  alert('Data submitted successfully!');
}