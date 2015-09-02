/*
 *  AngularJS Slick Modal - http://keithmckiernan.github.io/slick-modal
 *  Copyright 2015 - Keith McKiernan
 */

(function() {

  'use strict';

  angular.module("slick.modal", []).directive('slickModal', slickModal);

  function slickModal( $timeout ) {
    return {
      restrict: 'E',
      scope: {
        hideModal:      '=close',
        show:           '=',
        smId:           '@',
        smWidth:        '@',
        smHeight:       '@',
        smSpeed:        '@',
        smAnimationIn:  '@',
        smAnimationOut: '@'
      },
      replace: true,
      transclude: true,
      template:
      "<div class='slick-modal-overlay' ng-show='show'>" +
        "<div id='{{smId}}' class='slick-modal animated {{animation}}' ng-style='params'>" +
          "<div class='slick-modal-close' ng-click='hideModal()'></div>" +
          "<ng-transclude></ng-transclude>" +
        "</div>" +
      "</div>",
      link: function( $scope, el, attr ) {

        // Store all the data in the parameters object
        $scope.params = { };

        // Center the modal by getting the width / 2 and height / 2
        $scope.params.width  = $scope.smWidth;
        $scope.params.height = $scope.smHeight;

        // Set the animation duration
        $scope.params.animationDuration = $scope.smSpeed;

        // Set the timeout for the modal overlay to close..
        var timeoutSpeed = $scope.params.animationDuration.replace(/[^0-9.]/g,'') * 1000;

        // Set the initial animation on open of the modal
        $scope.animation = $scope.smAnimationIn;

        // Call this function to close the modal
        $scope.hideModal = function() {

          // On close set the animation to the animation-out
          $scope.animation = $scope.smAnimationOut;

          // Set a timout for the overlay to close
          $timeout(function() {

            // Set the modal show to false
            $scope.show = false;

            // Reset the animation to the animation-in property
            $scope.animation = $scope.smAnimationIn;

          }, timeoutSpeed - 100);
        }
      }
    };
  }

})();
