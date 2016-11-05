'use strict';

let trigger = $('.hamburger'),
    overlay = $('.overlay'),
   isClosed = false;

const collapseSideBar = function() {
  overlay.hide();
  $('#wrapper').removeClass('toggled');
  if (isClosed === true) {
    overlay.hide();
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    isClosed = false;
  } else {
    overlay.show();
    trigger.removeClass('is-closed');
    trigger.addClass('is-open');
    isClosed = true;
  }
};

const hamburgerCross = function() {

  if (isClosed === true) {
    overlay.hide();
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    isClosed = false;
  } else {
    overlay.show();
    trigger.removeClass('is-closed');
    trigger.addClass('is-open');
    isClosed = true;
  }
};
trigger.click(function() {
  hamburgerCross();
});

$('[data-toggle="offcanvas"]').click(function() {
      $('#wrapper').toggleClass('toggled');
});

const transition = function() {
  return (toState, fromState, done) => {
    if (fromState) {
      collapseSideBar();
      $(`#${fromState.name}`).addClass('hidden');
    }

    $(`#${toState.name}`).removeClass('hidden');

    done();
  };
};

module.exports = {
  transition,
};
