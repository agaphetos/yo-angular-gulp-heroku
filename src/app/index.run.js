(function() {
  'use strict';

  angular
    .module('yoAngularGulpHeroku')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
