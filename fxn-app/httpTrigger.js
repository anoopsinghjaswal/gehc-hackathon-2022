const { DefaultAzureCredential } = require("@azure/identity");
const { DigitalTwinsClient } = require("@azure/digital-twins-core");

const url = "https://sample1.api.eus.digitaltwins.azure.net";
const credential = new DefaultAzureCredential();
const serviceClient = new DigitalTwinsClient(url, credential);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.', req.body);
    const data = [{
        op: "replace",
        path: "/Flame_intensity",
        value: req.body.flameIntensity
    },{
        "op": "replace",
        "path": "/Flame_detected",
        "value": req.body.flameDetected
    }];
    const updateDigitalTwinResponse = await serviceClient.updateDigitalTwin(req.body.digitalTwinId, data);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: updateDigitalTwinResponse
    };
}