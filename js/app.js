var paparrot = angular.module('paparrot', ['ui.bootstrap','ng-resource'])

    .factory('quotesService',['$resource',function($resource){

        return $resource('quotes.json');
    }
  ])
    .controller('QuotesCtrl', ['$scope', 'quotesService', function($scope, quotesService){

    $scope.quotes = quotesService.query('');

      $scope.addAlert = function() {
        $scope.quotes.push({msg: "Another alert!"});
      };

       $scope.closeAlert = function(index) {
         $scope.quotes.splice(index, 1);
       };

    }
   ]);