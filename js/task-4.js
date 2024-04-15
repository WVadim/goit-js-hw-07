const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  const formEl = event.currentTarget.elements;

  const info = {
    email: formEl.email.value.trim(),
    password: formEl.password.value.trim(),
  };

  if (!info.email || !info.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(info);

  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
