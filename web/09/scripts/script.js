// Toggle modal visibility
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// Simulate a login process
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    toggleModal('login-modal');
});

// Simulate a registration process
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration successful!');
    toggleModal('register-modal');
});
