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

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
});

app.controller("HomeController", function ($scope) {
    $scope.headerHome = "./templates/components/header-home.html";
    $scope.footer = "./templates/components/footer.html";
});

app.controller("ProductsController", function ($scope) {
    $scope.headerProducts = "./templates/components/header-products.html";
    $scope.shoes = shoesArray;
    $scope.footer = "./templates/components/footer.html";
});

app.controller("ContactController", function ($scope) {
    $scope.phoneNumbers = ["(012) 567 8910", "(011) 654 2452"];
    $scope.emailAddresses = {
        Events: "events@connoisseur.co.za",
        Feedback: "feedback@connoisseur.co.za",
        General: "info@connoisseur.co.za"
    }

    $scope.headerContact = "./templates/components/header-contact.html";
    $scope.footer = "./templates/components/footer.html";
});

var num = phoneNumbers[i];
var email = emailAddresses[i];