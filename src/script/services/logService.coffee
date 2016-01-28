'strict'
logService = () ->

  someval = []

  save : (data) ->
    someval.push data

  remove: (id) ->
    someval.splice(id, 1)

  print : () ->
    someval
    
angular.module 'myApp'
  .factory 'logService', logService