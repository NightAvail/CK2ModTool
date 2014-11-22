define(function(require) { // jshint ignore:line
    'use strict';

    var $ = require('jquery');

    var ProjectView = require('./views/projectView');
    var ProjectService = require('./../services/projectService');

    /**
     * The new project component class.
     *
     * @class ProjectComponent
     * @param {jQuery<HTMLObject>} $element
     * @constructor
     */
    var ProjectComponent = function($element) {
        /**
         * The DOM element the component is attached too.
         *
         * @property $element
         * @type jQuery<HTMLObject>
         */
        this.$element = $element;

        /**
         * Flag that checks whether or not this component
         * is currently enabled.
         *
         * @property isEnabled
         * @type Boolean
         */
        this.isEnabled = false;

        this.init();
    };

    var proto = ProjectComponent.prototype;

    /**
     * Initializes all the view. This method should setup all
     * event handlers, children and layout manipulations. Once
     * everything has been setup it will promptly enable the
     * component.
     *
     * @method init
     * @chainable
     * @private
     */
    proto.init = function() {
        this.setupEventHandlers()
            .setupChildren()
            .setupLayout()
            .enable();

        return this;
    };

    /**
     * Links up the handlers to their events.
     *
     * @method setupEventHandlers
     * @chainable
     * @private
     */
    proto.setupEventHandlers = function() {
        this.newProjectEventHandler = this.onNewProjectEvent.bind(this);

        return this;
    };

    /**
     * Creates/assigns the children objects
     * of the component.
     *
     * @method setupChildren
     * @chainable
     * @private
     */
    proto.setupChildren = function() {
        this.$window = $(window);
        this.projectService = new ProjectService();

        return this;
    };

    /**
     * Removes the children objects of the component.
     *
     * @method removeChildren
     * @chainable
     * @private
     */
    proto.removeChildren = function() {
        return this;
    };

    /**
     * Handles any manipulate of the component element.
     *
     * @method setupLayout
     * @chainable
     * @private
     */
    proto.setupLayout = function() {
        return this;
    };

    /**
     * Enables the component and all of the events.
     *
     * @method enable
     * @chainable
     * @private
     */
    proto.enable = function() {
        if (this.isEnabled) {
            return this;
        }

        this.$window.on('newProject', this.newProjectEventHandler);

        this.isEnabled = true;
        return this;
    };

    /**
     * Disables the component and all events associated
     * with the component.
     *
     * @method disable
     * @chainable
     * @private
     */
    proto.disable = function() {
        if (!this.isEnabled) {
            return this;
        }

        this.$window.off('newProject', this.newProjectEventHandler);

        this.isEnabled = false;
        return this;
    };

    /**
     * Disables/removes all children objects created/assigned
     * by the component.
     *
     * @method destroy
     * @chainable
     * @private
     */
    proto.destroy = function() {
        return this;
    };

    ///////////////////////////////////////////////////////////////////////////
    // EVENTS
    ///////////////////////////////////////////////////////////////////////////

    /**
     * Handles a new project event.
     *
     * @method onNewProjectEvent
     */
    proto.onNewProjectEvent = function() {
        var projectName = $('input.projectName').val();

        if (projectName != null) {
            this.projectService.newProject();
        } else {
            // dialog.message('Cannot create a project without a project name');
        }
    };

    ///////////////////////////////////////////////////////////////////////////
    // HELPERS
    ///////////////////////////////////////////////////////////////////////////

    return ProjectComponent;
});
