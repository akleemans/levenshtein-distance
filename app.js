angular.module('LevenshteinApp', [])
.controller('LevenshteinCtrl', ['$scope', function($scope) {
    $scope.word = "";

    $scope.word1 = "google";
    $scope.word2 = "doodle";

    $scope.lev_matrix = function() {
        var cost;

        var d = new Array();
        for (var i = 0; i <= s.length; i++) {
          var temp = new Array();
          for (var j = 0; j <= t.length; j++) {
            temp.push(0);
          }
          d.push(temp);
        }

        for (var i = 0; i <= s.length; ++i) d[i][0] = i;
        for (var i = 0; i <= t.length; ++i) d[0][i] = i;

        for (var i = 1; i <= s.length; ++i) {
             for (var j = 1; j <= t.length; ++j) {
                 // TODO choose shortest path
                 // something like min(d[i][j-1]+1, d[i-1][j-1]+cost)
                 d[i][j] = 0;
             }
        }
        return d;

    };

    // execute on startup
    $scope.lev_matrix();

}]);
