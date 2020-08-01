function PizzaOrder(pizzaSize, pizzaCrust, toppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.toppings = toppings;
}


$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();


    // var pizzaCrustCost = $("input:radio[name=pizzaCrust]:checked").val()
    // var pizzaToppingsCost = $("input:radio[name=topping]:checked").val()



    


//this is the working initial code
    var pizzaSizeCost = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaCrustCost = parseInt($("#pizzaCrust option:selected").val());

    var pizzaToppingsCost1 = $.map($("input[name=toppings]:checked"), function(makeToppingsArray){return makeToppingsArray.value; })

    
    if (pizzaToppingsCost1.length === 0) {
      // event.preventDefault();
      alert("You must select at least one topping");
    }


    


    var pizzaToppingsCost = pizzaToppingsCost1.map(Number);
    var pizzaToppingsCostSum = pizzaToppingsCost.reduce(function(a, b){return a+b;})
    var pizzaCostTotal = pizzaSizeCost + pizzaCrustCost + pizzaToppingsCostSum;
    alert(pizzaCostTotal);



   


    
//ends here
// if (pizzaToppingsCost1.indexOf("pizzaToppingsCost1") < 0) {
//   event.preventDefault();
//   alert("You must select at least one topping");
// }






    // var pizzaCalc = new PizzaOrder(pizzaSizeCost, pizzaCrustCost, pizzaToppingsCost);

    // $("ul#pizzaOrderFinal").append("<li>" + pizzaCalc + "</li>");



    

    
    



   



    // var pizzaToppingsCost = (pizzaToppingsCost1);
    // var pizzaCostTotal = pizzaToppingsCost;
    // alert(pizzaCostTotal);



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
