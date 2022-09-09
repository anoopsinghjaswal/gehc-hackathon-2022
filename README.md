### Setup Steps
```
Steps:
1. Create IOT Hub
    1. With rescue group if existing or else create new one
    2. Create a IOT device [testdevice001],  and copy and keep the primary connection string from there
2. Create Digital Twin service
    1. Copy the hostname or url of digital twin service created
    2. Download the ADT explorer  https://github.com/azure-samples/digital-twins-explorer/tree/main/ ( local copy is already present in the adt-explorer folder of this repo)
    3. Install az-cli
    4. Login to azure using. Az login 
    5. Install nodejs
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
        2. Create Event Grid trigger for connecting to event grid messages
            1. Copy the node code to update digital twin (copy from eventGridTrigger.js from fxn-app)
4. Create Event grid stream from IOT Hub
    1. Go to event section > event subscription > create new
    2. Provide subscription name, and resouce group
    3. create a topic name
    4. in the event types deselect all only keep device telemetry
    5. select endpoint type as azure functions
    6. in the left popup select the proper fucntion and corresponding trigger created for event grid
    7. save the config
5. Testing all the schema
    1. go to function trigger (event schema) and monitor for logs
    2. open raspberry pie simulator https://azure-samples.github.io/raspberry-pi-web-simulator/
    3. copy the code from Raspberry-pi-sim> index.js and past in the webpage
    4. run the simulator
    5. then you'll see the logs in the function console
    6. open ADT explorer
    7. make seelect * query, it will show all digital twins
    8. on every refresh the value will change
    

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
