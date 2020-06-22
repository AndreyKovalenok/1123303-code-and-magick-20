'use strict';
(function () {

  var similar = document.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('div');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.initialData.wizards; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };


  window.backend.load(successHandler, window.utils.errorHandler);

})();
