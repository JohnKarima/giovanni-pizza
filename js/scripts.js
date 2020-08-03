function PizzaOrder(pizzaCostTotality) {
  this.pizzaCostTotal = pizzaCostTotality;
}
var pizzacostarr = []

function deliver() {
  var pizzaTotalAki = pizzacostarr.map(Number);
  var pizzaTotalFr = pizzaTotalAki.reduce(function (a, b) { return a + b; })
  alert("Your total pizza costs is " + pizzaTotalFr)
}
function deliverer() {
  var yourName = prompt("What is your name? ")
  var yourAddress = prompt("What is your address? ")
  if (yourName.length === 0 || yourAddress.length === 0) {
    alert("Please enter your name and address to continue")
  } else {
    alert("Thank you " + yourName + ", your order will be delivered to " + yourAddress)
  }
}

$(document).ready(function () {
  $("form#pizzaForm").submit(function (event) {
    event.preventDefault();
    var pizzaSizeCost = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaCrustCost = parseInt($("#pizzaCrust option:selected").val());
    var pizzaToppingsCost1 = $.map($("input[name=toppings]:checked"), function (makeToppingsArray) { return makeToppingsArray.value; })
    if (pizzaToppingsCost1.length === 0) {
      alert("You must select at least one topping");
    }
    var pizzaToppingsCost = pizzaToppingsCost1.map(Number);
    var pizzaToppingsCostSum = pizzaToppingsCost.reduce(function (a, b) { return a + b; })
    var deliveryOption = parseInt($("input:radio[name=delivery]:checked").val());
    var pizzaCostTotal = pizzaSizeCost + pizzaCrustCost + pizzaToppingsCostSum + deliveryOption
    pizzacostarr.push(pizzaCostTotal)
    $("ul#pizzaOrderFinal").append("<li><span class='pizza-total-class'>" + pizzaCostTotal + "</span></li>");
    $('#pizzaForm')[0].reset();
  })
})
