'use strict';



//  .component('myApp.header', {
//      templateUrl: 'components/header/headerView.html',
//      controller: 'HeaderController',
//      bindings: "="
// })

myApp
    .controller('ArticleController', ['$scope', function($scope) {

        $scope.style = {
            articleColor: "grey",
            inverse: false,
            backgroundImage: "",
            depth: "lighten-1 z-depth-1",
        },
        $scope.content = {
            articleTitle: "Tittel",
            articleText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            articleImage: "Bilde",
        },
        $scope.condition = {
            articleType: 0,
        }
        console.log($scope.style);
        console.log($scope.content);
        console.log($scope.condition);


    }]);