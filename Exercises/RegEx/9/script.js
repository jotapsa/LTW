let username, password, IPv4;
username = document.getElementById('username');
realName = document.getElementById('realname');
IPv4 = document.getElementById('IPv4');

username.addEventListener('keyup', validateUsername, true); //false - bubbling phase, true capturing phase
username.addEventListener('onblur', validateUsername, true); //false - bubbling phase, true capturing phase

realName.addEventListener('keyup', validateRealName, true); //false - bubbling phase, true capturing phase
realName.addEventListener('onblur', validateRealName, true); //false - bubbling phase, true capturing phase

IPv4.addEventListener('keyup', validateIPv4, true); //false - bubbling phase, true capturing phase
IPv4.addEventListener('onblur', validateIPv4, true); //false - bubbling phase, true capturing phase

function validateUsername(event){
  let submitButton = document.getElementById('submitButton');

  if(/^[a-zA-Z]\w{3,8}[a-zA-Z]$/.test(this.value)){
    this.classList.remove('invalid');
    this.classList.add('valid');
    submitButton.removeAttribute("disabled"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
  else{
    this.classList.remove('valid');
    this.classList.add('invalid');
    submitButton.setAttribute("disabled", "true"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
}

function validateRealName(event){
  let submitButton = document.getElementById('submitButton');

  if(/^[^0-9\\|!";@#£$§%&/()=?{[\]}'«»*+]+$/.test(this.value)){
    this.classList.remove('invalid');
    this.classList.add('valid');
    submitButton.removeAttribute("disabled"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
  else{
    this.classList.remove('valid');
    this.classList.add('invalid');
    submitButton.setAttribute("disabled", "true"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
}

function validateIPv4(event){
  let submitButton = document.getElementById('submitButton');

  if(/^(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(this.value)){
    this.classList.remove('invalid');
    this.classList.add('valid');
    submitButton.removeAttribute("disabled"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
  else{
    this.classList.remove('valid');
    this.classList.add('invalid');
    submitButton.setAttribute("disabled", "true"); //true doesn't do anything because its a boolean attribute (its presence represents true)
  }
}
