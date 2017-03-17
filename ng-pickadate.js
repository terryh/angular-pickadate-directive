/*
 * angular-pickadate-directive v0.0.1
 * (c) 2014 Terru Huang http://blog.lifetaiwan.net
 * License: MIT
 */

'use strict';

angular.module('ng.pickadate', []).
  directive('pickAdate', [ '$parse',function($parse){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var ngModel = $parse(attrs.ngModel);
        element.pickadate({
          format: 'yyyy/mm/dd',
          onStart: function () {
            this.set('select', ngModel);
          },
          onSet: function(e){
            ngModel.assign(scope, this.get());
          }

        });
      }
    };

}]).
  directive('pickAtime', [ '$parse', function($parse){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var ngModel = $parse(attrs.ngModel);
        element.pickatime({
          onStart: function () {
            this.set('select', ngModel);
          },
          onSet: function(e){
            ngModel.assign(scope, this.get());
          }

        });
      }
    };

}]);

