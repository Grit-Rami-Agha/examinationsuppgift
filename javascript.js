document.querySelector('.hamburger').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").onclick = function(event) {
        event.preventDefault();
        alert("Your message was sent");
        return false;
    };
});

