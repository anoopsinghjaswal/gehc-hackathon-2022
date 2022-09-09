const { DefaultAzureCredential } = require("@azure/identity");
const { DigitalTwinsClient } = require("@azure/digital-twins-core");

const url = "https://sample1.api.eus.digitaltwins.azure.net";
const credential = new DefaultAzureCredential();
const serviceClient = new DigitalTwinsClient(url, credential);

module.exports = async function (context, eventGridEvent) {
    context.log('JavaScript HTTP trigger function processed a request.', eventGridEvent);
    const flameIntensity = eventGridEvent.data.properties.flameIntensity;
    const flameDetected = eventGridEvent.data.properties.flameDetected  === 'true';
    const data = [{
        op: "replace",
        path: "/Flame_intensity",
        value: parseFloat(flameIntensity)
    },{
        "op": "replace",
        "path": "/Flame_detected",
        "value": flameDetected
    }];
    const updateDigitalTwinResponse = await serviceClient.updateDigitalTwin(eventGridEvent.data.systemProperties['iothub-connection-device-id'], data);
    context.log('updateDigitalTwinResponse udpated ::', updateDigitalTwinResponse);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: updateDigitalTwinResponse
    };
}