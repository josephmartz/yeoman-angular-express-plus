'use strict';

angular.module( 'yoAngularExpressTestApp' )
    .controller( 'MainCtrl', [ '$scope', 'socket', function( $scope, socket ) {

        $scope.awesomeClientThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'jQuery',
            'UI-Bootstrap',
            'Font-Awesome',
            'Modernizr',
            'lodash',
        ];

        $scope.awesomeServerThings = [
            'Express',
            'Hogan',
            'Socket.io'
        ];

        $scope.isCollapsed = true;

        $scope.collapseText = 'Open';

        $scope.collapseIcon = 'icon-chevron-down';

        $scope.collapse = function() {
            $scope.isCollapsed = !$scope.isCollapsed;

            if ($scope.isCollapsed) {
                $scope.collapseText = 'Open';
                $scope.collapseIcon = 'icon-chevron-down';
            } else {
                $scope.collapseText = 'Close';
                $scope.collapseIcon = 'icon-chevron-up';
            }
        };

        $scope.connectedClass = 'icon-remove';
        $scope.connected = 'Not Connected to Server';

        socket.on( 'send:onConnect', function( data ) {
            $scope.connected = data.data;
            $scope.connectedClass = 'icon-link';
        } );

    }]);
