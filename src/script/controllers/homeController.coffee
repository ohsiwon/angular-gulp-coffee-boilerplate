'strict'
HomeController = ($window, logService)->
  vm = @
  constructor = () =>
    vm.alert      = true
    vm.greet      = 'Howdy! You\'ve successfully launched this page.'
    vm.loggedName = logService.print()
    vm.hello      = hello
    vm.remove     = remove

  hello = () =>
    logService.save vm.name
    $window.alert(say() + ' ' + vm.name) if vm.alert
    vm.name = ''

  remove = (idx) ->
    logService.remove idx

  say = () ->
    'Hello'

  constructor()
  return  

HomeController.$inject = ['$window', 'logService']
angular.module 'myApp'
  .controller 'HomeController', HomeController