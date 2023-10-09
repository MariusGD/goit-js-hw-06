const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Ne pare rău, dar trebuie sa completați toate câmpurile!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log('Date introduse:', formData);

    emailInput.value = '';
    passwordInput.value = '';
  }
});
