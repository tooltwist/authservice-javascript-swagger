# Authservice.Not_hereApi

All URIs are relative to *http://localhost:9090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchInventory231**](Not_hereApi.md#searchInventory231) | **GET** /v1/{apikey}/getXGroup/get/{groupId} | Initiate the OAuth2 authentication process zzz
[**searchInventory27**](Not_hereApi.md#searchInventory27) | **GET** /v1/{apikey}/getAssociates/{userId} | Initiate the OAuth2 authentication process zzz
[**searchInventory28**](Not_hereApi.md#searchInventory28) | **GET** /v1/{apikey}/getAssociates/{userId}/{associateType} | Initiate the OAuth2 authentication process zzz
[**searchInventory29**](Not_hereApi.md#searchInventory29) | **GET** /v1/{apikey}/sendmail | Initiate the OAuth2 authentication process zzz
[**searchInventory291**](Not_hereApi.md#searchInventory291) | **GET** /v1/{apikey}/getXUser/get/{userId} | Initiate the OAuth2 authentication process zzz
[**searchInventory2b**](Not_hereApi.md#searchInventory2b) | **GET** /v1/{apikey}/getXGroupMembers/get/{groupId} | Initiate the OAuth2 authentication process zzz
[**searchInventory2c**](Not_hereApi.md#searchInventory2c) | **GET** /v1/{apikey}/getXUserAssociates/get/{groupId} | Initiate the OAuth2 authentication process zzz
[**searchInventory2d**](Not_hereApi.md#searchInventory2d) | **GET** /v1/{apikey}/getXUserAffiliates/{userId} | Initiate the OAuth2 authentication process zzz
[**searchInventory2e**](Not_hereApi.md#searchInventory2e) | **GET** /v1/{apikey}/login | Initiate the OAuth2 authentication process zzz
[**searchInventory2f**](Not_hereApi.md#searchInventory2f) | **GET** /v1/{apikey}/email/register | Initiate the OAuth2 authentication process zzz
[**searchInventory2g**](Not_hereApi.md#searchInventory2g) | **GET** /v1/{apikey}/email/forgot | Initiate the OAuth2 authentication process zzz
[**searchInventory2h**](Not_hereApi.md#searchInventory2h) | **GET** /v1/{apikey}/changePassword | Initiate the OAuth2 authentication process zzz
[**searchInventory2i**](Not_hereApi.md#searchInventory2i) | **GET** /v1/{apikey}/admin/getUser | Initiate the OAuth2 authentication process zzz
[**searchInventory2j**](Not_hereApi.md#searchInventory2j) | **PUT** /v1/{apikey}/addRelationship | Initiate the OAuth2 authentication process zzz
[**searchInventory2k**](Not_hereApi.md#searchInventory2k) | **DELETE** /v1/{apikey}/removeRelationship | Initiate the OAuth2 authentication process zzz
[**searchInventory2m**](Not_hereApi.md#searchInventory2m) | **GET** /v1/{apikey}/getRelationshipTypes | Initiate the OAuth2 authentication process zzz
[**searchInventory2n**](Not_hereApi.md#searchInventory2n) | **PUT** /v1/{apikey}/addProperty | Initiate the OAuth2 authentication process zzz
[**searchInventory2o**](Not_hereApi.md#searchInventory2o) | **DELETE** /v1/{apikey}/removeProperty | Initiate the OAuth2 authentication process zzz
[**searchInventory2q**](Not_hereApi.md#searchInventory2q) | **GET** /v1/{apikey}/getTenants | Initiate the OAuth2 authentication process zzz
[**searchInventory2r**](Not_hereApi.md#searchInventory2r) | **GET** /v1/{apikey}/getIdentityWithAuthtoken | Initiate the OAuth2 authentication process zzz
[**searchInventory3**](Not_hereApi.md#searchInventory3) | **GET** /v1/{apikey}/user/{userId} | Initiate the OAuth2 authentication process zzz
[**searchInventory3p**](Not_hereApi.md#searchInventory3p) | **GET** /v1/{apikey}/logout | check the status of the API server
[**searchInventory5**](Not_hereApi.md#searchInventory5) | **GET** /v1/{apikey}/users | Initiate the OAuth2 authentication process zzz
[**searchInventory6**](Not_hereApi.md#searchInventory6) | **POST** /v1/{apikey}/user | Initiate the OAuth2 authentication process zzz
[**searchInventoryzzz3**](Not_hereApi.md#searchInventoryzzz3) | **GET** /v1/{apikey}/status | check the status of the API server


<a name="searchInventory231"></a>
# **searchInventory231**
> [InlineResponse2001] searchInventory231(apikey, groupId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var groupId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory231(apikey, groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **groupId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory27"></a>
# **searchInventory27**
> [InlineResponse2001] searchInventory27(apikey, userId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var userId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory27(apikey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **userId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory28"></a>
# **searchInventory28**
> [InlineResponse2001] searchInventory28(apikey, userId, associateType, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var userId = 789; // Number | ID of pet to update

var associateType = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory28(apikey, userId, associateType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **userId** | **Number**| ID of pet to update | 
 **associateType** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory29"></a>
# **searchInventory29**
> [InlineResponse2001] searchInventory29(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory29(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory291"></a>
# **searchInventory291**
> [InlineResponse2001] searchInventory291(apikey, userId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var userId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory291(apikey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **userId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2b"></a>
# **searchInventory2b**
> [InlineResponse2001] searchInventory2b(apikey, groupId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var groupId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2b(apikey, groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **groupId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2c"></a>
# **searchInventory2c**
> [InlineResponse2001] searchInventory2c(apikey, groupId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var groupId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2c(apikey, groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **groupId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2d"></a>
# **searchInventory2d**
> [InlineResponse2001] searchInventory2d(apikey, userId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var userId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2d(apikey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **userId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2e"></a>
# **searchInventory2e**
> [InlineResponse2001] searchInventory2e(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2e(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2f"></a>
# **searchInventory2f**
> [InlineResponse2001] searchInventory2f(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2f(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2g"></a>
# **searchInventory2g**
> [InlineResponse2001] searchInventory2g(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2g(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2h"></a>
# **searchInventory2h**
> [InlineResponse2001] searchInventory2h(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2h(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2i"></a>
# **searchInventory2i**
> [InlineResponse2001] searchInventory2i(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2i(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2j"></a>
# **searchInventory2j**
> [InlineResponse2001] searchInventory2j(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2j(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2k"></a>
# **searchInventory2k**
> [InlineResponse2001] searchInventory2k(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2k(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2m"></a>
# **searchInventory2m**
> [InlineResponse2001] searchInventory2m(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2m(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2n"></a>
# **searchInventory2n**
> [InlineResponse2001] searchInventory2n(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2n(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2o"></a>
# **searchInventory2o**
> [InlineResponse2001] searchInventory2o(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2o(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2q"></a>
# **searchInventory2q**
> [InlineResponse2001] searchInventory2q(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2q(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory2r"></a>
# **searchInventory2r**
> [InlineResponse2001] searchInventory2r(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory2r(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory3"></a>
# **searchInventory3**
> [InlineResponse2001] searchInventory3(apikey, userId, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var userId = 789; // Number | ID of pet to update

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory3(apikey, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **userId** | **Number**| ID of pet to update | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory3p"></a>
# **searchInventory3p**
> [InlineResponse2001] searchInventory3p(apikey)

check the status of the API server

Log out a user. Note that a JWT (JSON Web Token) for the user may still be being used somewhere. For important operations the application should verify that a JWT is still valid.  BROKEN 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = "apikey_example"; // String | Your APIKEY


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory3p(apikey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**| Your APIKEY | 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory5"></a>
# **searchInventory5**
> [InlineResponse2001] searchInventory5(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory5(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventory6"></a>
# **searchInventory6**
> [InlineResponse2001] searchInventory6(apikey, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = 789; // Number | Your APIKEY

var opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventory6(apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchInventoryzzz3"></a>
# **searchInventoryzzz3**
> [InlineResponse2001] searchInventoryzzz3(apikey)

check the status of the API server

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.Not_hereApi();

var apikey = "apikey_example"; // String | Your APIKEY


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchInventoryzzz3(apikey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**| Your APIKEY | 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

