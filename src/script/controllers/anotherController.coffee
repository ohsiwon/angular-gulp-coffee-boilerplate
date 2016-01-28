'strict'
AnotherController = ()->
  vm = @
  constructor = () ->    
    vm.message = 'This is a just another'

  constructor()
  return  

AnotherController.$inject = []
angular.module 'myApp'
  .controller 'AnotherController', AnotherController