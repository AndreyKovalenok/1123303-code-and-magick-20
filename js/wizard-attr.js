'use strict';
(function () {

  var setup = document.querySelector('.setup');

  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var coatInput = setup.querySelector('input[name = "coat-color"]');
  var eyesInput = setup.querySelector('input[name = "eyes-color"]');
  var fireballInput = setup.querySelector('input[name = "fireball-color"]');

  setupWizardCoat.addEventListener('click', function () {
    window.colorize.setWizardAttributesColors('coat', setupWizardCoat, coatInput, window.wizards.onCoatChange);
  });

  setupWizardEyes.addEventListener('click', function () {
    window.colorize.setWizardAttributesColors('eyes', setupWizardEyes, eyesInput, window.wizards.onEyesChange);
  });

  fireball.addEventListener('click', function () {
    window.colorize.setWizardAttributesColors('fireball', fireball, fireballInput);
  });

})();
