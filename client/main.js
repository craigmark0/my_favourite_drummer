var app = angular.module('myApp', ['ngRoute']);

//app.config('$routeProvider');

app.controller('ApiController', function($scope, $http, $sce){

    $scope.search = {};
    $scope.selectedDrummer;



    $scope.addDrummerModel = {};
    $scope.editDrummerModel = {};

    $scope.retrieveAll = function(){
      //console.log("submitted!");
      //console.log(this.formModel.name);

      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/drummers/test',
        dataType: 'json',
        contentType: 'application/json'
      }).then(function success(response) {
        console.log(response);

        $scope.fullList = response.data;
        //$scope.initDrummer = $scope.fullList[0].drummerName;
        //console.log(fullList[1].drummerName)


        // $scope.name = JSON.stringify(response.data.drummerName);
        // $scope.endorsment = JSON.stringify(response.data.drumEndorsment);
        // $scope.years = JSON.stringify(response.data.yearsOfPlaying);
        // $scope.band = JSON.stringify(response.data.currentBand);
      }, function error (response) {

      })
    };

    $scope.submitAddDrummerForm = function ( ) {
        console.log($scope.addDrummerModel);
        var DrummerToJSON = JSON.stringify($scope.addDrummerModel);
        console.log(DrummerToJSON);

        $http({
        method: 'POST',
        url: 'http://localhost:3000/api/drummer/new',
        dataType: 'json',
        data: DrummerToJSON,
        contentType: 'application/json'
      }).then(function success(response) {
        console.log(response);
        $scope.retrieveAll();

      }, function error (response) {
          console.log(response);
      })

      document.getElementById("addDrummer").reset();
    };

    $scope.selectDrummer = function (drummer) {

        $scope.selectedDrummer = drummer;
        $scope.updateYTSearch();
        //alert('working');

    }

    $scope.submitEditDrummerForm = function () {


      var name = document.querySelector('.selectedDrummer').innerHTML;
      //console.log(name);

      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/drummers/test',
        dataType: 'json',
        contentType: 'application/json'
      }).then(function success(response) {
        //console.log(response);

        $scope.fullList = response.data;

        $scope.fullList.forEach (function (object)
        {
          if (object.drummerName == name){
            $scope.editDrummerModel.id = object._id;
            var sendObject = $scope.editDrummerModel;
            var sendJSON = JSON.stringify(sendObject);

         $http({
            method: 'POST',
            url: 'http://localhost:3000/api/drummer/edit',
            dataType: 'json',
            data: sendJSON,
            contentType: 'application/json'
            }).then(function success(response) {
           // console.log(response);
            $scope.retrieveAll();

            }, function error (response) {
            console.log(response);
            });

          console.log(sendObject);

        }
          document.getElementById("editDrummer").reset();

        });



      // var updateToJSON = JSON.stringify($scope.editDrummerModel);
      //  $http({
      //   method: 'POST',
      //   url: 'http://localhost:3000/api/drummer',
      //   dataType: 'json',
      //   data: updateToJSON,
      //   contentType: 'application/json'
      // }).then(function success(response) {
      //   console.log(response);
      //   $scope.retrieveAll();

      // }, function error (response) {
      //     console.log(response);
      // })

        });
    };

    $scope.deleteDrummer = function(drummer) {
        var deleteID = {}
        deleteID.id = drummer._id;
        var idJSON = deleteID;
        console.log(idJSON);


        $http({
          method: 'DELETE',
          url: 'http://localhost:3000/api/drummer',
          data: idJSON,
          headers: {'Content-type': 'application/json;charset=utf-8'}
        }).then(function(response) {
            console.log(response.data);
            $scope.retrieveAll();
            }, function(rejection) {
            console.log(rejection.data);
          });


    }

    $scope.updateYTSearch = function (){
        $scope.movie = {src : $scope.selectedDrummer == undefined ? "https://www.youtube.com/embed?listType=search&list=Steve+Smith+drums" : "https://www.youtube.com/embed?listType=search&list=" + JSON.stringify($scope.selectedDrummer.drummerName) + " drums "};
        return $sce.trustAsResourceUrl($scope.movie.src);

      };



  //   $routeProvider {
  //   .when('/'{
  //     templateUrl : "http://www.youtube.com/?listType=search&list=' + selectedDrummer.drummerName + 'drums?autoplay=1&origin=http://example.com'}}", title:"$scope.selectedDrummer.drummerName"
  //   });
  //   // $scope.trustSrc = function(src) {
  //   //   return $sce.trustAsResourceUrl(src);
  //   // }
  //   //  $scope.movie = {src:"http://www.youtube.com/?listType=search&list=' + selectedDrummer.drummerName + drums + '?autoplay=1&origin=http://example.com'}}", title:"$scope.selectedDrummer.drummerName"};
  //  }

});
