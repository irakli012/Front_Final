document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('.register-container');
  const firstNameInput = document.getElementById('firstname');
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const birthDateInput = document.getElementById('birthdate');

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstNameValue = firstNameInput.value.trim();
    const surnameValue = surnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const birthDateValue = birthDateInput.value;

    if (!validateName(firstNameValue)) {
      alert('Please enter a valid first name.');
      return;
    }

    if (!validateName(surnameValue)) {
      alert('Please enter a valid surname.');
      return;
    }

    if (!validateEmail(emailValue)) {
      alert('Please enter a valid email.');
      return;
    }

    if (!validateUsername(usernameValue)) {
      alert(
        'Username must be at least 3 characters long and can contain letters, numbers, and underscores.'
      );
      return;
    }

    if (!validatePassword(passwordValue)) {
      alert(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      alert('Passwords do not match.');
      return;
    }

    if (!validateBirthDate(birthDateValue)) {
      alert('Please enter a valid birth date.');
      return;
    }

    alert('Registration successful!');
  });

  function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  }
});
