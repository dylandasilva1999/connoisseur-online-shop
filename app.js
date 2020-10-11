var app = angular.module("connoisseur", ["ngRoute"]);

app.config(function ($routeProvider) {

    // Home Page Route
    $routeProvider.when("/home", {
        title: "Home",
        controller: "HomeController",
        templateUrl: "templates/home.html"
    });

    // Shoes Route (Products)
    $routeProvider.when("/shoes", {
        title: "Shoes",
        controller: "ProductsController",
        templateUrl: "templates/products.html"
    });

    // Contact Route
    $routeProvider.when("/contact", {
        title: "Contact",
        controller: "ContactController",
        templateUrl: "templates/contact.html"
    });
});

app.controller("HomeController", function ($scope) {
    $scope.headerHome = "./templates/components/header-home.html";
});

app.controller("ProductsController", function ($scope) {
    $scope.headerProducts = "./templates/components/header-products.html";
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