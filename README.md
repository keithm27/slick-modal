# slick-modal
Simple centered and animated AngularJS modal dialogs which use animate.css for animations.

## Demo
- Demo available here: (http://keithmckiernan.github.io/slick-modal)

## Requirements
- [AngularJS](https://angularjs.org/)
- [Animate.css](https://daneden.github.io/animate.css/)

## Usage

- Get the latest version of animate.css

- Load the following scripts into your application

```html
<script type="text/javascript" src="src/slickModal.js"></script>
```

- Load the following stylesheets into your application

```html
<link rel="stylesheet" type="text/css" href="src/slickModal.css">
<link rel="stylesheet" type="text/css" href="../animate.min.css">
```

> app.js

```javascript
angular.module('myApp', ['slick.modal'])

.controller('MainController', function ($scope) {
  $scope.showModal = function() {
    $scope.modalOpen = !$scope.modalOpen;
  };
});
```

> index.html

```html
<div ng-app="myApp" ng-controller="MainController">
  <button type="button" ng-click="showModal()">Show Modal</button>
  <slick-modal show="modalOpen" sm-id="modal-1" sm-width="50%" sm-height="50%" sm-animation-in="bounceIn" sm-animation-out="bounceOut" sm-speed="0.6s">
    <div>Content goes here</div>
  </slick-modal>
</div>
```

- If you wish to override the styles of a particular modal, apply styles to the sm-id.

> styles.css

```css
#modal-1 {
  background-color: #4996CC;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
```

## Options
```
show (required)               -     Boolean - true (modal open) / false (modal closed).
close (optional)              -     Can be used to close the modal from another close button and keep the animations.

sm-id (required)              -     The id of the modal, can be used to override styles on a specific modal.
sm-width (optional)           -     The width of the modal (defaults to 400px).
sm-height (optional)          -     The height of the modal (defaults to 400px).
sm-speed (optional)           -     The speed of the animation (defaults to 400ms/0.4s), use as follows sm-speed="0.4s".
sm-animation-in (optional)    -     The animation used when the modal enters the screen, animations used are from animate.css.
sm-animation-out (optional)   -     The animation used when the modal is closed, animations used are from animate.css.
```
