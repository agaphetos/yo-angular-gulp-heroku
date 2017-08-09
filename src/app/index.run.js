(function() {
  'use strict';

  angular
    .module('yo-angular-gulp-heroku')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
