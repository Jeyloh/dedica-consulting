

'use strict';


//  .component('myApp.header', {
//      templateUrl: 'components/header/headerView.html',
//      controller: 'HeaderController',
//      bindings: "="
// })

myApp
    .controller('FormController', ['$scope', function($scope) {

        $scope.displayForm = function() {
            console.log("clicked");
            var form = document.getElementById("engage-form-id");

            if (form.style.visibility == "hidden") {
                form.style.visibility = "visible";
            } else {
                form.style.visibility = "hidden";
            }
        }

    }]);