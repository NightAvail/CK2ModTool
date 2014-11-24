define(function(require) {
    'use strict';

    /**
     * Local representation of the project data.
     *
     * @class ProjectModel
     * @constructor
     */
    var ProjectModel = function() {
        /**
         * A alpha-numerical value representing the project id
         * on the server.
         *
         * @property id
         * @type {String}
         */
        this.id = '';
    };
    var proto = ProjectModel.prototype;

    /**
     * Saves all of the data to the localstorage as a
     * json object.
     *
     * @method save
     * @chainable
     */
    proto.save = function() {
        console.log('saving in progress');
        return this;
    };

    ///////////////////////////////////////////////////////////////////////////
    // GETTERS/SETTERS
    ///////////////////////////////////////////////////////////////////////////

    /**
     * Returns the id of the project.
     *
     * @method getId
     * @returns {String}
     */
    proto.getId = function() {
        return this.id;
    };

    /**
     * Sets the id of the project.
     *
     * @method setId
     * @param {String} id
     * @returns {void}
     */
    proto.setId = function(id) {
        this.id = id;
    };

    return ProjectModel;
});
