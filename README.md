# Angular multi state toggle
This is a small directive created to solve an issue when a simple two state
toggle is not enough.

###Installation
1. Download this module using bower:
```shell
bower install angular-multistate-toggle
```
2. Register the module in your app
```js
angular.module('myModule', 'angular-multistate-toggle')
```


###Usage:
```html
<button multistate-toggle="['disabled', 'included', 'excluded']" ng-model="finished">
    <span>Finished</span> <i class="status-icon"></i>
</button>
```
