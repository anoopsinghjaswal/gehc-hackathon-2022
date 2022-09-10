
### Function URL
```
[POST]
https://gehc-hackathon-2022.azurewebsites.net/api/HttpTrigger1?code=5JHmusXXXXXXXXXXXXXXXXXXXXXX

Payload:
{
  "flameIntensity": 52,
  "flameDetected": true,
  "digitalTwinId": "testdevice001"
}
```
- CURL request
```
curl -X POST \
  'https://gehc-hackathon-2022.azurewebsites.net/api/HttpTrigger1?code=5JHmusXXXXXXXXXXXXXXXXXXXXXX' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 31629abb-ccd8-45ed-a7bd-e33e1fd19d10' \
  -H 'cache-control: no-cache' \
  -d '{
  "flameIntensity": 55,
  "flameDetected": true,
  "digitalTwinId": "testdevice001"
}'
```


## Data send via event grid
```
// following is the structure of event user might get from event grid
{
  id: '5688af62-10e8-7f2a-535a-1f9d8a09f78b',
  topic: '/SUBSCRIPTIONS/8353294C-4FFC-4A21-962D-2CB4FEFD747D/RESOURCEGROUPS/HACKATHON/PROVIDERS/MICROSOFT.DEVICES/IOTHUBS/HACKATHON-IOT-HUB',
  subject: 'devices/testdevice002',
  eventType: 'Microsoft.Devices.DeviceTelemetry',
  data: {
    properties: {
      temperatureAlert: 'false'
    },
    systemProperties: {
      'iothub-connection-device-id': 'testdevice002',
      'iothub-connection-auth-method': '{"scope":"device","type":"sas","issuer":"iothub","acceptingIpFilterRule":null}',
      'iothub-connection-auth-generation-id': '637983364741039849',a
      'iothub-enqueuedtime': '2022-09-09T16:20:43.011Z',
      'iothub-message-source': 'Telemetry'
    },
    body: 'eyJtZXNzYWdlSWQiOjExLCJkZXZpY2VJZCI6IlJhc3BiZXJyeSBQaSBXZWIgQ2xpZW50IiwidGVtcGVyYXR1cmUiOjI1LjM5MjM3NTc3OTcyNjMwOCwiaHVtaWRpdHkiOjc2LjM5NDA0MjYwMDQ1NjYzfQ=='
  },
  dataVersion: '',
  metadataVersion: '1',
  eventTime: '2022-09-09T16:20:43.011Z'
}

(eventGridEvent.data.body) base64 to JSON
{"messageId":11,"deviceId":"Raspberry Pi Web Client","temperature":25.392375779726308,"humidity":76.39404260045663}
```

### error for invalid JSON
```
RestError: temperaturedoesnotexistoncomponent.Pleaseprovideavalidpatchdocument.Seesectiononupdateapisinthedocumentationhttps: //aka.ms/adtv2twins.{
  "name": "RestError",
  "code": "JsonPatchInvalid",
  "statusCode": 400,
  "request": {
    "streamResponseStatusCodes": {
      
    },
    "url": "https://sample1.api.eus.digitaltwins.azure.net/digitaltwins/testdevice002?api-version=2022-05-31",
    "method": "PATCH",
    "headers": {
      "_headersMap": {
        "content-type": "application/json-patch+json",
        "user-agent": "azsdk-js-digital-twins-core/1.1.0 core-http/2.2.7 Node/v16.16.0 OS/(ia32-Windows_NT-10.0.14393)",
        "x-ms-client-request-id": "59dc64bf-a3c0-4e14-a975-3d943c9e2274",
        "authorization": "REDACTED",
        "cookie": "REDACTED"
      }
    },
    "withCredentials": false,
    "timeout": 0,
    "keepAlive": true,
    "requestId": "59dc64bf-a3c0-4e14-a975-3d943c9e2274"
  },
  "details": {
    "error": {
      "code": "JsonPatchInvalid",
      "message": "temperature does not exist on component. Please provide a valid patch document. See section on update apis in the documentation https://aka.ms/adtv2twins."
    }
  },
  "message": "temperature does not exist on component. Please provide a valid patch document. See section on update apis in the documentation https://aka.ms/adtv2twins."
}
```