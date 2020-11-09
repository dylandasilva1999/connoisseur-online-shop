//Declare the Connoisseur app with AngularJS
var app = angular.module("connoisseur", ["ngRoute", "ngCookies"]);

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

    // Product Route
    $routeProvider.when("/shoe/:id", {
        title: "Shoe",
        controller: "ProductsController",
        templateUrl: "templates/individual-product.html"
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

    // Cart Page
    $routeProvider.when("/cart", {
        title: "Cart",
        controller: "CartController",
        templateUrl: "templates/cart.html"
    });
});

app.factory("MenuService", function($http) {
    var service = {};
    
    service.data = {
        border: [],
        errorMessage: null
    };

    service.getBorder = function() {

        var configuration = {
            method: "GET",
            url: "http://127.0.0.1:5500/httpRequest.html"
        };

        $http(configuration).then(function(response) {
            service.data.border = response.data;
        }, function(error) {
            service.data.errorMessage = error.status + ": " + error.statusText;
        });

    };

    return service;
});

app.controller('CartController', ['$scope', '$cookies', function($scope, $cookies){
	
    $scope.shoes = shoesArray;
    $scope.cart = [];
    $scope.total = 0;

    console.log($scope.cart)
    
    // if ($cookies.get('cart') !== null) {
    //     $scope.cart = $cookies.get('cart');
    // }
    
    if(!angular.isUndefined($cookies.get('total'))){
      $scope.total = parseFloat($cookies.get('total'));
    }

    if (!angular.isUndefined($cookies.get('cart'))) {
        $scope.cart = $cookies.getObject('cart');
    }
    
    $scope.addItemToCart = function(shoe){
      
        if ($scope.cart.length === 0){
            shoe.count = 1;
            $scope.cart.push(shoe);
        } else {
            var repeat = false;
            for(var i = 0; i< $scope.cart.length; i++){
                if($scope.cart[i].id === shoe.id){
                    repeat = true;
                    $scope.cart[i].count +=1;
                }
            }
            if (!repeat) {
                shoe.count = 1;
                $scope.cart.push(shoe);	
            }
        }

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);

        $cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
        
        $scope.cart = $cookies.getObject('cart');
     
        $scope.total += parseFloat(shoe.price);

        $cookies.put('total', $scope.total,  {'expires': expireDate});
    };
    

    $scope.removeItemCart = function(shoe){
       
        if(shoe.count > 1){
            shoe.count -= 1;
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
            $scope.cart = $cookies.getObject('cart');
        }
        else if(shoe.count === 1){
            var index = $scope.cart.indexOf(shoe);
            $scope.cart.splice(index, 1);

            expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);

            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});

            $scope.cart = $cookies.getObject('cart'); 
        }
       
        $scope.total -= parseFloat(shoe.price);
        $cookies.put('total', $scope.total,  {'expires': expireDate});
       
    };

}]);

//Function to change Title (Extra AngularJS trick)
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
});

//Home Controller
app.controller("HomeController", function ($scope, $http) {
    $scope.headerHome = "./templates/components/header-home.html";
    $scope.footer = "./templates/components/footer.html";

    $scope.liveTime
    $scope.errorMessage = null;

    var configuration = {
        method: "GET",
        url: ""
    }

    $http(configuration).then(function(response) {
        $scope
    }, function(error) {
        $scope.errorMessage = error.status + ": " + error.statusText;
    });
});

//About Us Controller
app.controller("AboutUsController", function ($scope) {
    $scope.headerAboutUs = "./templates/components/header-about-us.html";
    $scope.footer = "./templates/components/footer.html";
    $scope.feedbacks = feedBackArray;

    $scope.required = true;

    $scope.starRatingWithinRange = function(index) {
        return (index <= parseInt($scope.formdata.starRating));
    };

    $scope.formdata = {
        category: "",
        rating: "",
        email: "",
        content: ""
    }

    // $scope.addFeedback = function(form) {
    //     $scope.feedbacks.push({category: $scope.formdata.category, rating: $scope.formdata.rating, email: $scope.formdata.email, content: $scope.formdata.content });
    // };

    // $scope.border = [];
    // $scope.errorMessage = null;

    // var configuration = {
    //     method: "GET",
    //     url: "https://httprequest.tiiny.site/"
    // };

    // $http(configuration).then(function(response) {
    //     $scope.border = response.data;
    // }, function(error) {
    //     $scope.errorMessage = error.status + ": " + error.statusText;
    // });

});

//Products Controller
app.controller("ProductsController", function ($scope) {
    $scope.headerProducts = "./templates/components/header-products.html";
    $scope.headerSelectedProduct = "./templates/components/header-individual-product.html";
    $scope.shoes = shoesArray;
    $scope.footer = "./templates/components/footer.html";

    $scope.productClicked = function(event) {
        console.log("hello" + event.target.id);
    }
});


//Individual Product Controller
app.controller("SelectedProductController", function ($scope, $routeParams) {
    $scope.headerSelectedProduct = "./templates/components/header-individual-product.html";
    $scope.footer = "./templates/components/footer.html";

    $scope.shoeDetail = findProduct($routeParams.id); 
    console.log($routeParams.id);
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