$(document.body).fadeIn(1000);
$(document).ready(function() {
 
  $('.owl-carousel').owlCarousel({
    margin          :   0,
    nav             :   true,
    items           :   1,
    loop            :   true,
    mouseDrag       :   false,
    slideBy         :   1,
    animateInClass  :   'fadeIn',
    animateOut      :   'fadeOut',
    navText         :   '<>',
  });

});