document.addEventListener('DOMContentLoaded', function () {
    const teamForm = document.getElementById('teamForm');
    if (teamForm) {
        teamForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Team successfully signed up!");
        });
    }

    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        adminForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Admin login successful!");
        });
    }
});
