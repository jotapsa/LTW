//3.a
let a, span;

a = document.querySelectorAll("#products ul li a");
span = document.querySelectorAll("#products ul li span.qty")

for(let i=0; i<a.length; i++){
  a[i].addEventListener("click", function(event){
    span[i].innerHTML = parseInt(span[i].innerHTML)+1;
  });
}

//3.b
let li, buy;

li = document.querySelectorAll("#products ul li");
span = document.querySelectorAll("#products ul li span.qty");
buy = document.querySelector("#products a.buy");

buy.addEventListener("click", handleBuy);

function requestListener(){
  let response, total;

  console.log(this.responseText)
  response = this.responseText;
  total = document.querySelector("p.total");

  if(response < 0){
    total.innerHTML = "not enough stock";
  }
  else {
    total.innerHTML = response;
  }
}

function handleBuy(event){
  let item, products, request;

  products = [];
  for(let i=0; i<li.length; i++){
    item = {};

    item["name"] = li[i].childNodes[0].textContent;
    item["qty"] = parseInt(span[i].innerHTML);
    products.push(item);
  }
  console.log(products);

  request = new XMLHttpRequest();
  request.onload = requestListener;

  request.open("post", "calculatetotal.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send("products=" + JSON.stringify(products));
}
