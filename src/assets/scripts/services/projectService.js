define(function(require) {
    'use strict';

    var $ = require('jquery');
    var ProjectFactory = require('./projectFactory');

    /**
     * Project service methods for creating/importing/saving/retrieving projects.
     *
     * @class ProjectService
     * @constructor
     */
    var ProjectService = function() {
    };
    var proto = ProjectService.prototype;

    /**
     * Create a new project for the user.
     *
     * @method newProject
     * @chainable
     */
    proto.newProject = function(projectName) {
        var deferred = new $.Deferred();
        var factory = new ProjectFactory();
        var projectModel = factory.createProject();

        // Let the server know we wish to create a new project.
        $.ajax({
            url: '/create-project',
            dataType: 'json',
            data: {
                'projectName': projectName
            }
        }).done(function(data) {
            projectModel.setId(data.id);

            // Save to localStorage (not to the server).
            projectModel.save();

            deferred.resolve();
        });

        deferred.promise().done = this.onTaskComplete.bind(this);

        return this;
    }

    /**
     * Saves the project to the server.
     *
     * @method saveProject
     * @chainable
     */
    proto.saveProject = function(id) {

    };

    ///////////////////////////////////////////////////////////////////////////
    // EVENTS
    ///////////////////////////////////////////////////////////////////////////

    /**
     * Handles the event when the task has been completed.
     *
     * @method onTaskComplete
     */
    proto.onTaskComplete = function() {
        $(window).trigger('projectCreated');
    };

    return ProjectService;
});
