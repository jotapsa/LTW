<?php
  $stock = [];
  $stock["Apple:"] = 10;
  $stock["Banana:"] = 10;
  $stock["Pear:"] = 10;

  $products = json_decode($_POST["products"]);
  $total = 0;

  for($i=0; $i<count($products); $i++){
    $name = $products[$i]->name;
    $quantity = $products[$i]->qty;

    if($stock[$name] < $quantity) {
      $total = -1;
      break;
    }
    else{
      $total += $quantity;
    }
  }

  echo $total;
?>
