//dropdown.main.js

console.log('Hello from main.js');

$('.dropdown_link_area').mouseenter(function(){

  console.log('ciao ho cliccato e non so scrivere codice');

  $('.dropdown_menu').removeClass('active');

  $(this).children('.dropdown_menu').addClass('active');

});


$('.dropdown_link_area').mouseleave(function(){
  $('.dropdown_menu').removeClass('active');
}
)
