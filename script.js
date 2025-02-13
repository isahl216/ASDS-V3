document.addEventListener('DOMContentLoaded', function () {
    const teamForm = document.getElementById('teamForm');
    const timeSection = document.getElementById('timeSection');
    const finishButton = document.getElementById('finish');

    teamForm.addEventListener('submit', function (e) {
        e.preventDefault();
        timeSection.style.display = 'block';
    });

    document.querySelectorAll('.time-buttons button').forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            document.getElementById(action).textContent = new Date().toLocaleTimeString();
            this.disabled = true;
        });
    });

    finishButton.addEventListener('click', function () {
        alert("Trip details submitted successfully!");
    });
});
