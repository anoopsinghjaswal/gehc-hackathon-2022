
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