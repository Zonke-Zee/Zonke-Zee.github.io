AOS.init({offset:0});

/*===== MENU SHOW =====*/ 

function hamburg(){
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(0px)"
            }
            function cancel(){
                const navbar = document.querySelector(".dropdown")
                navbar.style.transform = "translateY(-500px)"
            }
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.dropdown').style.transform = "translateY(-500px)";
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const messages = document.getElementById('messages');
    const errors = form.querySelectorAll('.error');

    form.addEventListener('submit', function (e) {
        let valid = true;

        // Clear previous errors
        errors.forEach(error => error.textContent = '');

        // Username validation
        if (username.value.trim() === '') {
            errors[0].textContent = 'Name is required';
            valid = false;
        }

        // Email validation
        if (email.value.trim() === '') {
            errors[1].textContent = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            errors[1].textContent = 'Email is not valid';
            valid = false;
        }

        // Message validation
        if (messages.value.trim() === '') {
            errors[2].textContent = 'Message is required';
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});