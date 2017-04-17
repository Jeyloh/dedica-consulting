'use strict';


//  .component('myApp.header', {
//      templateUrl: 'components/header/headerView.html',
//      controller: 'HeaderController',
//      bindings: "="
// })

myApp
    .controller('HeaderController', ['$scope', function($scope) {

    console.log("From header controller");
     $scope.data = {
         title: "Jørgen Lybeck Hansen",
         menuBtn1: "Angular menu 1",
         menuBtn2: "Angular menu 2",

         subjects:[
             {name:'Physics',marks:70}
         ],
         logShit: function() {
             console.log('shit');
         },
         someFunc: function() {
             var object;
             object = $scope.data;
             return object.menuBtn1 + " " + object.menuBtn2;
         },

     };
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