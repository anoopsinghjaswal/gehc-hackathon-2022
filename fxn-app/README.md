
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