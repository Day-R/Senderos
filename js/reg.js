//validacion de formularios

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {


  const requiredFields = ['name', 'email', 'telephone','password', 'RepeatPassword']
  
  for (const field of requiredFields) {
    
    if (document.querySelector(`input[name="${field}"]`).value.trim() === '') {
      event.preventDefault();
      document.querySelector(`label[for="${field}"]`).classList.add('error');
      return;
    }
  }

  const telephoneRegex = /^(1\s)?(\d{3}-\d{3}-\d{4}|(\d{10}))$/;
  function validateTelephone(telefono) {
  return telephoneRegex.test(telefono);
}

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

  
function validateRepeatPassword(){
    if (repeatPassword.value.length != password.value){
        console.error("la contraseña no coincide");

    }

  event.preventDefault();
  form.submit();
}

})
