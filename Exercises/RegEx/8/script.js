let password = document.getElementById('password');
password.addEventListener('keyup', validatePassword, true); //false - bubbling phase, true capturing phase

function validatePassword(event){
  let password, username, submitButton;
  password = this.value;
  username = document.getElementById('username').value;
  submitButton = document.getElementById('submitButton');

  //If username is in password string
  if(password.indexOf(username)>=0){
    this.classList.remove('valid');
    this.classList.add('invalid');
    submitButton.setAttribute("disabled", "true"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
  else{
    this.classList.remove('invalid');
    this.classList.add('valid');
    submitButton.removeAttribute("disabled");
  }
}
