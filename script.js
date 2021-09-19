let form = document.getElementById('form');
let password = document.getElementById('password');
let errorEl = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (password.value.length < 6) {
        messages.push('Password should be more than 6 characters');
    }
    if (password.value.length > 20) {
        messages.push('Password should be less than 20 characters');
    }
    if (password.value === "password" || password.value === "Password") {
        messages.push(`Password cannot be 'password'`);
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorEl.textContent = messages.join(', ');
    }
});