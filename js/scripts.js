// function PizzaOrder(size, crust, topping){
//   this.size = size;
//   this.crust = crust;
//   this.topping = topping;
// }

// PizzaOrder.prototype.fullOrder = function (){
//   return this.size + this.crust + this.topping;
// }

// function Total(size, crust, topping){
//   this.size = size;
//   this.crust = crust;
//   this.topping = topping;
// }

// Total.prototype.finalTotal = function (){
//   return this.size + this.crust + this.topping;
// }




// function PizzaOrder(pizzaCostTotality) {
//   this.checkoutCost = pizzaCostTotality;
// }

// PizzaOrder.prototype.fullOrder = function(){
//   return this.checkoutCost;
// }



// function deliveryMan() {
//   $(".delivery-address").show();
// }

// function deliveryMan(){
//   var location = (document.getElementById("location").value);
//   var estate = (document.getElementById("estate").value);

//   if (location.length === 0){
//     alert("enter a valid locaiton")
//   }else if (estate.length === 0){
//     alert("enter your estate")
//   }else{
//     alert("Your order will be delivered to " + location + " at " + estate + ".")
//   }}



$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pizzaSizeCost = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaCrustCost = parseInt($("#pizzaCrust option:selected").val());

    var pizzaToppingsCost1 = $.map($("input[name=toppings]:checked"), function(makeToppingsArray){return makeToppingsArray.value; })
    if (pizzaToppingsCost1.length === 0) {
      alert("You must select at least one topping");
    }
    var pizzaToppingsCost = pizzaToppingsCost1.map(Number);
    var pizzaToppingsCostSum = pizzaToppingsCost.reduce(function(a, b){return a+b;})



    // var deliveryOption = parseInt($("input:radio[name=delivery]:checked").val());
    // var deliveryOption = parseInt($("input:button[name=delivery]:onClick()").val());


  //   $('#deliveryYes').click(function() {
  //     alert(this.value));
  // });











    // //shows address slots
    // if($('input:radio[id="deliveryYes"]').is(":checked")){
    //   // $(".delivery-address").show();
    //   var location = (document.getElementById("location").value);
    //   var estate = (document.getElementById("estate").value);
    //   alert("Your order will be delivered to " + location + " at " + estate + ".")
    // }




    var pizzaCostTotal = pizzaSizeCost + pizzaCrustCost + pizzaToppingsCostSum 
    alert(pizzaCostTotal);     //+ deliveryOption;



    

    // var newPizzaOrder = new PizzaOrder(pizzaSizeCost, pizzaCrustCost, pizzaToppingsCostSum)



    // alert(newPizzaOrder.fullOrder())


    // var newTotalCost = new Total(pizzaSizeCost, pizzaCrustCost, pizzaToppingsCostSum)

    // alert(newTotalCost.finalTotal())




    
    



    // $("ul#pizzaOrderFinal").append("<li><span class='pizza-total-class'>" + newPizzaOrder.fullOrder() + "</span></li>");


    $("ul#pizzaOrderFinal").append("<li><span class='pizza-total-class'>" + pizzaCostTotal + "</span></li>");





    // var plswork = + document.getElementById('pizzaOrderFinal');
    // alert(plswork)


    // var pizzaToppingsCost1 = $.map($("input[name=toppings]:checked"), function(makeToppingsArray){return makeToppingsArray.value; })

   
    //$('#pizzaForm')[0].reset();




    // $(".pizza-total-class").last().click(function() {
    //   $("#pizza-order").show();
    //   $("#pizza-order h2").text(newPizzaOrder.checkoutCost);
    //   $(".pizza-order-final").text(newPizzaOrder.checkoutCost);
    // });  

    
   
    
  })
  
 })






   



































// function Address(street, city, county) {
//   this.street = street;
//   this.city = city;
//   this.county = county;
// }

// Contact.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// }
// Address.prototype.fullAddress = function () {
//   return this.street + ", " + this.city + ", " + this.county;
// }


// $(document).ready(function () {
//   $("#add-address").click(function () {
//     $("#new-addresses").append('<div class="new-address">' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-street">Street</label>' +
//                                    '<input type="text" class="form-control new-street">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-city">City</label>' +
//                                    '<input type="text" class="form-control new-city">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-county">County</label>' +
//                                    '<input type="text" class="form-control new-county">' +
//                                  '</div>' +
//                                '</div>');
//   });
// // });

// // $(document).ready(function () {
//   $("form#new-contact").submit(function (event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();

//     var newContact = new Contact(inputtedFirstName, inputtedLastName);

//     $(".new-address").each(function () {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedCounty = $(this).find("input.new-county").val();
//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
//       newContact.addresses.push(newAddress);
//     });

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//     $(".contact").last().click(function () {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function (address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });

//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-county").val("");


//   });

// });









    // var pizzaToppingsCost = parseInt($("input[name=toppings]:checked").val());
// var pizzaCrustCost = $("input:radio[name=pizzaCrust]:checked").val()
    // var pizzaToppingsCost = $("input:radio[name=topping]:checked").val()

    // if($('input:radio[name="delivery"]').is(":checked")){
    //   function(){
    //       if (this.checked && this.value == '150') {
              // note that, as per comments, the 'changed'
              // <input> will *always* be checked, as the change
              // event only fires on checking an <input>, not
              // on un-checking it.
              // alert("bababouee")
              // $(".delivery-address").show();

              // append goes here
      //     }
      // });