requirejs.config({
    paths: {
        // External libraries
        'angular': [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.4.14/angular.min',
            'lib/angular/angular'
        ],
        'angular-segmentio': [
            'lib/angular-segmentio/angular-segmentio'
        ],
        'angular-ui-router': [
            '//unpkg.com/angular-ui-router@0.3.1/release/angular-ui-router',
            'lib/angular-ui-router/release/angular-ui-router'
        ],
        'angular-uuid-service': [
            'lib/angular-uuid-service/angular-uuid-service'
        ],
        'angular-ui-bootstrap': [
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.5/ui-bootstrap-tpls.min',
            'lib/angular-bootstrap/ui-bootstrap-tpls.min'
        ],
        // testing
        'angular-mocks': 'lib/angular-mocks/angular-mocks',
        // Application references
        'templates-app': 'templates-app',
        'templates-common': 'templates-common'
    },

    shim: {
        // External libraries
        'angular': { 'exports': 'angular' },
        'angular-segmentio': { 'deps': ['angular'], 'exports': 'segmentio' },
        'angular-ui-bootstrap': { 'deps': ['angular'] },
        'angular-ui-router': { 'deps': ['angular'] },
        'angular-uuid-service': { 'deps': ['angular'], 'exports': 'uuid' },
        // testing
        'angular-mocks': { 'deps': ['angular'], 'exports': 'angular.mock' },
        // Each template to be included in tests should be included below.
        'templates-app': { 'deps': ['angular'] },
        'templates-common': { 'deps': ['angular'] }
    },
});
