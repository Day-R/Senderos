//validacion de logion

const form = document.querySelector('form');



form.addEventListener('submit', (event) => {

  const requiredFields = [ 'email','password'];
  
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(document.querySelector(`input[name="email"]`).value)) {
    event.preventDefault();
    document.querySelector(`label[for="email"]`).classList.add('error');
    return;
  }
  
  if (document.querySelector(`input[name="password"]`).value.length < 8) {
    event.preventDefault();
    document.querySelector(`label[for="password"]`).classList.add('error');
    return;
  }

  form.submit();
});

