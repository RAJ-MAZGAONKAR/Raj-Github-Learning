document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const togglePw = document.getElementById('togglePw');
  const error = document.getElementById('error');

  togglePw.addEventListener('click', () => {
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    togglePw.textContent = type === 'password' ? 'Show' : 'Hide';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    error.textContent = '';

    if (!email.value || !password.value) {
      error.textContent = 'Please fill in both fields.';
      return;
    }
    if (password.value.length < 6) {
      error.textContent = 'Password must be at least 6 characters.';
      return;
    }

    // Demo: show submitted values in console (replace with real auth)
    console.log('Login demo submit:', { email: email.value, remember: !!document.getElementById('remember').checked });
    error.style.color = 'green';
    error.textContent = 'Demo login successful (no real auth).';
    setTimeout(() => { error.textContent = ''; error.style.color = ''; }, 2000);
    form.reset();
  });
});