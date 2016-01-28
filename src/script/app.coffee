'strict'
angular.module('myApp', [
  'ngRoute'
  ])
  
  # Some config
  .config ($routeProvider) ->
    # Simple router setup
    $routeProvider
      .when('/', {
        controller: 'HomeController as vm'
        templateUrl: './views/home.html'
      })
      .when('/sample', {
        controller: 'AnotherController as vm'
        templateUrl: './views/another.html'
      })
      .otherwise('/')

  # Some run
  .run ($route, $templateCache, $http) ->
    # Preload templates 
    for i, route of $route.routes
      if url = route.templateUrl
        $http.get url, { cache: $templateCache }