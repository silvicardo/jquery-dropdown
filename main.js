//dropdown.main.js

console.log('Hello from main.js');

//gestisce il primo livello
$('.dropdown_link_area.first_level').mouseenter(function() {

  $('.dropdown_menu').removeClass('active');
  $(this).children('.dropdown_menu').addClass('active');
});

$('.dropdown_link_area.first_level').mouseleave(function() {

  $('.dropdown_menu').removeClass('active');
});

//gestisce il secondo livello
$('.dropdown_link_area.second_level').mouseenter(function() {

  $('.dropdown_menu.second_level').removeClass('active');
  $(this).children('.dropdown_menu.second_level').addClass('active');

});

$('.dropdown_link_area.second_level').mouseleave(function() {

  $('.dropdown_menu.second_level').removeClass('active');
});
