# Authservice.AdminApi

All URIs are relative to *http://localhost:9090/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routeHealthcheck**](AdminApi.md#routeHealthcheck) | **GET** /healthcheck | Check the status of the API server


<a name="routeHealthcheck"></a>
# **routeHealthcheck**
> InlineResponse200 routeHealthcheck()

Check the status of the API server

This call is used to check that the server is running correctly.  If the server is running correctly, a status of \&quot;green\&quot; is returned with status 200. \\ Note that if there is a problem with the database or cache, this call will still return 200 for the status, but the content of the reply will change. This is necessary to prevent the load balancer from thinking the server is dead, and restarting the server, making it impossible to diagnose the problem. \\ Any monitoring software should check that the status is \&quot;green\&quot;. 

### Example
```javascript
var Authservice = require('authservice');

var apiInstance = new Authservice.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeHealthcheck(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

