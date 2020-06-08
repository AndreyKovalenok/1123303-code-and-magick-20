'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var elementsList = setup.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('div');

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

var createWizardObject = function (names, secondNames, coatColors, eyesColors) {
  var name = names[getRandomNumber(names.length)];
  var secondName = secondNames[getRandomNumber(secondNames.length)];
  var coatColor = coatColors[getRandomNumber(coatColors.length)];
  var eyesColor = eyesColors[getRandomNumber(eyesColors.length)];

  return {
    name: name + ' ' + secondName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
};

var persons = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  persons.push(createWizardObject(NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS));
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

elementsList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
