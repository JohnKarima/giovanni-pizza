//business logic
function Order(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

Order.prototype.fullOrder = function () {
  return  " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};

function Total(price, quantity, delivery) {
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
  return this.price * this.quantity + this.delivery;
};


var sizePrice = [1200, 900, 600]
// var deliverPrices = [0, 200];
//user interface logic
$(document).ready(function () {
  $('form#pizzaForm').submit(function (event) {
      event.preventDefault();

      var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());

      var pizzaCrust = $($("#pizzaCrust option:selected").val());

      var pizzaTop = $$.map($("input[name=toppings]:checked"), function(makeToppingsArray){return makeToppingsArray.value; })
    if (pizzaToppingsCost1.length === 0) {
      alert("You must select at least one topping");
    }
    var pizzaToppingsCost = pizzaToppingsCost1.map(Number);
    var pizzaToppingsCostSum = pizzaToppingsCost.reduce(function(a, b){return a+b;})

      // var pizzaQty = parseInt($('#qty').val());

      var pizzaPick = parseInt($('#pick').val());


      var price = sizePrice[pizzaSize - 1];


      var DeliveryCost = deliverPrices[pizzaPick - 1];



      newOrder = new Order(pizzaSize, pizzaCrust, pizzaTop);
      newTotal = new Total(price, pizzaQty, DeliveryCost);
      if (pizzaPick===1){
      alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
      alert("your bill is: " + newTotal.finalTotal());
      }else{
          if(pizzaPick===2){
              prompt("Enter where you want your pizza to be delivered");
              alert("Your order has been received and it will be delivered. Continue to see your order details");
              alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
              alert("your bill is: " + newTotal.finalTotal());
          }
      }

  });




  //sending message function
//   $('form#contactForm').submit(function (event) {
//       event.preventDefault();
//       var name = $('#name').val();
//       var pass = $('#email').val();
//       var mess = $('#mess').val();
//       alert("Hi " + name + " we have received your message and we will get in touch. Thank you for contacting us.");
//   });


// });