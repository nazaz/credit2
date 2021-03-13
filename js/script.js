'use strict';


setTimeout(function () {
  $(".overlay").css("display", "block");
  $(".modal__close").click(function () {
    $(".overlay").fadeOut(1000);
  });
}, 20000);


// var companies = ['Ccloan', 'Miloan', 'CreditPlus', 'Credit7', 'Mazila', 'MoneyVeo', 'Швидкогроші'];

// function companiName() {
//   var randomI = Math.floor(Math.random() * companies.length);
//   var companiesSpan = $(".company_name_push").html(companies[randomI]);
// }

// $(document).ready(function () {
//   setInterval(companiName, 1000);
// });




// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;

// }
// let amount_random = (getRandomInt(5, 100));
// amount_random = amount_random * 100;
// $('.amount_push').text(amount_random);


// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// $('.days_push').text(getRandomInt(5, 18));
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function hideBlock(){
  $(".push_block").fadeOut();
}
 function fillRandom(){
   var companies = ['Ccloan', 'Miloan', 'CreditPlus', 'Credit7', 'Mazila', 'MoneyVeo', 'Швидкогроші'];
   let company_random = ( randomInteger(1, companies.length));
   let day_random = ( randomInteger(5, 15));
   let amount_random = ( randomInteger(5, 100));
   amount_random = amount_random * 100;
    
   $(".company_name_push").text(companies[company_random]);
   $(".amount_push").text(amount_random);
   $(".days_push").text(day_random);
   $(".push_block").fadeIn();
   setTimeout(hideBlock, 5000);
 }

 setInterval(fillRandom,12000);


