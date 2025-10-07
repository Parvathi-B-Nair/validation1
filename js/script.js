document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const userError = document.getElementById('userError');
  const emailError = document.getElementById('emailError');
  const passError = document.getElementById('passError');

  let valid = true;

  if (username.value.trim() === '') {
    userError.textContent = 'Username is required';
    valid = false;
  } else {
    userError.textContent = '';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Enter a valid email';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (password.value.length < 6) {
    passError.textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    passError.textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});


