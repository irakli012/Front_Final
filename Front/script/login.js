document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-container');
  const usernameEmailInput = document.getElementById('username-email');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameEmailValue = usernameEmailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!validateUsernameEmail(usernameEmailValue)) {
      alert('Please enter a valid username or email.');
      return;
    }

    if (!validatePassword(passwordValue)) {
      alert(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
      return;
    }
    alert('Login successful!');
  });

  function validateUsernameEmail(usernameEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return emailRegex.test(usernameEmail) || usernameRegex.test(usernameEmail);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
});
