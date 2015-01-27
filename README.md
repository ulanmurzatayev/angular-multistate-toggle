# Angular multi state toggle
This is a small directive created to solve an issue when a simple two state
toggle is not enough.

##Usage:
    <button multistate-toggle="['disabled', 'included', 'excluded']" ng-model="finished">
        <span>Finished</span> <i class="status-icon"></i>
    </button>
