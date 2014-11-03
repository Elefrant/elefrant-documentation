'use strict';

/**
 * Swagger configuration properties
 * ---------------------------------------
 * Swagger helps creating dynamic documentation.
 * The url to start is: http://api.acme.com/swagger/resources.json
 */
module.exports = {
    /*
     * Info
     * --------------------------
     */
    info: {
        /*
         * Contact
         * --------------------------
         * Contact of api documenttion
         */
        contact: 'email@domain.tld',

        /*
         * Description
         * --------------------------
         * Description of documentation
         */
        description: 'Description text',

        /*
         * Lincense
         * --------------------------
         * Type of license
         */
        license: 'MIT',

        /*
         * License url
         * --------------------------
         */
        licenseUrl: 'http://opensource.org/licenses/MIT',

        /*
         * Terms of service
         * --------------------------
         */
        termsOfServiceUrl: 'http://opensource.org/licenses/MIT',

        /*
         * Title
         * --------------------------
         * Title of the documentation
         */
        title: 'Elefrant auto-documentation'
    },

    /*
     * Api Descriptions
     * --------------------------
     * Write a description for group of routes
     */
    apiDescriptions: {
        //'help': 'Name description'
    },

    /*
     * Discover Url
     * --------------------------
     * Url where to search and get the documentation
     */
    discoveryUrl: 'docs/resources.json'
};
