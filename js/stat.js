'use strict';
(function () {

  var FONT_FAMILY = 'PT Mono';
  var FONT_SIZE = '16px';
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var PADDING = 30;
  var FONT_GAP = 16;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;

  var renderText = function (ctx, text, fontFamily, fontSize, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = fontSize + fontFamily;
    ctx.textBaseline = 'heading';
    ctx.fillText(text, x, y);
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx, 'Ура вы победили!', FONT_FAMILY, FONT_SIZE, CLOUD_X + PADDING, CLOUD_Y + PADDING, '#000');
    renderText(ctx, 'Список результатов:', FONT_FAMILY, FONT_SIZE, CLOUD_X + PADDING, CLOUD_Y + PADDING + FONT_GAP, '#000');

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var x = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;
      var y = CLOUD_Y + CLOUD_HEIGHT - PADDING - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime;
      renderText(ctx, players[i], FONT_FAMILY, FONT_SIZE, x, CLOUD_Y + CLOUD_HEIGHT - PADDING, '#000');
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var saturationPercent = (Math.floor(Math.random() * 99) + 1);
        ctx.fillStyle = 'hsl(240,' + saturationPercent + '%' + ',50%)';
      }
      ctx.fillRect(x, y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      renderText(ctx, Math.round(times[i]), FONT_FAMILY, FONT_SIZE, x, y - GAP, '#000');
    }
  };

})();

