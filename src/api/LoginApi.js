/**
 * Authservice
 * Authservice.io provides Authentication and Authorisation services for web based applications. It can also maintain user profile information, relationship between users, and assist with communicating with users by email and SMS. 
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@authservice.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.Authservice) {
      root.Authservice = {};
    }
    root.Authservice.LoginApi = factory(root.Authservice.ApiClient, root.Authservice.InlineResponse2001);
  }
}(this, function(ApiClient, InlineResponse2001) {
  'use strict';

  /**
   * Login service.
   * @module api/LoginApi
   * @version 2.0.0
   */

  /**
   * Constructs a new LoginApi. 
   * @alias module:api/LoginApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the routeLogin operation.
     * @callback module:api/LoginApi~routeLoginCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2001>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate the OAuth2 authentication process zzz
     * By passing in the appropriate options, you can search for available inventory in the system 
     * @param {Number} apikey Your APIKEY
     * @param {Number} authority ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchString pass an optional search string for looking up inventory
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/LoginApi~routeLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2001>}
     */
    this.routeLogin = function(apikey, authority, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apikey' is set
      if (apikey === undefined || apikey === null) {
        throw new Error("Missing the required parameter 'apikey' when calling routeLogin");
      }

      // verify the required parameter 'authority' is set
      if (authority === undefined || authority === null) {
        throw new Error("Missing the required parameter 'authority' when calling routeLogin");
      }


      var pathParams = {
        'apikey': apikey,
        'authority': authority
      };
      var queryParams = {
        'searchString': opts['searchString'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [InlineResponse2001];

      return this.apiClient.callApi(
        '/{apikey}/login/{authority}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
