const { DefaultAzureCredential } = require("@azure/identity");
const { DigitalTwinsClient } = require("@azure/digital-twins-core");

const url = "https://sample1.api.eus.digitaltwins.azure.net";
const credential = new DefaultAzureCredential();
const serviceClient = new DigitalTwinsClient(url, credential);

module.exports = async function (context, eventGridEvent) {
    context.log('JavaScript HTTP trigger function processed a request.', eventGridEvent);
    const temperature = eventGridEvent.data.properties.temperature;
    const humidity = eventGridEvent.data.properties.humidity;
    const data = [{
        op: "replace",
        path: "/humidity",
        value: parseFloat(humidity)
    }, {
        op: "replace",
        path: "/temperature",
        value: parseFloat(temperature)
    }];

    context.log("twin data",data);
    let apiRes = {};
    try {
        apiRes= await serviceClient.updateDigitalTwin(eventGridEvent.data.systemProperties['iothub-connection-device-id'], data);
    } catch(err){
        context.log('updateDigitalTwinResponse err ::', err);
        if(err.code == 'JsonPatchInvalid'){
            const addData = [{
                op: "add",
                path: "/humidity",
                value: parseFloat(humidity)
            }, {
                op: "add",
                path: "/temperature",
                value: parseFloat(temperature)
            }];
            apiRes= await serviceClient.updateDigitalTwin(eventGridEvent.data.systemProperties['iothub-connection-device-id'], addData);
        }
    }
    context.log('updateDigitalTwinResponse udpated ::', apiRes);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: apiRes
    };
}