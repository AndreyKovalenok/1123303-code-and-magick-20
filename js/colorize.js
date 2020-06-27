'use strict';
(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomColor = function (paintableОbject) {
    switch (paintableОbject) {
      case 'coat':
        return COAT_COLORS[window.utils.getRandomNumber(COAT_COLORS.length - 1)];
      case 'eyes':
        return EYES_COLORS[window.utils.getRandomNumber(EYES_COLORS.length - 1)];
      case 'fireball':
        return FIREBALL_COLORS[window.utils.getRandomNumber(FIREBALL_COLORS.length - 1)];
      default:
        return '#000000';
    }
  };

  var setWizardAttributesColors = function (object, attribute, hiddenInput, func) {
    var color = getRandomColor(object);
    if (object === 'fireball') {
      attribute.style.background = color;
      hiddenInput.value = color;
    } else {
      attribute.style.fill = color;
      hiddenInput.value = color;
      func(color);
    }
  };

  window.colorize = {
    getRandomColor: getRandomColor,
    setWizardAttributesColors: setWizardAttributesColors,
  };

})();
