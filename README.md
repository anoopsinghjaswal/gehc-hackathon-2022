### Setup Steps
```
Steps:
1. Create IOT Hub
    1. With rescue group if existing (hackathon), price 1900 per month
    2. Create a IOT device testdevice001,  and copy and keep the primary connection string from there
2. Create Digital Twin service
    1. Copy the hostname or url of service
    2. Download the ADT explorer  https://github.com/azure-samples/digital-twins-explorer/tree/main/ ( local copy is already present in the adt-explorer folder of this repo)
    3. Install az-cli
    4. Login to azure using. Az login 
    5. Install nodes
    6. in the explorer code go to client and run rpm install
    7. It will open the localhost:3000 In browser add digital twin there
    8. Import a model (check the model directory of this repo for sample model)
    9. Create digital twin out of of it with the same name of IOT device
3. Create function App
    1. Go to Development tool > Console . This will bring a cmd ,
    2. Create a file in cmd, type echo.>package.json
    3. Go to Functions > App Files and edit the package.json (copy the package.json from fxn-app)
    4. Go back to Development tool > Console
    5. Run npm install
    6. Type dir and confirm the node_module folder is created
    7. Go to Setting > identity 
        1. In system assigned section turn on the Status, after done it will show the Permissions
        2. Click on Azure Role assignment
        3. Add role assignment , search for digital twin owner as role and save
    8. Then go to functions and create a trigger
        1. Create HTTP trigger for external testing 
            1. Copy the node code to update digital twin (copy from index.js from fxn-app)
            2. Try out the HTTP trigger by providing appropriate values in payload and trigger it
        2. Create IOT Hub trigger to connect it to IOT Hub
```
### References
```
Digital Twin Service
https://www.youtube.com/watch?v=F_6oUknixeY 

IOT Hub 
https://www.youtube.com/watch?v=RHkqFxJWhr8

Step to step guide : E2E guide
https://www.youtube.com/watch?v=YBwraf72BKI&t=2010s 

Raspberry pie web simulator
https://azure-samples.github.io/raspberry-pi-web-simulator/ 

Node Library for Digital Twin
https://www.npmjs.com/package/@azure/digital-twins-core 
```
