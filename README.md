# authservice

Authservice - JavaScript client for authservice
Authservice.io provides Authentication and Authorisation services for web based applications. It can also maintain user profile information, relationship between users, and assist with communicating with users by email and SMS. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install authservice --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your authservice from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('authservice')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/authservice
then install it via:

```shell
    npm install YOUR_USERNAME/authservice --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Authservice = require('authservice');

var api = new Authservice.AdminApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.routeHealthcheck(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:9090/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Authservice.AdminApi* | [**routeHealthcheck**](docs/AdminApi.md#routeHealthcheck) | **GET** /healthcheck | Check the status of the API server
*Authservice.LoginApi* | [**routeLogin**](docs/LoginApi.md#routeLogin) | **GET** /{apikey}/login/{authority} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory231**](docs/Not_hereApi.md#searchInventory231) | **GET** /v1/{apikey}/getXGroup/get/{groupId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory27**](docs/Not_hereApi.md#searchInventory27) | **GET** /v1/{apikey}/getAssociates/{userId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory28**](docs/Not_hereApi.md#searchInventory28) | **GET** /v1/{apikey}/getAssociates/{userId}/{associateType} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory29**](docs/Not_hereApi.md#searchInventory29) | **GET** /v1/{apikey}/sendmail | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory291**](docs/Not_hereApi.md#searchInventory291) | **GET** /v1/{apikey}/getXUser/get/{userId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2b**](docs/Not_hereApi.md#searchInventory2b) | **GET** /v1/{apikey}/getXGroupMembers/get/{groupId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2c**](docs/Not_hereApi.md#searchInventory2c) | **GET** /v1/{apikey}/getXUserAssociates/get/{groupId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2d**](docs/Not_hereApi.md#searchInventory2d) | **GET** /v1/{apikey}/getXUserAffiliates/{userId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2e**](docs/Not_hereApi.md#searchInventory2e) | **GET** /v1/{apikey}/login | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2f**](docs/Not_hereApi.md#searchInventory2f) | **GET** /v1/{apikey}/email/register | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2g**](docs/Not_hereApi.md#searchInventory2g) | **GET** /v1/{apikey}/email/forgot | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2h**](docs/Not_hereApi.md#searchInventory2h) | **GET** /v1/{apikey}/changePassword | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2i**](docs/Not_hereApi.md#searchInventory2i) | **GET** /v1/{apikey}/admin/getUser | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2j**](docs/Not_hereApi.md#searchInventory2j) | **PUT** /v1/{apikey}/addRelationship | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2k**](docs/Not_hereApi.md#searchInventory2k) | **DELETE** /v1/{apikey}/removeRelationship | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2m**](docs/Not_hereApi.md#searchInventory2m) | **GET** /v1/{apikey}/getRelationshipTypes | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2n**](docs/Not_hereApi.md#searchInventory2n) | **PUT** /v1/{apikey}/addProperty | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2o**](docs/Not_hereApi.md#searchInventory2o) | **DELETE** /v1/{apikey}/removeProperty | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2q**](docs/Not_hereApi.md#searchInventory2q) | **GET** /v1/{apikey}/getTenants | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory2r**](docs/Not_hereApi.md#searchInventory2r) | **GET** /v1/{apikey}/getIdentityWithAuthtoken | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory3**](docs/Not_hereApi.md#searchInventory3) | **GET** /v1/{apikey}/user/{userId} | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory3p**](docs/Not_hereApi.md#searchInventory3p) | **GET** /v1/{apikey}/logout | check the status of the API server
*Authservice.Not_hereApi* | [**searchInventory5**](docs/Not_hereApi.md#searchInventory5) | **GET** /v1/{apikey}/users | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventory6**](docs/Not_hereApi.md#searchInventory6) | **POST** /v1/{apikey}/user | Initiate the OAuth2 authentication process zzz
*Authservice.Not_hereApi* | [**searchInventoryzzz3**](docs/Not_hereApi.md#searchInventoryzzz3) | **GET** /v1/{apikey}/status | check the status of the API server


## Documentation for Models

 - [Authservice.ApikeyloginauthorityManufacturer](docs/ApikeyloginauthorityManufacturer.md)
 - [Authservice.HealthcheckFail](docs/HealthcheckFail.md)
 - [Authservice.HealthcheckOk](docs/HealthcheckOk.md)
 - [Authservice.InlineResponse200](docs/InlineResponse200.md)
 - [Authservice.InlineResponse2001](docs/InlineResponse2001.md)
 - [Authservice.InlineResponse200Database](docs/InlineResponse200Database.md)
 - [Authservice.InlineResponse406](docs/InlineResponse406.md)
 - [Authservice.InlineResponse406Cache](docs/InlineResponse406Cache.md)
 - [Authservice.InlineResponse406Database](docs/InlineResponse406Database.md)
 - [Authservice.InventoryItem](docs/InventoryItem.md)
 - [Authservice.Manufacturer](docs/Manufacturer.md)


## Documentation for Authorization

 All endpoints do not require authorization.

