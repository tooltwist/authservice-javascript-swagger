# Authservice.LoginApi

All URIs are relative to *http://localhost:9090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routeLogin**](LoginApi.md#routeLogin) | **GET** /{apikey}/login/{authority} | Initiate the OAuth2 authentication process zzz


<a name="routeLogin"></a>
# **routeLogin**
> [InlineResponse2001] routeLogin(apikey, authority, opts)

Initiate the OAuth2 authentication process zzz

By passing in the appropriate options, you can search for available inventory in the system 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.LoginApi();

var apikey = 789; // Number | Your APIKEY

var authority = 789; // Number | ID of pet to update

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
apiInstance.routeLogin(apikey, authority, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **Number**| Your APIKEY | 
 **authority** | **Number**| ID of pet to update | 
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

