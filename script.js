// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
});

document.addEventListener('keydown', (e) => {
    document.getElementById('keyOutput').textContent = `Pressed: ${e.key}`;
});

let pressTimer;
document.getElementById('secret').addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert("Long press detected! 🎉");
    }, 1000);
});
document.getElementById('secret').addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

// Interactive Elements
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('colorBtn').addEventListener('click', function() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

function showTab(tabIndex) {
    document.querySelectorAll('.tab-content').forEach((tab, index) => {
        tab.classList.toggle('active', index === tabIndex - 1);
    });
}

// Form Validation
const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        validateField(e.target);
    });
});

function validateField(field) {
    const error = field.nextElementSibling;
    if (field.validity.valid) {
        field.classList.add('valid');
        field.classList.remove('invalid');
        error.style.display = 'none';
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
        error.style.display = 'block';
    }
}

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        inputs.forEach(validateField);
    }
});

// Password validation
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passError');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

function revealSecret() {
    alert("You found the secret! 🎉");
}