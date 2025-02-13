document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const teamCode = document.getElementById('teamCode').value;
  const medicName = document.getElementById('medicName').value;
  const emtName = document.getElementById('emtName').value;
  const driverName = document.getElementById('driverName').value;
  const ambulanceCode = document.getElementById('ambulanceCode').value;

  // Save data to localStorage (for demo purposes)
  const teamData = {
    teamCode,
    medicName,
    emtName,
    driverName,
    ambulanceCode,
  };
  localStorage.setItem('teamData', JSON.stringify(teamData));

  // Redirect to Times Page
  window.location.href = 'times.html';
});