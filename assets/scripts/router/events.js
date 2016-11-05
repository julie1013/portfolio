'use strict';

const router = require('./index');

const routes = router.rootNode.children.map(function(route) {
  return route.name;
});

const registerPaths = function() {
  routes.forEach(function(route) {
    $(`a[href="#${route}"]`).on('click', (event) => {
      event.preventDefault();

      router.navigate(route);
    });
  });
};

module.exports = {
  registerPaths,
};
