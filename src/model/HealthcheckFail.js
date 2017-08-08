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
    define(['ApiClient', 'model/InlineResponse406Cache', 'model/InlineResponse406Database'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse406Cache'), require('./InlineResponse406Database'));
  } else {
    // Browser globals (root is window)
    if (!root.Authservice) {
      root.Authservice = {};
    }
    root.Authservice.HealthcheckFail = factory(root.Authservice.ApiClient, root.Authservice.InlineResponse406Cache, root.Authservice.InlineResponse406Database);
  }
}(this, function(ApiClient, InlineResponse406Cache, InlineResponse406Database) {
  'use strict';




  /**
   * The HealthcheckFail model module.
   * @module model/HealthcheckFail
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>HealthcheckFail</code>.
   * @alias module:model/HealthcheckFail
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>HealthcheckFail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthcheckFail} obj Optional instance to populate.
   * @return {module:model/HealthcheckFail} The populated <code>HealthcheckFail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('database')) {
        obj['database'] = InlineResponse406Database.constructFromObject(data['database']);
      }
      if (data.hasOwnProperty('cache')) {
        obj['cache'] = InlineResponse406Cache.constructFromObject(data['cache']);
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse406Database} database
   */
  exports.prototype['database'] = undefined;
  /**
   * @member {module:model/InlineResponse406Cache} cache
   */
  exports.prototype['cache'] = undefined;



  return exports;
}));


