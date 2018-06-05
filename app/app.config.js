"use strict"

angular.module("app")
    .config([ "$stateProvider", "$urlRouterProvider", 
        function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise("/common/home")

            $stateProvider
                            .state("common",{
                                url: "/common",
                                templateUrl: "/app/view/templates/common.html",
                                abstract: true
                            })
                            .state("common.home",{
                                url: "/home",
                                templateUrl: "/app/view/templates/home.html"
                            })
                            .state("common.categories",{
                                url: "/categories",
                                templateUrl: "/app/view/templates/categories.html"
                            })
                            .state("common.contacts",{
                                url: "/contacts",
                                templateUrl: "/app/view/templates/contacts.html"
                            })
                            .state("common.product",{
                                url: "/product",
                                templateUrl: "/app/view/templates/product.html"
                            })
        } ]);