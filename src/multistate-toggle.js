/* global angular */

(function () {
    'use strict';

    angular.module('angular-multistate-toggle',[])
        .directive('multistateToggle', function() {
            function Iterator(array){
                var current = -1;
                function next(){
                    current = (current < array.length - 1) ? ++current : 0;
                    return array[current];
                }

                return {
                    next: next
                };
            }

            return {
                restrict: 'A',
                scope: {
                    states: '=multistateToggle',
                    model: '=ngModel'
                },
                link: function postLink(scope, element) {
                    var iterator = new Iterator(scope.states);

                    if(!scope.model){
                        scope.model = iterator.next();
                    }

                    element.on('click', function(){
                        scope.$apply(function(){
                            scope.model = iterator.next();
                        });
                    });
                }
            };
        });
}());
