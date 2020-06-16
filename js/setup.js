'use strict';

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupOpenIcon = setupOpenButton.querySelector('.setup-open-icon');
var setupCloseButton = setup.querySelector('.setup-close');
var setupNameInput = setup.querySelector('.setup-user-name');

var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var coatInput = setup.querySelector('input[name = "coat-color"]');
var eyesInput = setup.querySelector('input[name = "eyes-color"]');
var fireballInput = setup.querySelector('input[name = "fireball-color"]');

var elementsList = setup.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('div');

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

var createWizardObject = function (names, secondNames, coatColors, eyesColors) {
  var name = names[getRandomNumber(names.length - 1)];
  var secondName = secondNames[getRandomNumber(secondNames.length - 1)];
  var coatColor = coatColors[getRandomNumber(coatColors.length - 1)];
  var eyesColor = eyesColors[getRandomNumber(eyesColors.length - 1)];

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

var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
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

var onPopupEscPress = function (evt) {
  if ((evt.keyCode === 27) && (evt.target !== setupNameInput)) {
    evt.preventDefault();
    closePopup();

    document.removeEventListener('keydown', onPopupEscPress);
  }
};

var setWizardAttributesColors = function (colorsArray, attribute, hiddenInput) {
  var color = colorsArray[getRandomNumber(colorsArray.length - 1)];
  attribute.style.fill = color;
  hiddenInput.value = color;
};

setupWizardCoat.addEventListener('click', function () {
  setWizardAttributesColors(COAT_COLORS, setupWizardCoat, coatInput);
});

setupWizardEyes.addEventListener('click', function () {
  setWizardAttributesColors(EYES_COLORS, setupWizardEyes, eyesInput);
});

fireball.addEventListener('click', function () {
  var color = FIREBALL_COLORS[getRandomNumber(FIREBALL_COLORS.length - 1)];
  fireball.style.background = color;
  fireballInput.value = color;
});
