//Declare the Connoisseur app with AngularJS
var app = angular.module("connoisseur", ["ngRoute"]);

//Route Function (Provider)
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

    // About Us Route
    $routeProvider.when("/about", {
        title: "About",
        controller: "AboutUsController",
        templateUrl: "templates/about-us.html"
    });
});

//Function to change Title (Extra AngularJS trick)
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
});

//Home Controller
app.controller("HomeController", function ($scope) {
    $scope.headerHome = "./templates/components/header-home.html";
    $scope.footer = "./templates/components/footer.html";
});

//About Us Controller
app.controller("AboutUsController", function ($scope) {
    $scope.headerAboutUs = "./templates/components/header-about-us.html";
    $scope.footer = "./templates/components/footer.html";
    $scope.feedbacks = feedBackArray;

    $scope.required = true;

    $scope.formdata = {
        category: "",
        rating: "",
        email: "",
        content: ""
    }

    $scope.addFeedback = function(form) {
        $scope.feedbacks.push({category: $scope.formdata.category, rating: $scope.formdata.rating, email: $scope.formdata.email, content: $scope.formdata.content });
    };

});

//Products Controller
app.controller("ProductsController", function ($scope) {
    $scope.headerProducts = "./templates/components/header-products.html";
    $scope.shoes = shoesArray;
    $scope.footer = "./templates/components/footer.html";
});

//Contact Controller
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

//Variables for Phone Numbers and Email Addresses
var num = phoneNumbers[i];
var email = emailAddresses[i];