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

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-list li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
