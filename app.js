var app = angular.module("connoisseur", ["ngRoute"]);

app.config(function ($routeProvider) {

    // Home Page Route
    $routeProvider.when("/home", {
        templateUrl: "/index.html"
    });

    // Shoes Route (Products)
    $routeProvider.when("/shoes", {
        templateUrl: "/templates/products.html"
    });

    // Contact Route
    $routeProvider.when("/contact", {
        controller: "ContactController",
        templateUrl: "/templates/contact.html"
    });
});

app.controller("IntroductionController", function ($scope) {
    $scope.message = "Welcome to Connoisseur!"
});

app.controller("ContactController", function ($scope) {
    $scope.phoneNumbers = ["(012) 333 4444", "(011) 222 5555"];
    $scope.emailAddresses = {
        events: "events@shoebox.co.za",
        feedback: "feedback@shoebox.co.za",
        general: "info@shoebox.co.za"
    }
});

var num = phoneNumbers[i];
var email = emailAddresses[i]