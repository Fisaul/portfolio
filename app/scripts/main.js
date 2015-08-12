// jshint devel:true
/*global $:true, WOW: true*/

'use strict';

var app = {

  // initailize
  init: function() {

    // Overlay menu controller
    var overlayMenuCtrl = function() {
      var
        content = $('#content'),
        contentClass = 'js-push-back',
        menuBtn = $('#menu-btn'),
        menuBtnState = 'js-is-on',
        menu = $('#menu'),
        menuState = 'js-is-open',
        menuLink = $('.nav a'),

        toggleMenu;

      toggleMenu = function() {
        app.toggleStateClass(menuBtn, menuBtnState, menu, menuState);
        content.toggleClass(contentClass);
      };

    // -------------Event handler ------------------//
      // Menu Button  handler
      menuBtn.on('click', function() {
        toggleMenu();
      });

      // List menu handler
      menuLink.on('click', function(e) {
        // prevent jumping to anchor when click
        e.preventDefault();

        var targetAnchor  = $($(this).attr('href'));

        toggleMenu();

        // Wait untill toggle memu is finished
        setTimeout(function() {
          app.smoothScroll(targetAnchor);
        }, 500);

      });

    };



    // Overlay menu init
    overlayMenuCtrl();
  },


  // toggle class to target
  // use on button component
  toggleStateClass: function(btnElem, btnState, targetElem, targetState) {
    btnElem.toggleClass(btnState);
    targetElem.toggleClass(targetState);
  },

  // Smooth scroll to anchor target
  smoothScroll: function(targetAnchor) {

    // console.log($($(this).attr('href')).offset().top);
    $('html, body').stop().animate({
      scrollTop: targetAnchor.offset().top
    }, 400);
    return false;
  }

};

$(document).ready(function() {

  app.init();

  // Owl carousel init
  $('.owl-carousel').owlCarousel({
    singleItem: true,
    pagination: false
  });

  // WOW animation init
  new WOW().init();

});
