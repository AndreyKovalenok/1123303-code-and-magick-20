'use strict';
(function () {

  var WIZARDS_COUNT = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getRandomName = function () {
    return NAMES[window.utils.getRandomNumber(NAMES.length - 1)];
  };
  var getRandomSecondName = function () {
    return SECOND_NAMES[window.utils.getRandomNumber(SECOND_NAMES.length - 1)];
  };

  window.initialData = {
    wizards: WIZARDS_COUNT,
    getRandomName: getRandomName,
    getRandomSecondName: getRandomSecondName
  };

})();
