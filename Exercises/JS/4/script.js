let form, input;

form = document.getElementsByTagName("form");
input = document.querySelector("form > label + label > input");
inputs = document.querySelectorAll("form input");

console.log(form);
console.log(input);

for(let i=0; i<inputs.length; i++){
  console.log(inputs[i]);
}

console.log(form.outerHTML);
console.log(input.outerHTML);

for(let i=0; i<inputs.length; i++){
  console.log(inputs[i].outerHTML);
}
