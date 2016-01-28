'strict'
myDirective = (logService)->

  link = (scope, element, attrs, ctrl)->
    vm = scope
    constructor = () =>
      vm.name = 'Directive'

    # Do somthing

    constructor()
    return

  template = [
    '<div style="padding:10px;border:1px solid">'
    '<h4>And {{message | lowercase}} {{name}}</h4>'
    '</div>'
  ].join('')
  
  directive =
      link: link
      scope:
        message : '=data'
      restrict: 'EA'
      template: template

myDirective.$inject = ['logService']
angular.module 'myApp'
  .directive 'myDirective', myDirective