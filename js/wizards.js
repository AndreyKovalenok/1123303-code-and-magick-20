'use strict';
(function () {

  var similar = document.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('div');

  var createWizardObject = function () {
    var name = window.initialData.getRandomName();
    var secondName = window.initialData.getRandomSecondName();
    var coatColor = window.colorize.getRandomColor('coat');
    var eyesColor = window.colorize.getRandomColor('eyes');

    return {
      name: name + ' ' + secondName,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  };

  var persons = [];
  for (var i = 0; i < window.initialData.wizards; i++) {
    persons.push(createWizardObject());
  }

  var renderWizard = function (person) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = person.name;
    wizardElement.querySelector('.wizard-coat').style.fill = person.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = person.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  persons.forEach(function (item) {
    fragment.appendChild(renderWizard(item));
  });

  similarList.appendChild(fragment);
  similar.classList.remove('hidden');

})();
