define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    require('bind-polyfill');

    var $ = require('jquery');
    var ProjectComponent = require('./components/project/projectComponent');

    /**
     * The App class acts as the core bootstrap class for
     * starting up the different modules available to the
     * application.
     *
     * @class App
     * @constructor
     */
    var App = function() {
        /**
         * The components of the application.
         *
         * @property components
         * @type {object}
         */
        this.components = {};

        // Initialize our application.
        this.init();
    };

    var proto = App.prototype;

    /**
     * Initialize the application.
     *
     * @method init
     * @returns {App}
     * @private
     */
    proto.init = function() {
        this.setupChildren();

        return this;
    };

    /**
     * Creates/assigns the children objects
     * of the application.
     *
     * @method setupChildren
     * @returns {App}
     * @private
     */
    proto.setupChildren = function() {
        var $element = $('.app-view');
        this.addComponent('ProjectComponent', new ProjectComponent($element));
        return this;
    };

    ///////////////////////////////////////////////////////////////////////////
    // HELPERS
    ///////////////////////////////////////////////////////////////////////////

    /**
     * Adds a view to the application.
     *
     * @method addComponent
     * @params {String} componentName
     * @params {Object} component
     * @returns {App}
     */
    proto.addComponent = function(componentName, component) {
        if (this.components[componentName] != null) {
            component = null;
            return this;
        }

        this.components[componentName] = component;
        return this;
    };

    return App;
});
