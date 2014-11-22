define(function(require) {
    'use strict';

    var ProjectModel = require('./../models/projectModel');

    /**
     * Handles creating an instance of a project.
     *
     * @class ProjectFactory
     * @constructor
     */
    var ProjectFactory = function() {
    };
    var proto = ProjectFactory.prototype;

    /**
     * Returns a new instance of the project
     * service.
     *
     * @method createProject
     * @chainable
     */
    proto.createProject = function(projectName) {
        var projectModel = new ProjectModel();
        return projectModel;
    };

    return ProjectFactory;
});
