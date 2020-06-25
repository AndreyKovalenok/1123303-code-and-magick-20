'use strict';
(function () {

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var setupOpenButton = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpenButton.querySelector('.setup-open-icon');
  var setupCloseButton = setup.querySelector('.setup-close');
  var setupNameInput = form.querySelector('.setup-user-name');


  var openPopup = function () {
    setup.classList.remove('hidden');
  };

  var closePopup = function () {
    setup.removeAttribute('style');
    setup.classList.add('hidden');
  };

  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === 27) && (evt.target !== setupNameInput)) {
      evt.preventDefault();
      closePopup();

      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  setupOpenButton.addEventListener('click', function () {
    openPopup();

    document.addEventListener('keydown', onPopupEscPress);
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();

      document.addEventListener('keydown', onPopupEscPress);
    }
  });

  setupCloseButton.addEventListener('click', function () {
    closePopup();

    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();

      document.removeEventListener('keydown', onPopupEscPress);
    }
  });

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.utils.errorHandler);
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);


})();
