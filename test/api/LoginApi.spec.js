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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Authservice);
  }
}(this, function(expect, Authservice) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Authservice.LoginApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoginApi', function() {
    describe('routeLogin', function() {
      it('should call routeLogin successfully', function(done) {
        //uncomment below and update the code to test routeLogin
        //instance.routeLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
