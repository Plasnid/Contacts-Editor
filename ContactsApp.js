var app = angular.module('ContactsApp',["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "templates/contactHome.html",
    controller:"ContactsController"
  })
  .otherwise({
  	redirectTo: "/"
  });
});
