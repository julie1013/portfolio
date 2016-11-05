'use strict';

$(document).ready(function () {
  require('./router/index').start();
  require('./router/events').registerPaths();
});
