 var config = {
    apiKey: "AIzaSyAORALAN1OvNi6_g97lQ42kQEcM8iJ4xHE",
    authDomain: "fullstart-26e5a.firebaseapp.com",
    databaseURL: "https://fullstart-26e5a.firebaseio.com",
    projectId: "fullstart-26e5a",
    storageBucket: "fullstart-26e5a.appspot.com",
    messagingSenderId: "766951407146"
  };
  firebase.initializeApp(config);

angular.module('starter.controllers', [])

.controller("registro",function($scope){
  $scope.user={}
  $scope.valider= function(x){
    $scope.user= x;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };
})
.controller("registroCtrl",function($scope){

})

.controller("loginCtrl",function($scope){

})