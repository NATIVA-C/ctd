
![ExamTopics Logo](https://www.examtopics.com/assets/images/et/ExamTopics-Logo-Smaller.png) - Expert Verified, Online, **Free**.

## Topic 1 - Question Set 1

Question #1*Topic 1*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub, a Device Provisioning Service instance, and 1,000 connected IoT devices.
All the IoT devices are provisioned automatically by using one enrollment group.
You need to temporarily disable the IoT devices from the connecting to the IoT hub.
Solution: From the Device Provisioning Service, you disable the enrollment group, and you disable device entries in the identity registry of the IoT hub to which the
IoT devices are provisioned.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
You may find it necessary to deprovision devices that were previously auto-provisioned through the Device Provisioning Service.
In general, deprovisioning a device involves two steps:

1. Disenroll the device from your provisioning service, to prevent future auto-provisioning. Depending on whether you want to revoke access temporarily or permanently, you may want to either disable or delete an enrollment entry.
2. Deregister the device from your IoT Hub, to prevent future communications and data transfer. Again, you can temporarily disable or permanently delete the device's entry in the identity registry for the IoT Hub where it was provisioned.

Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-unprovision-devices

Question #2*Topic 1*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub, a Device Provisioning Service instance, and 1,000 connected IoT devices.
All the IoT devices are provisioned automatically by using one enrollment group.
You need to temporarily disable the IoT devices from the connecting to the IoT hub.
Solution: You delete the enrollment group from the Device Provisioning Service.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead, from the Device Provisioning Service, you disable the enrollment group, and you disable device entries in the identity registry of the IoT hub to which the
IoT devices are provisioned.
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-unprovision-devices

Question #3*Topic 1*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub, a Device Provisioning Service instance, and 1,000 connected IoT devices.
All the IoT devices are provisioned automatically by using one enrollment group.
You need to temporarily disable the IoT devices from the connecting to the IoT hub.
Solution: From the IoT hub, you change the credentials for the shared access policy of the IoT devices.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-unprovision-devices

Question #4*Topic 1*

HOTSPOT -
You have an Azure IoT hub.
You plan to deploy 1,000 IoT devices by using automatic device management.
The device twin is shown below.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0001000001.png)
You need to configure automatic device management for the deployment.
Which target Condition and Device Twin Path should you use? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0001100001.jpg)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0001200001.jpg)* 
Box 1: tags.engine.warpDriveType='VM105a'
Use tags to target twins. Before you create a configuration, you must specify which devices or modules you want to affect. Azure IoT Hub identifies devices and using tags in the device twin, and identifies modules using tags in the module twin.
Box 2: properties.desired.warpOperating
The twin path, which is the path to the JSON section within the twin desired properties that will be set.
For example, you could set the twin path to properties.desired.chiller-water and then provide the following JSON content:
{
"temperature": 66,
"pressure": 28
}
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-automatic-device-management

Question #5*Topic 1*

You plan to deploy a standard tier Azure IoT hub.
You need to perform an over-the-air (OTA) update on devices that will connect to the IoT hub by using scheduled jobs.
What should you use?

- A. a device-to-cloud message
- B. the device twin reported properties
- C. a cloud-to-device message
- D. a direct method

**Correct Answer:** *D* 
Releases via the REST API.
All of the operations that can be performed from the Console can also be automated using the REST API. You might do this to automate your build and release process, for example.
You can build firmware using the Particle CLI or directly using the compile source code API.
Note: Over-the-air (OTA) firmware updates are a vital component of any IoT system. Over-the-air firmware updates refers to the practice of remotely updating the code on an embedded device.
Reference:
https://docs.particle.io/tutorials/device-cloud/ota-updates/

*Community vote distribution*

C (63%)

D (38%)



Question #6*Topic 1*

You have an IoT device that gathers data in a CSV file named Sensors.csv.
You deploy an Azure IoT hub that is accessible at ContosoHub.azure-devices.net.
You need to ensure that Sensors.csv is uploaded to the IoT hub.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Upload Sensors.csv by using the IoT Hub REST API.
- B. From the Azure subscription, select the IoT hub, select Message routing, and then configure a route to storage.
- C. From the Azure subscription, select the IoT hub, select File upload, and then configure a storage container.
- D. Configure the device to use a GET request to ContosoHub.azure-devices.net/devices/ContosoDevice1/files/notifications.

**Correct Answer:** *AC* 
C: To use the file upload functionality in IoT Hub, you must first associate an Azure Storage account with your hub. Select File upload to display a list of file upload properties for the IoT hub that is being modified.
For Storage container: Use the Azure portal to select a blob container in an Azure Storage account in your current Azure subscription to associate with your IoT
Hub. If necessary, you can create an Azure Storage account on the Storage accounts blade and blob container on the Containers
A: IoT Hub has an endpoint specifically for devices to request a SAS URI for storage to upload a file. To start the file upload process, the device sends a POST request to {iot hub}.azure-devices.net/devices/{deviceId}/files with the following JSON body:
{
"blobName": "{name of the file for which a SAS URI will be generated}"
}
Incorrect Answers:
D: Deprecated: initialize a file upload with a GET. Use the POST method instead.
Reference:
https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/iot-hub/iot-hub-configure-file-upload.md

Question #7*Topic 1*

You plan to deploy an Azure IoT hub.
The IoT hub must support the following:
✑ Three Azure IoT Edge devices
✑ 2,500 IoT devices
Each IoT device will spend a 6 KB message every five seconds.
You need to size the IoT hub to support the devices. The solution must minimize costs.
What should you choose?

- A. one unit of the S1 tier
- B. one unit of the B2 tier
- C. one unit of the B1 tier
- D. one unit of the S3 tier

**Correct Answer:** *D* 
2500* 6 KB * 12 = 180,000 KB/minute = 180 MB/Minute.
B3, S3 can handle up to 814 MB/minute per unit.
Incorrect Answers:
A, C: B1, S1 can only handle up to 1111 KB/minute per unit
B: B2, S2 can only handle up to 16 MB/minute per unit.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling

Question #8*Topic 1*

DRAG DROP -
You deploy an Azure IoT hub.
You need to demonstrate that the IoT hub can receive messages from a device.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0001600001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0001600002.png)*
Step 1: Register a device in IoT Hub
Before you can use your IoT devices with Azure IoT Edge, you must register them with your IoT hub. Once a device is registered, you can retrieve a connection string to set up your device for IoT Edge workloads.
Step 2: Configure the device connection string on a device client.
When you're ready to set up your device, you need the connection string that links your physical device with its identity in the IoT hub.
Step 3: Trigger a new send event from a device client.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-register-device

Question #9*Topic 1*

DRAG DROP -
You have an Azure IoT hub.
You plan to attach three types of IoT devices as shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0001700001.png)
You need to select the appropriate communication protocol for each device.
What should you select? To answer, drag the appropriate protocols to the correct devices. Each protocol may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0001800001.png)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0001800002.png)* 
Box 1: AMQP -
Use AMQP on field and cloud gateways to take advantage of connection multiplexing across devices.

Box 2: MQTT -
MQTT is used on all devices that do not require to connect multiple devices (each with its own per-device credentials) over the same TLS connection.

Box 3: HTTPS -
Use HTTPS for devices that cannot support other protocols.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-protocols

Question #10*Topic 1*

You create an Azure IoT hub by running the following command. az iot hub create --resource-group MyResourceGroup --name MyIotHub --sku B1 --location westus --partition-count 4
What does MylotHub support?

- A. Device Provisioning Service
- B. cloud-to-device messaging
- C. Azure IoT Edge
- D. device twins

**Correct Answer:** *A* 
The Device Provisioning Service is included in the Basic Tiers (such as B1).
Incorrect Answers:
B, C, D: The Standard tier is needed for cloud-to-device messaging, Azure IoT Edge, and device twins.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling

Question #11*Topic 1*

You have an existing Azure IoT hub.
You need to connect physical IoT devices to the IoT hub.
You are connecting the devices through a firewall that allows only port 443 and port 80.
Which three communication protocols can you use? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. MQTT over WebSocket
- B. AMQP
- C. AMQP over WebSocket
- D. MQTT
- E. HTTPS

**Correct Answer:** *ACE* 
MQTT over WebSockets, AMQP over WebSocket, and HTTPS use port 443.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-protocols

Question #12*Topic 1*

You have an Azure IoT solution that includes an Azure IoT hub and 100 Azure IoT Edge devices.
You plan to deploy the IoT Edge devices to external networks. The firewalls of the external networks only allow traffic on port 80 and port 443.
You need to ensure that the devices can connect to the IoT hub. The solution must minimize costs.
What should you do?

- A. Configure the upstream protocol of the devices to use MQTT over TCP.
- B. Configure the upstream protocol of the devices to use MQTT over WebSocket.
- C. Connect the external networks to the IoT solution by using ExpressRoute.
- D. Integrate cellular communication hardware onto the devices and avoid the use of the external networks.

**Correct Answer:** *B* 
MQTT over WebSockets uses port 443.
Note: Devices can communicate with IoT Hub in Azure using various protocols. Typically, the choice of protocol is driven by the specific requirements of the solution. The following table lists the outbound ports that must be open for a device to be able to use a specific protocol:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002100001.png)
Incorrect Answers:
A: MQTT over TCP uses port 883.
C: ExpressRoute uses BGP, which uses TCP port 179.
D: HTTPS proxy also uses port 443, but it would be a more expensive solution.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-protocols

Question #13*Topic 1*

You have 100 devices that connect to an Azure IoT hub named Hub1. The devices connect by using a symmetric key.
You deploy an IoT hub named Hub2.
You need to migrate 10 devices from Hub1 to Hub2. The solution must ensure that the devices retain the existing symmetric key.
What should you do?

- A. Add a desired property to the device twin of Hub2. Update the endpoint of the 10 devices to use Hub2.
- B. Add a desired property to the device twin of Hub1. Recreate the device identity on Hub2.
- C. Recreate the device identity on Hub2. Update the endpoint of the 10 devices to use Hub2.
- D. Disable the 10 devices on Hub1. Update the endpoint of the 10 devices to use Hub2.

**Correct Answer:** *B* 
Desired properties. Used along with reported properties to synchronize device configuration or conditions. The solution back end can set desired properties, and the device app can read them. The device app can also receive notifications of changes in the desired properties.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins

*Community vote distribution*

B (100%)



Question #14*Topic 1*

DRAG DROP -
You have an Azure subscription that contains an Azure IoT hub and 100 IoT devices.
The devices connect to the IoT hub by using the Advanced Message Queuing Protocol (AMQP) protocol and authenticate to the IoT hub by using symmetric keys.
You need to configure the SASL PLAIN username for the AMQP connection.
How should you configure the username? To answer, drag the appropriate options to the correct targets. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002300001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0002400001.png)* 
Box 1: DeviceID -
If you use AMQP claims-based-security, the standard specifies how to transmit these tokens.
For SASL PLAIN, the username can be:
{policyName}@sas.root.{iothubName} if using IoT hub-level tokens.
{deviceId}@sas.{iothubname} if using device-scoped tokens.

Box 2: sas -

Box 3:IoT hub hame -
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-sas

Question #15*Topic 1*

You are configuring a production environment for an Azure IoT solution.
You plan to deploy 1,000 IoT devices. Each device will send one device-to-cloud message every hour. Each message will be 4 KB.
You need to deploy an Azure IoT hub that will support the IoT device deployment. The solution must meet the following requirements:
✑ Perform bulk device operations such as creating multiple device identities.
✑ Minimize costs
What should you deploy?

- A. one unit of the B1 tier
- B. one unit of the free tier
- C. one unit of the S1 tier
- D. one unit of the S2 tier

**Correct Answer:** *B* 
1000 /3600 device-to-cloud message/second is less than 1 per second. One unit of the free tier is sufficient.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002600001.png)
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-quotas-throttling

*Community vote distribution*

A (100%)



Question #16*Topic 1*

You have an Azure IoT hub that receives messages from an IoT device. The messages are serialized as Protobuf.

You need the IoT hub to route the messages.

What should you do first?

- A. From the Azure portal, add desired properties to the device twin.
- B. Configure the IoT device to add application properties to the messages.
- C. From the Azure portal, configure the IoT hub to add message enrichments.
- D. Configure the IoT device to add ASCII-encoded properties to the body of the messages.

**Correct Answer:** *A* 

Question #17*Topic 1*

You have an Azure IoT solution that includes an Azure IoT hub and 100 Azure IoT Edge devices.

You plan to deploy the IoT Edge devices to external networks. The firewalls of the external networks only allow traffic on port 80 and port 443.

You need to ensure that the devices can connect to the IoT hub. The solution must minimize costs.

What should you do?

- A. Configure the upstream protocol of the devices to use MQTT over TCP.
- B. Configure the upstream protocol of the devices to use AMQP over WebSocket.
- C. Connect the external networks to the IoT solution by using ExpressRoute.
- D. Integrate cellular communication hardware onto the devices and avoid the use of the external networks.

**Correct Answer:** *B* 

Question #18*Topic 1*

DRAG DROP
\-

You have an Azure subscription that contains an Azure IoT hub and 100 IoT devices.

The devices connect to the IoT hub by using the Message Queuing Telemetry Transport (MQTT) protocol and authenticate to the IoT hub by using symmetric keys.

You need to configure the username and password for the MQTT connection.

What should you use? To answer, drag the appropriate components to the correct targets. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image1.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image2.png)* 

Question #19*Topic 1*

You are developing a proof of concept (POC) for a customer.

You need to deploy an Azure IoT solution that meets the following requirements:

• Registers two Azure MXCHIP IoT DevKit devices
• Minimizes costs and deployment effort
• Registers a simulated device

What should you do?

- A. Create an Azure event hub. Run the az iot hub device-identity create command for each device.
- B. Create two Azure IoT hubs. Register the IoT DevKit devices and simulate the devices to different IoT hubs.
- C. Create an Azure IoT hub. Run the az iot device-identity create command for each device.
- D. Create an Azure IoT hub. Run the az iot hub monitor-events command for each device.

**Correct Answer:** *C* 

Question #20*Topic 1*

You have an Azure IoT solution that includes an Azure IoT hub and 100 Azure IoT Edge devices.

You plan to deploy the IoT Edge devices to external networks. The firewalls of the external networks only allow traffic on port 80 and port 443.

You need to ensure that the devices can connect to the IoT hub. The solution must minimize costs.

What should you do?

- A. Configure the upstream protocol of the devices to use MQTT over WebSocket.
- B. Configure the devices for extended offline operations.
- C. Connect the external networks to the IoT solution by using ExpressRoute.
- D. Deploy IoT Hub to the external networks by using Azure Stack.

**Correct Answer:** *A* 

Question #21*Topic 1*

You have an Azure IoT solution that includes an Azure IoT hub and 100 Azure IoT Edge devices.

You plan to deploy the IoT Edge devices to external networks. The firewalls of the external networks only allow traffic on port 80 and port 443.

You need to ensure that the devices can connect to the IoT hub. The solution must minimize costs.

What should you do?

- A. Configure the upstream protocol of the devices to use MQTT over TCP.
- B. Configure the upstream protocol of the devices to use AMQP over WebSocket.
- C. Connect the devices to use an HTTPS proxy.
- D. Integrate cellular communication hardware onto the devices and avoid the use of the external networks.

**Correct Answer:** *B* 

Question #22*Topic 1*

HOTSPOT
\-

You have an Azure subscription that contains the following Azure IoT hub:

• Name: Hub1
• Tier: S1
• Number of units: 14

The subscription has the tiers and unit costs shown in the following table.

![img](https://img.examtopics.com/az-220/image3.png)

You have 60 IoT devices that connect to Hub1. Each IoT device sends a single 1-KB message to Hub1 per second.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image4.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image5.png)* 

Question #23*Topic 1*

HOTSPOT
\-

You create an Azure IoT hub as shown in the following exhibit.

![img](https://img.examtopics.com/az-220/image6.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image7.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image8.png)* 

Question #24*Topic 1*

DRAG DROP
\-

You are building an IoT device management application by using the Azure IoT Hub Service SDK. 

You need to configure the application to send instructions via an IoT hub to IoT devices. 

How should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. 

NOTE: Each correct selection is worth one point. 

![img](https://img.examtopics.com/az-220/image9.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image10.png)* 

Question #25*Topic 1*

You have an Azure IoT solution that includes an Azure IoT hub. The hub has the following configurations:

• Name: IoTHub1
• Retain for: 1 Day
• Azure region: East US
• Number of IoT hub units: 1
• Pricing and scale tier: B1 - Basic
• Consumer groups: $Default Only
• Connectivity method: Public endpoint (all networks)

You need to ensure that the solution supports IoT Hub jobs that update device twin properties.

What should you do first?

- A. Create a device twin.
- B. Create a module twin.
- C. Create a shared access policy.
- D. Upgrade to a standard tier IoT hub.

**Correct Answer:** *D* 

Question #26*Topic 1*

You have an Azure subscription that contains the Azure IoT hubs shown in the following table.

![img](https://img.examtopics.com/az-220/image113.png)

You plan to evaluate the Microsoft Defender for IoT agent-based solution in Built-in mode.

Which IoT hubs can you use for the evaluation?

- A. Hub4 only
- B. Hub3 and Hub4 only
- C. Hub2, Hub3, and Hub4 only
- D. Hub1, Hub2, Hub3, and Hub4

**Correct Answer:** *A* 

Question #27*Topic 1*

You have an Azure IoT solution that contains an Azure IoT hub in the S1 - Standard-tier. The IoT hub has four built-in event endpoint partitions.

You need to increase the number of partitions to eight. The solution must minimize administrative effort.

What should you do?

- A. From the Pricing and scale blade of the IoT hub, change the tier to S2 - Standard.
- B. From the Pricing and scale blade of the IoT hub, increase the number of IoT Hub units to eight.
- C. Create a new IoT hub and set Device-to-cloud partitions to eight.
- D. Create a new IoT hub and set the number of IoT Hub units to eight.

**Correct Answer:** *C* 

Question #28*Topic 1*

HOTSPOT
\-

You have an Azure IoT solution that includes an IoT device named Device1.

You are creating an IoT Plug and Play model for Device1.

On Device1, you create a device model file in a folder named dtmi/com/source/.

How should you complete the model? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image121.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image122.png)* 

Question #29*Topic 1*

You have an Azure IoT Central application. One thousand devices are registered to the application.

You need to modify a property on all the devices. The solution must minimize administrative effort.

What should you create?

- A. a job
- B. a rule
- C. a device group
- D. a device template

**Correct Answer:** *A* 

## Topic 2 - Question Set 2

Question #1*Topic 2*

You have an Azure subscription that contains a resource group named RG1.
You need to deploy the Device Provisioning Service. The solution must ensure that the Device Provisioning Service can accept new device enrollments.
You create a Device Provisioning Service instance.
Which two actions should you perform next? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. From the Linked IoT hubs blade of the Device Provisioning Service, link an Azure IoT hub.
- B. From the Azure portal, create a new Azure IoT hub.
- C. From the Manage allocation policy blade of the Device Provisioning Service, configure an allocation policy.
- D. From the Certificates blade of the Device Provisioning Service, upload an X.509 certificate to the Device Provisioning Service.

**Correct Answer:** *AC* 
A: The Device Provisioning Service can only provision devices to IoT hubs that have been linked to it.
C: Allocation policy. The service-level setting that determines how Device Provisioning Service assigns devices to an IoT hub. There are three supported allocation policies:
✑ Lowest latency: devices are provisioned to an IoT hub with the lowest latency to the device.
✑ Evenly weighted distribution
✑ Static configuration via the enrollment list
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/concepts-service

Question #2*Topic 2*

You have 10,000 IoT devices that connect to an Azure IoT hub. The devices do not support over-the-air (OTA) updates.
You need to decommission 1,000 devices. The solution must prevent connections and autoenrollment for the decommissioned devices.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Update the connectionState device twin property on all the devices.
- B. Blacklist the X.509 root certification authority (CA) certificate for the enrollment group.
- C. Delete the enrollment entry for the devices.
- D. Remove the identity certificate from the hardware security module (HSM) of the devices.
- E. Delete the device identity from the device registry of the IoT hub.

**Correct Answer:** *CE* 
In general, deprovisioning a device involves two steps:
✑ Disenroll the device from your provisioning service, to prevent future auto-provisioning. Depending on whether you want to revoke access temporarily or permanently, you may want to either disable or delete an enrollment entry.
✑ Deregister the device from your IoT Hub, to prevent future communications and data transfer. Again, you can temporarily disable or permanently delete the device's entry in the identity registry for the IoT Hub where it was provisioned.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/how-to-unprovision-devices

Question #3*Topic 2*

HOTSPOT -
You have an Azure IoT Central application that has a custom device template.
You need to configure the device template to support the following activities:
✑ Return the reported power consumption.
✑ Configure the desired fan speed.
✑ Run the device reset routine.
✑ Read the fan serial number.
Which option should you use for each activity? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0003700001.jpg)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0003800001.jpg)* 
A device template in Azure IoT Central is a blueprint that defines the:
✑ Telemetry a device sends to IoT Central.
✑ Properties a device synchronizes with IoT Central.
✑ Commands that IoT Central calls on a device.

Box 1: Measurement -
Telemetry/measurement is a stream of values sent from the device, typically from a sensor. For example, a sensor might report the ambient temperature.

Box 2: Properties -
The template can provide a writeable fan speed property
Properties represent point-in-time values. For example, a device can use a property to report the target temperature it's trying to reach. You can set writeable properties from IoT Central.

Box 3: Properties -

Box 4: Command -
You can call device commands from IoT Central. Commands optionally pass parameters to the device and receive a response from the device. For example, you can call a command to reboot a device in 10 seconds.
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/howto-set-up-template

Question #4*Topic 2*

DRAG DROP -
You have an Azure IoT Central application that includes a Device Provisioning Service instance.
You need to connect IoT devices to the application without first registering the devices.
In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0004000001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0004000002.jpg)*
Step 1: Obtain the credential -
Obtain the group primary key from the IoT Central enrollment group.
Step 2: Generate device credentials
The group primary key used to generate device credentials
Step 3: Flash unique credentials to the devices
The OEM flashes each device with a device ID, a generated device SAS key, and the application ID scope value.
Step 4: Connect the devices to IoT Central
Step 5: Associate the devices to a template and approve the connections
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/concepts-get-connected

Question #5*Topic 2*

You have an Azure IoT Central application.
You need to connect an IoT device to the application.
Which two settings do you require in IoT Central to configure the device? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Group SAS Primary Key
- B. the IoT hub name
- C. Scope ID
- D. Application Name
- E. Device ID

**Correct Answer:** *AC* 
Required connection information:
✑ Group primary key: In your IoT Central application, navigate to Administration > Device Connection > SAS-IoT-Devices. Make a note of the shared access signature Primary key value.
✑ ID scope: In your IoT Central application, navigate to Administration > Device Connection. Make a note of the ID scope value.
Reference:
https://docs.microsoft.com/bs-cyrl-ba/azure/iot-central/core/tutorial-connect-device-python

Question #6*Topic 2*

You have an existing Azure IoT hub.
You use IoT Hub jobs to schedule long running tasks on connected devices.
Which three operations do the IoT Hub jobs support directly? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. Trigger Azure functions.
- B. Invoke direct methods.
- C. Update desired properties.
- D. Send cloud-to-device messages.
- E. Disable IoT device registry entries.
- F. Update tags.

**Correct Answer:** *BCF* 
Consider using jobs when you need to schedule and track progress any of the following activities on a set of devices:
✑ Invoke direct methods
✑ Update desired properties
✑ Update tags
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-jobs

Question #7*Topic 2*

You have an Azure IoT hub.
You need to recommend a solution to scale the IoT hub automatically.
What should you include in the recommendation?

- A. Create an SMS alert in IoT Hub for the Total number of messages used metric.
- B. Create an Azure function that retrieves the quota metrics of the IoT hub.
- C. Configure autoscaling in Azure Monitor.
- D. Emit custom metrics from the IoT device code and create an Azure Automation runbook alert.

**Correct Answer:** *B* 
Note: IoT Hub is scaled and priced based on an allowed number of messages per day across all devices connected to that IoT Hub. If you exceed the allowed message threshold for your chosen tier and number of units, IoT Hub will begin rejecting new messages. To date, there is no built-in mechanism for automatically scaling an IoT Hub to the next level of capacity if you approach or exceed that threshold.
Reference:
https://docs.microsoft.com/en-us/samples/azure-samples/iot-hub-dotnet-autoscale/iot-hub-dotnet-autoscale/

Question #8*Topic 2*

You have an Azure IoT hub that uses a Device Provisioning Service instance.
You create a new individual device enrollment that uses symmetric key attestation.
Which detail from the enrollment is required to auto provision the device by using the Device Provisioning Service?

- A. the registration ID of the enrollment
- B. the primary key of the enrollment
- C. the device identity of the IoT hub
- D. the hostname of the IoT hub

**Correct Answer:** *A* 
The registration ID is used to uniquely identify a device registration with the Device Provisioning Service. The device ID must be unique in the provisioning service
ID scope. Each device must have a registration ID.
Note: An individual enrollment is an entry for a single device that may register. Individual enrollments may use either X.509 leaf certificates or SAS tokens (from a physical or virtual TPM) as attestation mechanisms. The registration ID in an individual enrollment is alphanumeric, lowercase, and may contain hyphens.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/concepts-service#enrollment

Question #9*Topic 2*

You have an Azure IoT hub that uses a Device Provisioning Service instance to automate the deployment of Azure IoT Edge devices.
The IoT Edge devices have a Trusted Platform Module (TPM) 2.0 chip.
From the Azure portal, you plan to add an individual enrollment to the Device Provisioning Service that will use the TPM of the IoT Edge devices as the attestation mechanism.
Which detail should you obtain before you can create the enrollment?

- A. the scope ID and the Device Provisioning Service endpoint
- B. the primary key of the Device Provisioning Service shared access policy and the global device endpoint
- C. the X.509 device certificate and the certificate chain
- D. the endorsement key and the registration ID

**Correct Answer:** *D* 
The TPM simulator's Registration ID and the Endorsement key, are used when you create an individual enrollment for your device.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-auto-provision-simulated-device-linux

Question #10*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have devices that connect to an Azure IoT hub. Each device has a fixed GPS location that includes latitude and longitude.
You discover that a device entry in the identity registry of the IoT hub is missing the GPS location.
You need to configure the GPS location for the device entry. The solution must prevent the changes from being propagated to the physical device.
Solution: You use an Azure policy to apply tags to a resource group.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead tags should be added to the Device twin.
Tags: A section of the JSON document that the solution back end can read from and write to. Tags are not visible to device apps.
Reference:
https://docs.microsoft.com/de-de/azure/iot-hub/iot-hub-devguide-device-twins https://azure.microsoft.com/sv-se/blog/deep-dive-into-azure-iot-hub-notifications-and-device-twin/

Question #11*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have devices that connect to an Azure IoT hub. Each device has a fixed GPS location that includes latitude and longitude.
You discover that a device entry in the identity registry of the IoT hub is missing the GPS location.
You need to configure the GPS location for the device entry. The solution must prevent the changes from being propagated to the physical device.
Solution: You add tags to the device twin.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
Tags are not synced.
Tags: A section of the JSON document that the solution back end can read from and write to. Tags are not visible to device apps.
Reference:
https://docs.microsoft.com/de-de/azure/iot-hub/iot-hub-devguide-device-twins https://azure.microsoft.com/sv-se/blog/deep-dive-into-azure-iot-hub-notifications-and-device-twin/

Question #12*Topic 2*

You have an existing Azure IoT hub.
You use IoT Hub jobs to schedule long running tasks on connected devices.
Which two operations do the IoT Hub jobs support directly? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. Trigger Azure functions.
- B. Invoke direct methods.
- C. Update desired properties.
- D. Send cloud-to-device messages.
- E. Disable IoT device registry entries.

**Correct Answer:** *BC* 
Consider using jobs when you need to schedule and track progress any of the following activities on a set of devices:
✑ Invoke direct methods

Update desired properties -
![img](https://www.examtopics.com/assets/media/exam-media/04123/0004600002.png)
✑ Update tags
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-jobs

Question #13*Topic 2*

You have 1,000 IoT devices that connect to an Azure IoT hub.
Each device has a property tag named city that is used to store the location of the device.
You need to update the properties on all the devices located at an office in the city of Seattle as quickly as possible. Any new devices in the Seattle office that are added to the IoT hub must receive the updated properties also.
What should you do?

- A. From Automatic Device Management, create an IoT device configuration.
- B. From the IoT hub, generate a query for the target devices.
- C. Create a scheduled job by using the IoT Hub service SDKs.
- D. Deploy an Azure IoT Edge transparent gateway to the Seattle office and deploy an Azure Stream Analytics edge job.

**Correct Answer:** *A* 
Automatic device management in Azure IoT Hub automates many of the repetitive and complex tasks of managing large device fleets. With automatic device management, you can target a set of devices based on their properties, define a desired configuration, and then let IoT Hub update the devices when they come into scope. This update is done using an automatic device configuration or automatic module configuration, which lets you summarize completion and compliance, handle merging and conflicts, and roll out configurations in a phased approach.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-automatic-device-management

Question #14*Topic 2*

You have an Azure IoT Central application.
You add an IoT device named Oven1 to the application. Oven1 uses an IoT Central template for industrial ovens.
You need to send an email to the managers group at your company as soon as the oven temperature falls below 400 degrees.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Create a SendGrid account in the same resource group as the IoT Central application.
- B. Add a condition that has Time Aggregation set to Off.
- C. Add a condition that has Aggregation set to Minimum.
- D. Add the Manager role to the IoT Central application.
- E. From IoT Central, create a telemetry rule for the template.

**Correct Answer:** *BE* 
Devices use telemetry to send numerical data from the device. A rule triggers when the selected telemetry crosses a specified threshold.
E: To create a telemetry rule, the device template must include at least one telemetry value. The rule monitors the temperature reported by the device and sends an email when it falls below 400 degrees.
B: Configure the rule conditions.
Conditions define the criteria that the rule monitors. In this tutorial, you configure the rule to fire when the temperature exceeds 70ֲ° F.

1. Select Temperature in the Telemetry dropdown.
2. Next, choose Is less than as the Operator and enter 400 as the Value.

![img](https://www.examtopics.com/assets/media/exam-media/04123/0004900001.jpg)

3. Optionally, you can set a Time aggregation. When you select a time aggregation, you must also select an aggregation type, such as average or sum from the aggregation drop-down.

✑ Without aggregation, the rule triggers for each telemetry data point that meets the condition.
✑ With aggregation, the rule triggers if the aggregate value of the telemetry data points in the time window meets the condition.
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/tutorial-create-telemetry-rules

Question #15*Topic 2*

You have an Azure IoT solution that includes multiple Azure IoT hubs in different geographic locations and a single Device Provision Service instance.
You need to configure device enrollment to assign devices to the appropriate IoT hub based on the following requirements:
✑ The registration ID of the device
The geographic location of the device
![img](https://www.examtopics.com/assets/media/exam-media/04123/0004900005.png)
The load between the IoT hubs in the same geographic location must be balanced.
What should you use to assign the devices to the IoT hubs?

- A. Static configuration (via enrollment list only)
- B. Lowest latency
- C. Evenly weighted distribution
- D. Custom (Use Azure Function)

**Correct Answer:** *A* 
Set the Device Provisioning Service allocation policy
The allocation policy is a Device Provisioning Service setting that determines how devices are assigned to an IoT hub. There are three supported allocation policies:
✑ Lowest latency: Devices are provisioned to an IoT hub based on the hub with the lowest latency to the device.
✑ Evenly weighted distribution (default): Linked IoT hubs are equally likely to have devices provisioned to them. This is the default setting. If you are provisioning devices to only one IoT hub, you can keep this setting.
✑ Static configuration via the enrollment list: Specification of the desired IoT hub in the enrollment list takes priority over the Device Provisioning Service-level allocation policy.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/tutorial-provision-multiple-hubs

Question #16*Topic 2*

You are developing an Azure IoT Central application.
You add a new custom device template to the application.
You need to add a fixed location value to the device template. The value must be updated by the physical IoT device, read-only to device operators, and not graphed by IoT Central.
What should you add to the device template?

- A. a Location property
- B. a Location telemetry
- C. a Cloud property

**Correct Answer:** *A* 
For example, a builder can create a device template for a connected fan that has the following characteristics:
✑ Sends temperature telemetry
✑ Sends location property
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/howto-set-up-template

Question #17*Topic 2*

DRAG DROP -
You have an Azure IoT solution that includes an Azure IoT hub, a Device Provisioning Service instance, and 1,000 connected IoT devices. The IoT devices are allocated to four enrollment groups. Each enrollment group is configured to use certificate attestation.
You need to decommission all the devices in a single enrollment group and the enrollment group itself.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0005100003.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0005200001.png)*
To deprovision all of the devices that have been provisioned through an enrollment group:

1. Disable the enrollment group to disallow its signing certificate.
2. Use the list of provisioned devices for that enrollment group to disable or delete each device from the identity registry of its respective IoT hub.
3. After disabling or deleting all devices from their respective IoT hubs, you can optionally delete the enrollment group. Be aware, though, that, if you delete the enrollment group and there is an enabled enrollment group for a signing certificate higher up in the certificate chain of one or more of the devices, those devices can re-enroll.

Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/how-to-unprovision-devices

Question #18*Topic 2*

You have an Azure IoT hub that uses a Device Provision Service instance.
You plan to deploy 100 IoT devices.
You need to confirm the identity of the devices by using the Device Provision Service.
Which three device attestation mechanisms can you use? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. X.509 certificates
- B. Trusted Platform Module (TPM) 2.0
- C. Trusted Platform Module (TPM) 1.2
- D. Symmetric key
- E. Device Identity Composition Engine (DICE)

**Correct Answer:** *ABD* 
The Device Provisioning Service supports the following forms of attestation:
✑ X.509 certificates based on the standard X.509 certificate authentication flow.
✑ Trusted Platform Module (TPM) based on a nonce challenge, using the TPM 2.0 standard for keys to present a signed Shared Access Signature (SAS) token.
This does not require a physical TPM on the device, but the service expects to attest using the endorsement key per the TPM spec.
✑ Symmetric Key based on shared access signature (SAS) Security tokens, which include a hashed signature and an embedded expiration.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/concepts-service#attestation-mechanism

Question #19*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have a Standard tier Azure IoT hub and a fleet of IoT devices.
The devices connect to the IoT hub by using either Message Queuing Telemetry Transport (MQTT) or Advanced Message Queuing Protocol (AMQP).
You need to send data to the IoT devices and each device must respond. Each device will require three minutes to process the data and respond.
Solution: You update the twin desired property and check the corresponding reported property.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
IoT Hub provides three options for device apps to expose functionality to a back-end app:
✑ Twin's desired properties for long-running commands intended to put the device into a certain desired state. For example, set the telemetry send interval to 30 minutes.
✑ Direct methods for communications that require immediate confirmation of the result. Direct methods are often used for interactive control of devices such as turning on a fan.
✑ Cloud-to-device messages for one-way notifications to the device app.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-c2d-guidance

Question #20*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have a Standard tier Azure IoT hub and a fleet of IoT devices.
The devices connect to the IoT hub by using either Message Queuing Telemetry Transport (MQTT) or Advanced Message Queuing Protocol (AMQP).
You need to send data to the IoT devices and each device must respond. Each device will require three minutes to process the data and respond.
Solution: You use direct methods and check the response.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
IoT Hub provides three options for device apps to expose functionality to a back-end app:
✑ Twin's desired properties for long-running commands intended to put the device into a certain desired state. For example, set the telemetry send interval to 30 minutes.
✑ Direct methods for communications that require immediate confirmation of the result. Direct methods are often used for interactive control of devices such as turning on a fan.
✑ Cloud-to-device messages for one-way notifications to the device app.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-c2d-guidance

Question #21*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have a Standard tier Azure IoT hub and a fleet of IoT devices.
The devices connect to the IoT hub by using either Message Queuing Telemetry Transport (MQTT) or Advanced Message Queuing Protocol (AMQP).
You need to send data to the IoT devices and each device must respond. Each device will require three minutes to process the data and respond.
Solution: You use cloud-to-device messages and watch the cloud-to-device feedback endpoint for successful acknowledgement.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
IoT Hub provides three options for device apps to expose functionality to a back-end app:
✑ Twin's desired properties for long-running commands intended to put the device into a certain desired state. For example, set the telemetry send interval to 30 minutes.
✑ Direct methods for communications that require immediate confirmation of the result. Direct methods are often used for interactive control of devices such as turning on a fan.
✑ Cloud-to-device messages for one-way notifications to the device app.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-c2d-guidance

Question #22*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub, a Device Provisioning Service instance, and 1,000 connected IoT devices.
All the IoT devices are provisioned automatically by using one enrollment group.
You need to temporarily disable the IoT devices from connecting to the IoT hub.
Solution: You disconnect the Device Provisioning Service from the IoT hub.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead, from the Device Provisioning Service, you disable the enrollment group, and you disable device entries in the identity registry of the IoT hub to which the
IoT devices are provisioned.
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-unprovision-devices

Question #23*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have devices that connect to an Azure IoT hub. Each device has a fixed GPS location that includes latitude and longitude.
You discover that a device entry in the identity registry of the IoT hub is missing the GPS location.
You need to configure the GPS location for the device entry. The solution must prevent the changes from being propagated to the physical device.
Solution: You add the desired properties to the device twin.
Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead add tags to the device twin. Desired properties are synced, while tags are not.
Incorrect Answers:
A: Device Twins are used to synchronize state between an IoT solution's cloud service and its devices. Each device's twin exposes a set of desired properties and reported properties. The cloud service populates the desired properties with values it wishes to send to the device. When a device connects it requests and/or subscribes for its desired properties and acts on them.
Reference:
https://docs.microsoft.com/de-de/azure/iot-hub/iot-hub-devguide-device-twins https://azure.microsoft.com/sv-se/blog/deep-dive-into-azure-iot-hub-notifications-and-device-twin/

Question #24*Topic 2*

You have three Azure IoT hubs named Hub1, Hub2, and Hub3, a Device Provisioning Service instance, and an IoT device named Device1.
Each IoT hub is deployed to a separate Azure region.
Device enrollment uses the Lowest latency allocation policy.
The Device Provisioning Service uses the Lowest latency allocation policy.
Device1 is auto-provisioned to Hub1 by using the Device Provisioning Service.
Device1 regularly moves between regions.
You need to ensure that Device1 always connects to the IoT hub that has the lowest latency.
What should you do?

- A. Configure device attestation that uses X.509 certificates.
- B. Implement device certificate rolling.
- C. Disenroll and reenroll Device1.
- D. Configure the re-provisioning policy.

**Correct Answer:** *D* 
Automated re-provisioning support.
Microsoft added first-class support for device re-provisioning which allows devices to be reassigned to a different IoT solution sometime after the initial solution assignment. Re-provisioning support is available in two options:
✑ Factory reset, in which the device twin data for the new IoT hub is populated from the enrollment list instead of the old IoT hub. This is common for factory reset scenarios as well as leased device scenarios.
✑ Migration, in which device twin data is moved from the old IoT hub to the new IoT hub. This is common for scenarios in which a device is moving between geographies.
Reference:
https://azure.microsoft.com/en-us/blog/new-year-newly-available-iot-hub-device-provisioning-service-features/

Question #25*Topic 2*

You have an Azure IoT Central solution that includes multiple IoT devices. The devices report temperature, humidity, and pressure.
You need to export the sensor data captured during a 48-hour period as a CSV file.
What should you use in IoT Central?

- A. Devices
- B. Jobs
- C. Device groups
- D. Analytics

**Correct Answer:** *D* 
Azure IoT Central provides rich analytics capabilities to analyze historical trends and correlate telemetry from your devices. To get started, select Analytics on the left pane.
The analytics user interface has three main components:
✑ Data configuration panel: On the configuration panel, select the device group for which you want to analyze the data. Next, select the telemetry that you want to analyze and select the aggregation method for each telemetry. The Group By control helps to group the data by using device properties as dimensions.
✑ Time control: Use the time control to select the duration for which you want to analyze the data.
✑ Chart control: The chart control visualizes the data as a line chart.
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/howto-create-analytics

Question #26*Topic 2*

DRAG DROP -
You have an Azure IoT Central application.
You need to connect IoT devices that use SAS tokens to the application without first registering the devices.
In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0006000001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0006100001.jpg)* 
Automatically register devices that use SAS tokens:
Step 1: Obtain the group primary key

1. Copy the group primary key from the SAS-IoT-Devices enrollment group:

![img](https://www.examtopics.com/assets/media/exam-media/04123/0006200001.jpg)
Step 2: Generate device SAS Keys.

2. Use the az iot central device compute-device-key command to generate the device SAS keys. Use the group primary key from the previous step.

Step 3: Flash unique credentials to the devices.

3. As an OEM, flash each device with the device ID, the generated device SAS key, and the application ID scope value. The device code should also send the model ID of the device model it implements.

Step 4: Connect the devices to IoT Central

4. When you switch on a device, it first connects to DPS to retrieve its IoT Central registration information.
5. The device uses the information from DPS to connect to, and register with, your IoT Central application.

Step 5: Associate the devices to a template and approve the connections.
The IoT Central application uses the model ID sent by the device to associate the registered device with a device template.
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/concepts-get-connected

Question #27*Topic 2*

HOTSPOT
\-

You have an Azure IoT Edge automatic deployment named D1 that deploys a temperature module to five IoT Edge devices.

D1 has a deployment priority of 10 and the following module configuration.

![img](https://img.examtopics.com/az-220/image17.png)

You need to create a new layered deployment that will add a new twin property named ReportingMode. The new deployment must not overwrite the existing module configurations set by D1.

How should you configure the deployment? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image18.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image19.png)* 

Question #28*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have a Standard tier Azure IoT hub and a fleet of IoT devices.

The devices connect to the IoT hub by using either Message Queuing Telemetry Transport (MQTT) or Advanced Message Queuing Protocol (AMQP).

You need to send data to the IoT devices and each device must respond. Each device will require three minutes to process the data and respond.

Solution: You schedule an IoT Hub job to update the twin tags and you query for job progress.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #29*Topic 2*

You have an Azure IoT solution that includes an Azure IoT hub and a Device Provisioning Service instance.

Several enrolled devices are stolen.

You need to prevent the stolen devices from connecting to the IoT solution. The solution must prevent the devices from re-enrollment and must be implemented as soon as possible.

What should you do?

- A. Delete the devices from the IoT hub.
- B. Delete the device enrollments from the Device Provisioning Service.
- C. Disable the devices in the IoT hub and delete from the IoT hub.
- D. Disable the device enrollments in the Device Provisioning Service and delete the devices from the IoT hub.

**Correct Answer:** *B* 

Question #30*Topic 2*

You have an Azure IoT hub that uses a Device Provisioning Service instance.

You create a new individual device enrollment that uses symmetric key attestation.

Which detail from the enrollment is required to auto provision the device by using the Device Provisioning Service?

- A. the registration ID and the primary key of the enrollment
- B. the primary key and the secondary key of the enrollment
- C. the IoT Hub Device ID
- D. the hostname of the IoT hub

**Correct Answer:** *A* 

Question #31*Topic 2*

DRAG DROP
\-

You have an Azure IoT hub.

You need to deploy a Device Provisioning Service instance that uses X.509 attestation to support new IoT devices.

Which three actions should you perform in sequence in the Azure portal? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

![img](https://img.examtopics.com/az-220/image20.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image21.png)* 

Question #32*Topic 2*

HOTSPOT
\-

You have four physical IoT devices that connect to an Azure IoT hub named iothub1. The devices are configured as shown in the following table.

![img](https://img.examtopics.com/az-220/image22.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image23.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image24.png)* 

Question #33*Topic 2*

DRAG DROP
\-

You need to configure a digital twin to accept device telemetry data from the IoT hub.

Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

![img](https://img.examtopics.com/az-220/image25.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image26.png)* 

Question #34*Topic 2*

You have an Azure IoT Central solution.

You need to verify that telemetry messages from devices arrive to IoT Central.

What should you use?

- A. the Azure IoT explorer
- B. the az command in Azure CLI
- C. Azure Service Bus Explorer
- D. the Azure IoT Tools for VS Code extension pack

**Correct Answer:** *B* 

Question #35*Topic 2*

You have an Azure IoT hub.

You need to configure an event subscription that will call an Azure logic app when a new device connects to the hub.

Which Endpoint Type should you select?

- A. Event Hubs
- B. Service Bus Queue
- C. Web Hook

**Correct Answer:** *C* 

Question #36*Topic 2*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have devices that connect to an Azure IoT hub. Each device has a fixed GPS location that includes latitude and longitude.

You discover that a device entry in the identity registry of the IoT hub is missing the GPS location.

You need to configure the GPS location for the device entry. The solution must prevent the changes from being propagated to the physical device.

Solution: You use an Azure policy to apply tags to IoTCentral/IoTApps objects.

Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #37*Topic 2*

HOTSPOT
\-

You have an Azure IoT Central application that has a custom device template.

You need to configure the device template to support the following activities:

• Return the reported power consumption.
• Configure the desired fan speed.
• Run the device reset routine.
• Read the fan serial number.

Which option should you use for each activity? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image27.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image28.png)* 

Question #38*Topic 2*

You have an Azure IoT hub that uses a Device Provisioning Service (DPS) instance.

For 100 legacy devices, you plan to create a new device enrollment that will use symmetric key attestation. The solution must minimize administrative effort.

What should you use to derive the device key?

- A. the subscription ID
- B. the IoT hub name
- C. the group master key
- D. the primary key of the DPS shared access policy

**Correct Answer:** *D* 

Question #39*Topic 2*

You have an Azure IoT solution that includes an Azure IoT hub named Hub1.

You plan to provision an IoT device named Device1 that will run Azure RTOS and the Azure IoT middleware for Azure RTOS. Device1 will be deployed to a remote network that contains a firewall named FW1.

You need to ensure that FW1 will allow Device1 to communicate with Hub1.

Which port should you open on FW1?

- A. 5671
- B. 5683
- C. 8080
- D. 8883

**Correct Answer:** *D* 

Question #40*Topic 2*

You have an Azure IoT Hub deployment.

You plan to deploy 1,000 IoT devices that will have 1 MB of RAM. The devices will be deployed behind firewalls that block port 443.

You need to configure the communication protocol for the devices. The solution must ensure that each device uses unique credentials.

Which protocol should you use?

- A. AMQP
- B. MQTT over WebSockets
- C. MQTT
- D. AMQP over WebSockets

**Correct Answer:** *C* 

Question #41*Topic 2*

You have an Azure subscription named Sub1 that contains five Azure IoT hubs in the basic tier.

You assign an Azure policy named Policy1 to Sub1. Policy1 ensures that when an IoT hub is deployed, a private endpoint is deployed for the IoT hub.

You need to ensure that Policy1 is applied to the existing IoT hubs. The solution must minimize administrative effort.

What should you do?

- A. Reassign Policy1.
- B. Run a remediation task.
- C. Upgrade the IoT hubs to the standard tier.
- D. Perform a manual failover of each IoT hub.

**Correct Answer:** *B* 

Question #42*Topic 2*

You have a project in Azure DevOps and five Azure IoT Edge devices.

You need to create a pipeline that will be used to implement Continuous Integration/Continuous Deployment (CI/CD) for the IoT Edge devices.

Which format should you use to create the pipeline definition?

- A. YAML
- B. JSON
- C. XML
- D. SGML

**Correct Answer:** *A* 

## Topic 3 - Question Set 3

Question #1*Topic 3*

HOTSPOT -
You have the following device twin for the IoT device.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0006500001.jpg)
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0006600001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0006600002.png)* 
Box1: Yes -

Box 2: Yes -
Fanspeed 73 is a reported property.

Box 3: No -
The deviceID property is read only.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins

Question #2*Topic 3*

You are deploying an Azure IoT Edge solution that includes multiple IoT Edge devices.
You need to configure module-to-module routing.
To which section of the deployment manifest should you add the routes?

- A. storeAndForwardConfiguration
- B. $edgeHub
- C. modules
- D. systemModules

**Correct Answer:** *B* 
Routes are declared in the $edgeHub desired properties.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-composition

Question #3*Topic 3*

You have an IoT device that has the following configurations:
✑ Hardware: Raspberry Pi
✑ Operating system: Raspbian
You need to deploy Azure IoT Edge to the device.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Update the IoT Edge runtime.
- B. Install the IoT Edge security daemon.
- C. Run the Deploy-IoTEdge PowerShell cmdlet on the IoT Edge device.
- D. Install the container runtime.

**Correct Answer:** *AB* 
The Azure IoT Edge runtime is what turns a device into an IoT Edge device. The runtime can be deployed on devices as small as a Raspberry Pi or as large as an industrial server.
The IoT Edge security daemon provides and maintains security standards on the IoT Edge device. The daemon starts on every boot and bootstraps the device by starting the rest of the IoT Edge runtime.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge

Question #4*Topic 3*

You develop a custom Azure IoT Edge module named temperature-module.
You publish temperature-module to a private container registry named mycr.azurecr.io
You need to build a deployment manifest for the IoT Edge device that will run temperature-module.
Which three container images should you define in the manifest? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. mcr.microsoft.com/azureiotedge-simulated-temperature-sensor:1.0
- B. mcr.microsoft.com/azureiotedge-agent:1.0
- C. mcr.microsoft.com/iotedgedev:2.0
- D. mycr.azurecr.io/temperature-module:latest
- E. mcr.microsoft.com/azureiotedge-hub:1.0

**Correct Answer:** *BDE* 
Each IoT Edge device runs at least two modules: $edgeAgent and $edgeHub, which are part of the IoT Edge runtime. IoT Edge device can run multiple additional modules for any number of processes. Use a deployment manifest to tell your device which modules to install and how to configure them to work together.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-composition

Question #5*Topic 3*

DRAG DROP -
You need to install the Azure IoT Edge runtime on a new device that runs Windows 10 IoT Enterprise.
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0007000001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0007100001.jpg)*
Step 1: From Azure IoT Hub, create an IoT Edge Device

Step 2: Deploy-IoTEdge -
The Deploy-IoTEdge command checks that your Windows machine is on a supported version, turns on the containers feature, and then downloads the moby runtime and the IoT Edge runtime. The command defaults to using Windows containers.
{Invoke-WebRequest -useb https://aka.ms/iotedge-win} | Invoke-Expression; `

Deploy-IoTEdge -

Step 3: Initialize-IoTEdge -
The Initialize-IoTEdge command configures the IoT Edge runtime on your machine. The command defaults to manual provisioning with Windows containers.
{Invoke-WebRequest -useb https://aka.ms/iotedge
Step 4: Enter the IoT Edge device connection string.
When prompted, provide the device connection string that you retrieved in step 1. The device connection string associates the physical device with a device ID in
IoT Hub.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-composition

Question #6*Topic 3*

You have an Azure IoT solution that includes an Azure IoT Hub named Hub1 and an Azure IoT Edge device named Edge1. Edge1 connects to Hub1.
You need to deploy a temperature module to Edge1.
What should you do?

- A. From the Azure portal, navigate to Hub1 and select IoT Edge. Select Edge1, and then select Manage Child Devices. From a Bash prompt, run the following command: az iot edge set-modules --device-id Edge1 --hub-name Hub1 --content deploymentMan1.json
- B. Create an IoT Edge deployment manifest that specifies the temperature module and the route to $upstream. From a Bash prompt, run the following command: az iot hub monitor-events --device-id Edge1 --hub-name Hub1
- C. From the Azure portal, navigate to Hub1 and select IoT Edge. Select Edge1, select Device Twin, and then set the deployment manifest as a desired property. From a Bash prompt, run the following command: az iot hub monitor-events --device-id Edge1 --hub-name Hub1
- D. Create an IoT Edge deployment manifest that specifies the temperature module and the route to $upstream. From a Bash prompt, run the following command: az iot edge set-modules --device-id Edge1 --hub-name Hub1 --content deploymentMan1.json

**Correct Answer:** *D* 
You deploy modules to your device by applying the deployment manifest that you configured with the module information.
Change directories into the folder where your deployment manifest is saved. If you used one of the VS Code IoT Edge templates, use the deployment.json file in the config folder of your solution directory and not the deployment.template.json file.
Use the following command to apply the configuration to an IoT Edge device: az iot edge set-modules --device-id [device id] --hub-name [hub name] --content [file path]
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-deploy-modules-cli

Question #7*Topic 3*

DRAG DROP -
Your company is creating a new camera security system that will use Azure IoT Hub.
You plan to use an Azure IoT Edge device that will run Ubuntu Server 18.04.
You need to configure the IoT Edge device.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0007400001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0007500001.jpg)*
Step1: Install the IoT edge repository for Ubuntu Server 18.04 on the physical device. From IoT hub, create a new IoT Edge device.
Prepare your device to access the Microsoft installation packages.
Install the repository configuration that matches your device operating system.
Ubuntu Server 18.04: curl https://packages.microsoft.com/config/ubuntu/18.04/multiarch/prod.list > ./microsoft-prod.list
In your IoT Hub in the Azure portal, IoT Edge devices are created and managed separately from IOT devices that are not edge enabled.

1. Sign in to the Azure portal and navigate to your IoT hub.
2. In the left pane, select IoT Edge from the menu.
3. Select Add an IoT Edge device.
4. Provide a descriptive device ID. Use the default settings to auto-generate authentication keys and connect the new device to your hub.
5. Select Save.

Step 2: Run the following commandsג€¦
Install the container runtime.
Azure IoT Edge relies on an OCI-compatible container runtime. For production scenarios, we recommended that you use the Moby-based engine provided below.
The Moby engine is the only container engine officially supported with Azure IoT Edge. Docker CE/EE container images are compatible with the Moby runtime.
Install the Moby engine.
sudo apt-get install moby-engine
Install the Moby command-line interface (CLI). The CLI is useful for development but optional for production deployments. sudo apt-get install moby-cli
Install the security daemon. The package is installed at /etc/iotedge/. sudo apt-get install iotedge
Step 3: Add the connection string to the /etc/iotedge/config.yaml file,..
To manually provision a device, you need to provide it with a device connection string that you can create by registering a new device in your IoT hub.
Open the configuration file.
sudo nano /etc/iotedge/config.yaml
Find the provisioning configurations of the file and uncomment the Manual provisioning configuration section. Update the value of device_connection_string with the connection string from your IoT Edge device.
Save and close the file.
After entering the provisioning information in the configuration file, restart the daemon: sudo systemctl restart iotedge
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge-linux

Question #8*Topic 3*

You have the devices shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0007700001.png)
You are implementing a proof of concept (POC) for an Azure IoT solution.
You need to deploy an Azure IoT Edge device as part of the POC.
On which two devices can you deploy IoT Edge? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. Device1
- B. Device2
- C. Device3
- D. Device4

**Correct Answer:** *BC* 
Azure IoT Edge runs great on devices as small as a Raspberry Pi3 to server grade hardware.
Tier 1.
The systems listed in the following table are supported by Microsoft, either generally available or in public preview, and are tested with each new release.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0007800001.png)
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/support

Question #9*Topic 3*

HOTSPOT -
You need to configure Azure IoT Edge module routing to ensure that modules route traffic as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0007900001.png)
How should you complete the IoT Edge module routes? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0008000001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0008100001.png)*
Box 1: $connectionModuled -
Add a route that tells the edge hub to route any message received by the IoT Edge device that was not sent by an IoT Edge module.

Box 2: $upstream -
Send messages to $upstream, which passes the messages to the connected IoT Hub.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-machine-learning-edge-06-custom-modules

Question #10*Topic 3*

DRAG DROP -
You have an Azure IoT Edge device named Edge1.
You need to configure the module container to link the module storage to the host storage.
How should you configure the deployment manifest? To answer, drag the appropriate keys to the correct targets. Each key may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0008200001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0008300001.jpg)*
Box 1: createOptions -
Every module has a settings property that contains the module image, an address for the container image in a container registry, and any createOptions to configure the image on startup.

Box 2: portbindings -
Use the PortBindings setting in the HostConfig group of the Docker container create options to map the exposed port in the module to a port on the host device.
For example, if you exposed port 8080 inside the module and want to map that to port 80 of the host device, the create options in the template.json file would look like the following example:
"createOptions": {
"HostConfig": {
"PortBindings": {
"8080/tcp": [
{
"HostPort": "80"
}
]
}
}
}
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-use-create-options

Question #11*Topic 3*

You are developing an Azure IoT solution for a shipping company. The company's ships will have sensors used for predictive maintenance. Some sensor devices will be MQTT-capable, and others will use Modbus.
Each ship has an internet connection that is available only when the ship is docked.
You create an Azure IoT hub.
You need to implement an IoT solution that uses Azure IoT Edge.
What should you do?

- A. Configure an IoT Edge gateway. Deploy an IoT Edge Modbus module. From the Azure portal, create IoT devices and add connection strings to the devices.
- B. Add the MQTT devices to the IoT hub and configure an IoT Edge gateway. From the IoT Edge gateway device, assign the MQTT devices as child devices of the gateway. Use the File upload feature of IoT Hub when internet connectivity is available.
- C. Add the MQTT devices to the IoT hub, configure an IoT Edge gateway, and set Enable connection to IoT Hub to Disable. From the IoT Edge gateway device, assign the MQTT devices as child devices of the gateway. Deploy the IoT Edge Modbus module.
- D. Add the MQTT devices to the IoT hub and configure an IoT Edge gateway. From the IoT Edge gateway device, assign the MQTT devices as child devices of the gateway. Deploy an IoT Edge Modbus module.

**Correct Answer:** *C* 
Note: If you want to connect IoT devices that use Modbus TCP or RTU protocols to an Azure IoT hub, you can use an IoT Edge device as a gateway. The gateway device reads data from your Modbus devices, then communicates that data to the cloud using a supported protocol.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0008400001.png)
Incorrect Answers:
A: The MQTT devices should be added to the IoT hub.
B: Need to use an IoT Edge Modbus module.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/deploy-modbus-gateway

Question #12*Topic 3*

HOTSPOT -
You have an Azure subscription that contains an Azure IoT hub, an Azure IoT Edge gateway, and 1,000 leaf devices. The leaf devices use a custom communication protocol that is NOT supported by the IoT hub.
You need to configure the gateway to meet the following requirements:
✑ Minimize the number of connections between the gateway and the IoT hub.
✑ Support addressing cloud-to-device messages to individual leaf devices.
How should you configure the gateway? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0008500003.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0008600001.jpg)* 
Box 1: Protocol translation -
In the protocol translation gateway pattern, only the IoT Edge gateway has an identity with IoT Hub. The translation module receives messages from downstream devices, translates them into a supported protocol, and then the IoT Edge device sends the messages on behalf of the downstream devices.
Box 2: Advanced MessageQueuing Protocol (AMQP)
Connection multiplexing - All devices connecting to IoT Hub through an IoT Edge gateway can use the same underlying connection. This multiplexing capability requires that the IoT Edge gateway uses AMQP as its upstream protocol.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-as-gateway

Question #13*Topic 3*

You have an Azure IoT Edge module named SampleModule that runs on a device named Device1.
You make changes to the code of SampleModule by using Microsoft Visual Studio Code.
You need to push the code to the container registry and then deploy the module to Device1.
Which two actions should you perform from Visual Studio Code? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Build and push the SampleModule code to the registry.
- B. Create a deployment for a single device.
- C. Generate a deployment manifest.
- D. Build an IoT Edge solution.
- E. Generate a shared access signature (SAS) token for Device1.

**Correct Answer:** *BC* 
C: Configure a deployment manifest. A deployment manifest is a JSON document that describes which modules to deploy, how data flows between the modules, and desired properties of the module twins.
B: You deploy modules to your device by applying the deployment manifest that you configured with the module information.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-deploy-modules-vscode

Question #14*Topic 3*

HOTSPOT -
You have an Azure subscription that contains an Azure IoT hub and two IoT devices named Device1 and Device2.
You plan to deploy an Azure IoT Edge gateway device named Gateway1.
You need to ensure that all device-to-cloud messages and twin change notifications from Device1 and Device2 to the IoT hub are routed by using Gateway1.
What tasks should you perform to configure the devices? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0008800001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0008900001.jpg)* 
Box 1: Device1 and Device2 -
Connection strings for downstream devices need the following components:
✑ The gateway device that the device connects through. Provide the hostname value from the IoT Edge gateway device's config file: GatewayHostName=
{gateway hostname}

Box 2: Gateway1 -
To deploy the IoT Edge hub module and configure it with routes to handle incoming messages from downstream devices, follow these steps:

1. In the Azure portal, navigate to your IoT hub.
2. Go to IoT Edge and select your IoT Edge device that you want to use as a gateway.
3. Select Set Modules.
4. On the Modules page, you can add any modules you want to deploy to the gateway device.
5. Select Next: Routes.
6. On the Routes page, make sure that there is a route to handle messages coming from downstream devices. For example:

A route that sends all messages, whether from a module or from a downstream device, to IoT Hub:

Name: allMessagesToHub -
Value: FROM /messages/* INTO $upstream
Box 3: FROM /messages/* INTO $upstream
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device

Question #15*Topic 3*

DRAG DROP -
Your company develops a custom module and exports the module as a Linux Dockerfile.
You need to deploy the module to an Azure IoT Edge device that runs Ubuntu Server 18.04.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009000001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0009100001.png)*
Step 1: From Microsoft Visual Studio Code,ג€¦
The Azure IoT Tools extension provides project templates for all supported IoT Edge module languages in Visual Studio Code. These templates have all the files and code that you need to deploy a working module to test IoT Edge, or give you a starting point to customize the template with your own business logic.
Step 2: Build and push the module to Azure Container Registry
Build and push your solution. Review the module code and the deployment. Then build the SampleModule container image and push it to your container registry.
Step 3: Create a deployment for the IoT Edge device.
Verify that the built container images are stored in your container registry, then deploy the modules to the device.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-develop-for-linux?view=iotedge-2020-11

Question #16*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You are developing a custom Azure IoT Edge module.
The module needs to identify the device ID of the local device.
Solution: You configure the module to read the IOTEDGE_DEVICEID environment variable.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
The Azure ID of the current device is available on the IOTEDGE_DEVICEID environment variable.
Instead read the device ID of the device twin.
Note: Device twins are JSON documents that store device state information including metadata, configurations, and conditions. Azure IoT Hub maintains a device twin for each device that you connect to IoT Hub.
Device identity properties. The root of the device twin JSON document contains the read-only properties from the corresponding device identity stored in the identity registry.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins

Question #17*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You are developing a custom Azure IoT Edge module.
The module needs to identify the device ID of the local device.
Solution: You configure the module to read the ProductInfo property of ModuleClient.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead read the device ID of the device twin.
Note: Device twins are JSON documents that store device state information including metadata, configurations, and conditions. Azure IoT Hub maintains a device twin for each device that you connect to IoT Hub.
Device identity properties. The root of the device twin JSON document contains the read-only properties from the corresponding device identity stored in the identity registry.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins

Question #18*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You are developing a custom Azure IoT Edge module.
The module needs to identify the device ID of the local device.
Solution: You configure the module to read the device ID of the device twin.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
Device twins are JSON documents that store device state information including metadata, configurations, and conditions. Azure IoT Hub maintains a device twin for each device that you connect to IoT Hub.
Device identity properties. The root of the device twin JSON document contains the read-only properties from the corresponding device identity stored in the identity registry.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins

Question #19*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub and an Azure IoT Edge device.
You plan to deploy 10 Bluetooth sensors. The sensors do not support MQTT, AMQP, or HTTPS.
You need to ensure that all the sensors appear in the IoT hub as a single device.
Solution: You configure the IoT Edge device as an IoT Edge transparent gateway. You configure the sensors to connect to the device.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
IoT Edge transparent gateways support only the MQTT or AMQP protocols.
Instead use a translation gateway.
IoT Hub. The translation module receives messages from downstream devices, translates them into a supported protocol, and then the IoT Edge device sends the messages on behalf of the downstream devices. All information looks like it is coming from one device, the gateway.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-as-gateway

Question #20*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure IoT solution that includes an Azure IoT hub and an Azure IoT Edge device.
You plan to deploy 10 Bluetooth sensors. The sensors do not support MQTT, AMQP, or HTTPS.
You need to ensure that all the sensors appear in the IoT hub as a single device.
Solution: You configure the sensors to connect directly to the IoT hub.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Instead use a translation gateway.
Note: In the protocol translation gateway pattern, only the IoT Edge gateway has an identity with IoT Hub. The translation module receives messages from downstream devices, translates them into a supported protocol, and then the IoT Edge device sends the messages on behalf of the downstream devices. All information looks like it is coming from one device, the gateway.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-as-gateway

Question #21*Topic 3*

You plan to develop modules for an Azure IoT Edge solution.

You need to recommend a development tool that supports the following:

• Node.js
• Module templates
• Development on Linux workstations

What should you recommend?

- A. the Azure IoT explorer
- B. Microsoft Visual Studio
- C. Microsoft Visual Studio Online
- D. Microsoft Visual Studio Code

**Correct Answer:** *C* 

Question #22*Topic 3*

You have an Azure subscription that contains an Azure IoT hub and two Azure IoT Edge devices named Device1 and Device2.

You need to ensure that the IoT hub only accepts connections from Device1 and Device2.

What should you configure?

- A. Azure API Management
- B. Azure Active Directory (Azure AD) Identity Protection
- C. Azure Defender for IoT
- D. an IP filter

**Correct Answer:** *B* 

Question #23*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution that includes an Azure IoT hub and an Azure IoT Edge device.

You plan to deploy 10 Bluetooth sensors. The sensors do not support MQTT, AMQP, or HTTPS.

You need to ensure that all the sensors appear in the IoT hub as a single device.

Solution: You configure the IoT Edge device as an IoT Edge identity translation gateway. You configure the sensors to connect to the device.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #24*Topic 3*

You have an Azure IoT Edge module named SampleModule that runs on a device named Device1.

You make changes to the code of SampleModule by using Microsoft Visual Studio Code.

You need to push the code to the container registry and then deploy the module to Device1.

Which two actions should you perform from Visual Studio Code? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

- A. Build and push the SampleModule code to the registry.
- B. Create a deployment for a single device.
- C. Upload to Azure Storage.
- D. Build an IoT Edge solution.
- E. Generate a shared access signature (SAS) token for Device1.

**Correct Answer:** *BD* 

Question #25*Topic 3*

HOTSPOT
\-

You have two IoT edge devices named Edge1 and Edge2.

The routing requirements for each device are shown in the following table.

![img](https://img.examtopics.com/az-220/image29.png)

You need to configure the routes for Edge1 and Edge2.

How should you complete the routes? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image30.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image31.png)* 

Question #26*Topic 3*

You have an IoT device that has the following configurations:

• Hardware: Raspberry Pi
• Operating system: Raspberry Pi OS

You need to deploy Azure IoT Edge to the device.

Which two actions should you perform? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

- A. Create a module twin configuration
- B. Install the IoT Edge security daemon.
- C. Run the az iot hub module-identity update command.
- D. Install the container runtime.

**Correct Answer:** *BD* 

Question #27*Topic 3*

You need to update the IoT Edge runtime by using rolling tags.

Which two actions should you perform? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

- A. On the IoT Edge device, remove the edgeHub and edgeAgent container images.
- B. Modify the systemModules section of the deployment manifest JSON file.
- C. On the IoT Edge device, update the security daemon.
- D. Add an update tag to the IoT Edge device twin.

**Correct Answer:** *AC* 

Question #28*Topic 3*

DRAG DROP
\-

You have sites that contain IoT devices as shown in the following table.

![img](https://img.examtopics.com/az-220/image32.png)

You have an Azure subscription.

You need to create the Azure IoT Edge devices shown in the following table.

![img](https://img.examtopics.com/az-220/image33.png)

Which type of gateway pattern should you use for each IoT Edge device? To answer, drag the appropriate gateway pattern types to the correct devices. Each pattern type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image34.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image35.png)* 

Question #29*Topic 3*

You have an Azure IoT solution.

You prepare a new Azure IoT Edge device for deployment to the solution.

You need to ensure that the device is configured to meet Azure best practices.

What should you do?

- A. From the IoT Edge device, run the iotedge check command.
- B. From the IoT Edge device, run the iotedge logs edgeAgent and iotedge logs edgeHub commands.
- C. From Azure Cloud Shell, run the Get-AzSecurityCompliance cmdlet.
- D. From Azure Cloud Shell, run the az iot edge deployment show command.

**Correct Answer:** *B* 

Question #30*Topic 3*

HOTSPOT
\-

You are developing an Azure IoT Edge solution that has the following requirements:

• Each IoT Edge device must be deployed behind a firewall that only allows internet access over port 443.
• The number of connections from each IoT Edge device to an Azure IoT hub must be minimized.
• Each IoT Edge device must act as a gateway for the leaf devices on a private network.
• The container solution must be supported by Microsoft in production.

What should you recommend as a container solution and an upstream protocol for the IoT Edge devices?

To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image36.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image37.png)* 

Question #31*Topic 3*

HOTSPOT
\-

You have an Azure IoT solution that contains an Azure IoT hub named Hub1.

You plan to deploy 10,000 devices that will each send the messages shown in the following table.

![img](https://img.examtopics.com/az-220/image39.png)

You need to configure what each device must use to the send the messages to Hub1.

What should you configure for each message type? To answer, select the appropriate options in the answer area.

NOTE: Each connect selection is worth one point.

![img](https://img.examtopics.com/az-220/image40.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image41.png)* 

Question #32*Topic 3*

DRAG DROP
\-

You have an Azure subscription that contains an Azure IoT hub and Azure IoT Edge devices.

You need to create a custom IoT Edge module and deploy the module to an IoT Edge device by using Microsoft Visual Studio Code.

Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

![img](https://img.examtopics.com/az-220/image42.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image43.png)* 

Question #33*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains an Azure IoT hub named Hub1 and an Azure IoT Edge device named Device1.

You need to configure Device1 to operate in extended offline mode and to support modifying the configuration of modules deployed to Device1 while the device offline.

Solution: From Azure Cloud Shell, you run the following Azure CLI command.

az lot edge set-modules --device-id Device1 --hub-name Hub1 --content deployment.json

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #34*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains an Azure IoT hub named Hub1 and an Azure IoT Edge device named Device1.

You need to configure Device1 to operate in extended offline mode and to support modifying the configuration of modules deployed to Device1 while the device offline.

Solution: From Device1, you edit the/etc/iotedge/config.yaml file, you modify the ConfigSource and LocalConfigPath environment variables in the agent section, and then you restart the IoT Edge security daemon.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #35*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains an Azure IoT hub named Hub1 and an Azure IoT Edge device named Device1.

You need to configure Device1 to operate in extended offline mode and to support modifying the configuration of modules deployed to Device1 while the device offline.

Solution: From Microsoft Visual Studio Code, you modify the deployment manifest and you configure the address of the localhost for the container registry in the runtime settings of edgeAgent. You deploy the manifest to Device1, and then you restart the device.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #36*Topic 3*

HOTSPOT
\-

You have an Azure IoT hub and three Azure IoT Edge devices. The device twin code for each device is shown in the following table. 

![img](https://img.examtopics.com/az-220/image45.png)

A standard automatic deployment is already applied. 

You have three layered deployments. The deployment code for each deployment is shown in the following table. 

![img](https://img.examtopics.com/az-220/image46.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image47.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image48.png)* 

Question #37*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You are developing a custom Azure IoT Edge module.

The module needs to identify the device ID of the local device.

Solution: You configure the module to issue an HTTP GET request to the IoT Hub REST API.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #38*Topic 3*

HOTSPOT
\-

You have an Azure IoT solution that contains the Azure IoT Edge devices shown in the following table.

![img](https://img.examtopics.com/az-220/image49.png)

You have the standard deployments and target conditions shown in the following table.

![img](https://img.examtopics.com/az-220/image50.png)

You have the modules shown in the following table.

![img](https://img.examtopics.com/az-220/image51.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image52.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image53.png)* 

Question #39*Topic 3*

HOTSPOT
\-

You have an Azure subscription that contains an Azure IoT hub named Hub1 and the IoT devices shown in the following table.

![img](https://img.examtopics.com/az-220/image54.png)

You have the automatic device configurations shown in the following table.

![img](https://img.examtopics.com/az-220/image55.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image56.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image57.png)* 

Question #40*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You plan to register an Azure loT Edge device by using X.509 self-signed certificates.

You need to provide the thumbprint for the primary and secondary certificates.

Solution: You generate a 40-hex character SHA1 hash for the certificates.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #41*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You plan to register an Azure loT Edge device by using X.509 self-signed certificates.

You need to provide the thumbprint for the primary and secondary certificates.

Solution: You generate a 64-hex character SHA256 hash for the certificates.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #42*Topic 3*

HOTSPOT
\-

You have an Azure IoT solution that includes an IoT device named Device1.

You need to enable an IoT Plug and Play app for Device1.

How should you complete the device connection? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image58.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image59.png)* 

Question #43*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You plan to register an Azure loT Edge device by using X.509 self-signed certificates.

You need to provide the thumbprint for the primary and secondary certificates.

Solution: You generate a 96-hex character SHA384 hash for the certificates.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #44*Topic 3*

DRAG DROP
\-

You have an Azure subscription that contains an Azure IoT Edge device named Edge1 and an Azure container registry named Registry1.

You need to configure Edge1 to connect to Registry1.

How should you complete the deployment manifest? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image114.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image115.png)* 

Question #45*Topic 3*

You have an Azure Stream Analytics workspace that contains a Stream Analytics job.

You need to create a JavaScript user-defined aggregate (UDA) method that will recalculate the UDA state based on the previous state and the current event values. The UDA method must be called when an event leaves a SLIDINGWINDOW.

Which UDA method should you use?

- A. deaccumulateState()
- B. accumulate()
- C. computeResult()
- D. deaccumulate()

**Correct Answer:** *D* 

Question #46*Topic 3*

You have an Azure IoT solution that contains an Azure IoT Edge device named Edge1.

Edge1 fails to start.

You connect to Edge1 and identify the following:
• The IoT Edge agent is running.
• The IoT Edge agent continually reports the following error: “Empty dconfig file.”
• No modules have started.

You need to ensure that Edge1 starts successfully.

What should you do?

- A. Update the /etc/hosts file for the host operating system and restart Edge1.
- B. Reapply the iotedge config and restart Edge1.
- C. Specify a DNS server for the container engine and restart Edge1.
- D. Restart the Docker service.

**Correct Answer:** *C* 

Question #47*Topic 3*

You are prototyping an IoT edge solution.

You are creating a deployment manifest for an IoT edge device that will connect to an Azure IoT hub.

Which two modules should you include in the manifest? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

- A. azureiotsecurity
- B. edgeHub
- C. opc-publisher
- D. edgeAgent
- E. iotedgeModbus

**Correct Answer:** *BD* 

Question #48*Topic 3*

You have an Azure IoT solution that contains a Device Provisioning Service (DPS) instance and 100 IoT devices.

You plan to configure firewall rules to ensure that the IoT devices only communicate with Azure IoT Hub DPS endpoints.

You need to retrieve the current IP address prefixes for the IoT Hub DPS endpoints.

What should you query?

- A. Azure service tags
- B. Microsoft Defender for Cloud
- C. Azure DNS
- D. Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra

**Correct Answer:** *A* 

Question #49*Topic 3*

You have an Azure IoT Edge device configured as a transparent gateway.

You need to define a connection string for a leaf device that uses symmetric key authentication.

Which parameters should you specify?

- A. HostName, Endpoint, GatewayHostName and CertificateThumbprint
- B. DeviceId, HostName, GatewayHostName, and SharedAccessKey
- C. DeviceId, Endpoint, SharedAccessKeyName and CertificateThumbprint
- D. DeviceId, Endpoint, GatewayHostName and SharedAccessKeyName

**Correct Answer:** *B* 

Question #50*Topic 3*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains an Azure IoT hub named Hub1 and an Azure IoT Edge device named Device1.

You need to configure Device1 to operate in extended offline mode and to support modifying the configuration of modules deployed to Device1 while the device offline.

Solution: From Device1, you run the following command.

sudo docker config create offline offline.conf

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

## Topic 4 - Question Set 4

Question #1*Topic 4*

You have 100 devices that connect to an Azure IoT hub.
You plan to use Azure functions to process all the telemetry messages from the devices before storing the messages.
You need to configure the functions binding for the IoT hub.
Which two configuration details should you use to configure the binding? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. the name of the resource group that contains the IoT hub
- B. the IoT hub's connection string shared access key that has Service connect permissions
- C. the connection string of the Azure Event Hub-compatible endpoint from the IoT Hub built-in endpoints
- D. the Azure Event-Hub compatible name

**Correct Answer:** *CD* 
EventHubName: Functions 2.x and higher. The name of the event hub. When the event hub name is also present in the connection string, that value overrides this property at runtime.
Connection: The name of an app setting that contains the connection string to the event hub's namespace. Copy this connection string by clicking the Connection
Information button for the namespace, not the event hub itself. This connection string must have send permissions to send the message to the event stream.
Reference:
https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-iot-output

Question #2*Topic 4*

HOTSPOT -
You have an Azure IoT hub named Hub1 and an Azure Time Series Insights environment named tsi1. Tsi1 connects to Hub1. The solution has been operational for 6 months.
Tsi1 is configured as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011100001.jpg)
Hub1 receives 1 million messages per day. Each message is up to 1 KB and is formatted as JSON.
Hub1 has seven days of retained telemetry.
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011200001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0011200002.png)* 
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-overview

Question #3*Topic 4*

DRAG DROP -
You have an instance of Azure Time Series Insights and an Azure IoT hub that receives streaming telemetry from IoT devices.
You need to configure Time Series Insights to receive telemetry from the devices.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011300001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0011300002.jpg)*
Step 1: Create a dedicated consumer group..
Add a consumer group to your IoT hub.
Applications use consumer groups to pull data from Azure IoT Hub. To reliably read data from your IoT hub, provide a dedicated consumer group that's used only by this Time Series Insights environment.
Step 2: Add a new Time Series Insights event source.

Add a new event source -

1. Sign in to the Azure portal.
2. In the left menu, select All resources. Select your Time Series Insights environment.
3. Under Settings, select Event Sources, and then select Add.
4. In the New event source pane, for Event source name, enter a name that's unique to this Time Series Insights environment. For example, enter event-stream.

Step 3: Configure the Time Series event source to connect to an existing IOT hub
Step 4: For Source, select IoT Hub.
Step 5: Select a value for Import option:
If you already have an IoT hub in one of your subscriptions, select Use IoT Hub from available subscriptions. This option is the easiest approach.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011500001.jpg)
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-how-to-add-an-event-source-iothub

Question #4*Topic 4*

You have 1,000 devices that connect to a standard tier Azure IoT hub.
All the devices are commissioned and send telemetry events to the built-in IoT Hub endpoint.
You configure message enrichment on the events endpoint and set the enrichment value to $twin.tags.ipV4.
When you inspect messages on the events endpoint, you discover that all the messages are stamped with a string of "$twin.tags.ipV4".
What are two possible causes of the issue? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. The ipV4 tag is a restricted twin property that is unavailable for message enrichment.
- B. A standard tier IoT hub does not support device twin properties in message enrichments.
- C. The device sending the message has no device twin.
- D. Message enrichment cannot be added to messages going to a built-in endpoint.
- E. The device twin path used for the value of the enrichment does not exist.
- F. The device twin property value used for message enrichment is set to "$twin.tags.ipV4".

**Correct Answer:** *CE* 
In some cases, if you are applying an enrichment with a value set to a tag or property in the device twin, the value will be stamped as a string value. For example, if an enrichment value is set to $twin.tags.field, the messages will be stamped with the string "$twin.tags.field" rather than the value of that field from the twin. This happens in the following cases:
✑ (C) Your IoT Hub is in the standard tier, but the device sending the message has no device twin.
✑ (E) Your IoT Hub is in the standard tier, but the device twin path used for the value of the enrichment does not exist. For example, if the enrichment value is set to $twin.tags.location, and the device twin does not have a location property under tags, the message is stamped with the string "$twin.tags.location".
✑ Your IoT Hub is in the basic tier. Basic tier IoT hubs do not support device twins.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-message-enrichments-overview

Question #5*Topic 4*

You have an Azure IoT hub.
You plan to implement IoT Hub events by using Azure Event Grid.
You need to send an email when the following events occur:
✑ Device Created
✑ Device Deleted
✑ Device Connected
✑ Device Disconnected
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. From the IoT hub, configure an event subscription that has API management as the Endpoint Type.
- B. From the IoT hub, configure an event subscription that has Web Hook as the Endpoint Type.
- C. Create an Azure logic app that has a Request trigger.
- D. From the IoT hub, configure an event subscription that has Service Bus Queue as the Endpoint Type.
- E. Create an Azure logic app that has a scheduled trigger.

**Correct Answer:** *BC* 
For non-telemetry events like DeviceConnected, DeviceDisconnected, DeviceCreated and DeviceDeleted, the Event Grid filtering can be used when creating the subscription.
C: Azure Event Grid enables you to react to events in IoT Hub by triggering actions in your downstream business applications.
A trigger, such as a Request trigger, is a specific event that starts your logic app.
Reference:
https://docs.microsoft.com/en-us/azure/event-grid/publish-iot-hub-events-to-logic-apps

Question #6*Topic 4*

HOTSPOT -
You create an Azure Stream Analytics job that has the following query.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011700001.png)
The job is configured to have an Azure IoT Hub input and an output to an Azure function.
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0011800001.png)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0011900001.png)* 
Box 1: Yes -
All time handling operations in Azure Stream Analytics are in UTC.

Box 2: No -
Tumbling windows are a series of fixed-sized, non-overlapping and contiguous time intervals.

Box 3: Yes -
Reference:
https://docs.microsoft.com/en-us/stream-analytics-query/time-management-azure-stream-analytics

Question #7*Topic 4*

DRAG DROP -
You need to install the Azure IoT Edge runtime on a new device that runs Windows 10 IoT Enterprise.
In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012000001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0012000002.png)*
Step 1: From Azure IoT hub, create an IoT Edge device
In the Azure Cloud Shell, enter the following command to create a device named myEdgeDevice in your hub. az iot hub device-identity create --device-id myEdgeDevice --edge-enabled --hub-name {hub_name}
View the connection string for your device, which links your physical device with its identity in IoT Hub. Copy the value of the connectionString key from the JSON output and save it. This value is the device connection string. You'll use this connection string to configure the IoT Edge runtime in the step 3.
Step 2: From an elevated PowerShell prompt, run the Deploy-IoTEdge cmdlet.
Install the Azure IoT Edge runtime on your IoT Edge device.

1. Run PowerShell as an administrator.
2. Run the Deploy-IoTEdge command, which performs the following tasks:

\- Checks that your Windows machine is on a supported version.
\- Turns on the containers feature.
\- Downloads the moby engine and the IoT Edge runtime.
Step 3: From an elevated PowerShell prompt, run the Initialize-IoTEdge cmdlet
Step 4: Enter the IoT Edge device connection string.
Configure the IoT Edge device with a device connection string.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/quickstart

Question #8*Topic 4*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure Stream Analytics job that receives input from an Azure IoT hub and sends the outputs to Azure Blob storage. The job has compatibility level
1.1 and six streaming units.
You have the following query for the job.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012100001.jpg)
You plan to increase the streaming unit count to 12.
You need to optimize the job to take advantage of the additional streaming units and increase the throughput.
Solution: You change the query to the following.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012200001.jpg)
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
Max number of Streaming Units with one step and with no partitions is 6.
Reference:
https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-parallelization

Question #9*Topic 4*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure Stream Analytics job that receives input from an Azure IoT hub and sends the outputs to Azure Blob storage. The job has compatibility level
1.1 and six streaming units.
You have the following query for the job.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012300001.jpg)
You plan to increase the streaming unit count to 12.
You need to optimize the job to take advantage of the additional streaming units and increase the throughput.
Solution: You change the query to the following.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012300002.jpg)
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Max number of Streaming Units with one step and with no partitions is 6.
Reference:
https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-parallelization

Question #10*Topic 4*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have an Azure Stream Analytics job that receives input from an Azure IoT hub and sends the outputs to Azure Blob storage. The job has compatibility level
1.1 and six streaming units.
You have the following query for the job.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012400001.jpg)
You plan to increase the streaming unit count to 12.
You need to optimize the job to take advantage of the additional streaming units and increase the throughput.
Solution: You change the compatibility level of the job to 1.2.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Max number of Streaming Units with one step and with no partitions is 6.
Reference:
https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-parallelization

Question #11*Topic 4*

You need to visualize Azure IoT Hub telemetry data by using Microsoft Power BI.
Which service should you connect to the IoT hub?

- A. Azure Event Grid
- B. SendGrid
- C. Azure Stream Analytics
- D. Azure Notification Hubs

**Correct Answer:** *C* 
You can use Microsoft Power BI to visualize real-time sensor data that your Azure IoT hub receives. To do so, you configure an Azure Stream Analytics job to consume the data from IoT Hub and route it to a dataset in Power BI.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-power-bi

Question #12*Topic 4*

You have an Azure subscription that contains an Azure Time Series Insights environment. The environment has the properties shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012500001.jpg)
You need to create a D.
Which two time series expressions can be correctly used as part of the query? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. $event.p1.String = 'abc'
- B. $event.p2 = 'abc'
- C. $event['p1'] != NULL
- D. $event.p4.p5 = 0.0

**Correct Answer:** *AC* 
Example: $event['p1'] != NULL -
['p1'] is the only token used. Interpreted as $event['p1'].Double != NULL
Incorrect Answers:
B: $event.p1 = 'abc'
Type mismatch.

D: $event.p4.p5 = 0.0 -
Invalid property reference syntax. A type must be specified on LHS of comparison.
Reference:
https://docs.microsoft.com/en-us/rest/api/time-series-insights/reference-time-series-expression-syntax

Question #13*Topic 4*

You have an Azure subscription that contains an Azure IoT hub, 500 IoT devices, and an Azure Time Series Insights Gen2 environment named Environment1.
You need to add calculated values to the Time Series Model.
What should you use?

- A. instances
- B. types
- C. hierarchies

**Correct Answer:** *B* 
Time Series Model types help you define variables or formulas for doing computations. Types are associated with a specific instance.
A type can have one or more variables. For example, a Time Series Model instance might be of type Temperature Sensor, which consists of the variables avg temperature, min temperature, and max temperature.
Incorrect Answers:
A: Time Series Model instances are virtual representations of the time series themselves.
In most cases, instances are uniquely identified by deviceId or assetId, which are saved as time series IDs.
C: Time Series Model hierarchies organize instances by specifying property names and their relationships.
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/concepts-model-overview

Question #14*Topic 4*

You have an Azure IoT solution that includes an Azure IoT hub named hub1.

You plan to deploy an Azure Time Series Insights Gen 2 environment and connect the environment to hub1.

You need to use the device ID from hub1 as the Time Series ID.

What should you set as the Time Series ID when creating the environment?

- A. device-id
- B. connection-device-id
- C. iothub-connection-device-id
- D. deviceId

**Correct Answer:** *C* 

Question #15*Topic 4*

You need to send data from an Azure IoT hub to Azure Digital Twins.

Which service should you use?

- A. Azure Time Series Insights
- B. Azure Stream Analytics
- C. Azure Service Bus
- D. Azure Functions

**Correct Answer:** *D* 

Question #16*Topic 4*

You have an Azure IoT hub that has 500 registered devices.

You need to send device twin change events to Azure Service Bus in real time.

Which blade of the IoT hub should you configure?

- A. Metrics
- B. Events
- C. Message routing
- D. Diagnostic settings

**Correct Answer:** *C* 

Question #17*Topic 4*

You have an Azure IoT Edge device that has a custom module named module1.

You need to modify the routes for module1.

Which section of the manifest should you modify?

- A. “$edgeAgent”
- B. “$edgeHub”
- C. “module1”

**Correct Answer:** *B* 

Question #18*Topic 4*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure Stream Analytics job that receives input from an Azure IoT hub and sends the outputs to Azure Blob storage. The job has compatibility level 1.1 and six streaming units.

You have the following query for the job.

![img](https://img.examtopics.com/az-220/image60.png)

You plan to increase the streaming unit count to 12.

You need to optimize the job to take advantage of the additional streaming units and increase the throughput.

Solution: You change the output destination to Microsoft Power BI.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #19*Topic 4*

HOTSPOT
\-

You have an Azure IoT hub and an IoT device. 

You are developing an IoT solution that will generate an alert when the IoT device leaves a geofenced area. The device sends telemetry in the following format. 

![img](https://img.examtopics.com/az-220/image62.png)

You create an Azure Stream Analytics job that uses telemetry input from the IoT hub and a reference input that contains the data shown in the following table. 

![img](https://img.examtopics.com/az-220/image63.png)

How should you complete the Stream Analytics query? To answer, select the appropriate options in the answer area. 

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image64.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image65.png)* 

Question #20*Topic 4*

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image66.png)

Event1 writes events to Sbq1 when an IoT device is deleted.

You need to ensure that messages that are NOT written to Sbq1 are copied to sbc1.

What should you configure on Event1?

- A. dead-lettering
- B. the expiration time for the event subscription
- C. retry policies

**Correct Answer:** *A* 

Question #21*Topic 4*

HOTSPOT
\-

You have an Azure solution that contains an Azure IoT Edge deployment.

You are configuring an Azure Stream Analytics Edge job as shown in the following exhibit.

![img](https://img.examtopics.com/az-220/image67.png)

How should you complete the query? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image68.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image69.png)* 

Question #22*Topic 4*

You have an Azure IoT solution that contains an Azure IoT hub and the Azure IoT Edge gateways shown in the following table.

![img](https://img.examtopics.com/az-220/image70.png)

You have the leaf devices shown in the following table.

![img](https://img.examtopics.com/az-220/image71.png)

The IoT hub receives the messages shown in the following table.

![img](https://img.examtopics.com/az-220/image72.png)

You plan to a deploy a new Azure Time Series Insights environment.

You need to recommend a Time Series ID property name to ensure that the telemetry of each device will be stored in a separate time series instance.

What should you recommend?

- A. Device ID
- B. Device ID and Asset ID
- C. Device ID and Gateway ID
- D. Device ID, Asset ID, and Temperature

**Correct Answer:** *B* 

Question #23*Topic 4*

You have an Azure IoT hub named hub1 and five IoT devices. The IoT devices connect to hub1 and send data that is formatted by using a proprietary binary format.

You need to convert the data to JSON before the data is sent to a downstream service. The solution must minimize administrative effort.

What should you use?

- A. an Azure Service Bus trigger
- B. a message enrichment
- C. an Azure IoT Central application
- D. an Azure function

**Correct Answer:** *D* 

Question #24*Topic 4*

You have an Azure IoT hub and an Azure virtual network.

You configure a private endpoint for the IoT hub.

You need to ensure that the IoT hub can send data to downstream services.

What should you create first?

- A. a consumer group
- B. a managed identity
- C. a message route
- D. an IP filter rule

**Correct Answer:** *A* 

Question #25*Topic 4*

DRAG DROP
\-

You have an Azure IoT hub named Hub1.

You have an Azure Stream Analytics job named Job1 that contains an Azure Machine Learning user-defined function named Function1.

Hub1 receives messages that contain two fields named field1 and field2.

You need to create a query in Job1 that will use field1 and field2 as input parameters for Function1.

Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

![img](https://img.examtopics.com/az-220/image116.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image117.png)* 

Question #26*Topic 4*

DRAG DROP
\-

You have an Azure Stream Analytics job that processes temperature data over time in minutes.

You need to detect persistent temperature anomalies by using Stream Analytics functions.

How should you complete the anomaly detection query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image118.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image119.png)* 

Question #27*Topic 4*

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image123.png)

You need to use a REST API calls to configure Hub1 to route all messages to container1.

What should you do first?

- A. Create a route.
- B. Create an Azure Service Bus queue.
- C. Retrieve the connection string of the storage account.
- D. Create a routing endpoint.

**Correct Answer:** *D* 

Question #28*Topic 4*

You have an Azure IoT hub.

You need to configure an Azure function that will process IoT Hub messages when the messages arrive at the IoT hub. The solution must NOT require additional services or solutions deployed.

Which type of trigger should you use?

- A. an HTTP trigger
- B. an Azure Event Grid trigger
- C. an Azure Event Hubs trigger
- D. an Azure Service Bus trigger

**Correct Answer:** *C* 

Question #29*Topic 4*

You are building an Azure IoT solution that will include an Azure IoT hub and will process environmental data for a multi-story building by using Azure Stream Analytics.

The IoT devices for the solution will provide the following data:

• Temperature
• Building
• Room
• Floor

You need to identify which data formats the IoT devices can use to send the data as an array.

What should you identify?

- A. Avro only
- B. JSON only
- C. XML only
- D. Avro and JSON only
- E. Avro, JSON, and XML

**Correct Answer:** *D* 

Question #30*Topic 4*

You have an Azure IoT solution that includes an Azure IoT hub named Hub1.

You need to create a custom endpoint for a message route. The endpoint must store a copy of each message received by Hub1. You want to achieve this goal by using the minimum amount of development effort.

Which type of endpoint should you use?

- A. Azure Files
- B. Azure Database for MySQL
- C. Azure SQL Database
- D. Azure Blob storage

**Correct Answer:** *D* 

## Topic 5 - Question Set 5

Question #1*Topic 5*

You have 10 IoT devices that connect to an Azure IoT hub named Hub1.
From Azure Cloud Shell, you run az iot hub monitor-events --hub-name Hub1 and receive the following error message: "az iot hub: 'monitor-events' is not in the 'az iot hub' command group. See 'az iot hub --help'."
You need to ensure that you can run the command successfully.
What should you run first?

- A. az iot hub monitor-feedback --hub-name Hub1
- B. az iot hub generate-sas-token --hub-name Hub1
- C. az iot hub configuration list --hub-name Hub1
- D. az extension add -name azure-cli-iot-ext

**Correct Answer:** *D* 
Execute az extension add --name azure-cli-iot-ext once and try again.
In order to read the telemetry from your hub by CLI, you have to enable IoT Extension with the following commands:
Add: az extension add --name azure-cli-iot-ext
Reference:
https://github.com/MicrosoftDocs/azure-docs/issues/20843

Question #2*Topic 5*

You have an Azure Stream Analytics job that connects to an Azure IoT hub named Hub1445 as a streaming data source. Hub1445 is configured as shown in the exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0013800001.jpg)
The Stream Analytics job fails to receive any messages from the IoT hub.
What should you do to resolve the issue?

- A. Disable the Route1 route.
- B. Enable the Route3 route.
- C. Disable the Route2 route.
- D. Enable the fallback route.

**Correct Answer:** *B* 
Events are not getting through as Route3, with an events Endpoint, is not enabled.
Note: Azure IoT Hub is a highly scalable publish-subscribe event ingestor optimized for IoT scenarios.
The default timestamp of events coming from an IoT Hub in Stream Analytics is the timestamp that the event arrived in the IoT Hub, which is
EventEnqueuedUtcTime.
Reference:
https://www.darenmay.com/office365/2019/01/27/azure-iot-streaming-analytics-data-lake-analytics-and-json.html

Question #3*Topic 5*

You are troubleshooting an Azure IoT hub.
You discover that some telemetry messages are dropped before they reach downstream processing.
You suspect that IoT Hub throttling is the root cause.
Which log in the Diagnostics settings of the IoT hub should you use to capture the throttling error events?

- A. Routes
- B. DeviceTelemetry
- C. Connections
- D. C2DCommands

**Correct Answer:** *B* 
The device telemetry category tracks errors that occur at the IoT hub and are related to the telemetry pipeline. This category includes errors that occur when sending telemetry events (such as throttling) and receiving telemetry events (such as unauthorized reader). This category cannot catch errors caused by code running on the device itself.
Note: The metric d2c.telemetry.ingress.sendThrottle is the number of throttling errors due to device throughput throttles.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-monitor-resource-health

Question #4*Topic 5*

You have 20 devices that connect to an Azure IoT hub.
You open Azure Monitor as shown in the exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0014000001.jpg)
You discover that telemetry is not being received from five IoT devices.
You need to identify the names of the devices that are not generating telemetry and visualize the data.
What should you do first?

- A. Add the Number of throttling errors metric and archive the logs to an Azure storage account.
- B. Configure diagnostics for Routes and stream the logs to Azure Event Hubs.
- C. Add the Telemetry messages sent metric and archive the logs to an Azure Storage account.
- D. Configure diagnostics for Connections and send the logs to Azure Log Analytics.

**Correct Answer:** *D* 
To log device connection events and errors, turn on diagnostics for IoT Hub. We recommend turning on these logs as early as possible, because if diagnostic logs aren't enabled, when device disconnects occur, you won't have any information to troubleshoot the problem with.

1. Sign in to the Azure portal.
2. Browse to your IoT hub.
3. Select Diagnostics settings.
4. Select Turn on diagnostics.
5. Enable Connections logs to be collected.
6. For easier analysis, turn on Send to Log Analytics

![img](https://www.examtopics.com/assets/media/exam-media/04123/0014100001.png)
![img](https://www.examtopics.com/assets/media/exam-media/04123/0014200001.png)
Reference:
https://docs.microsoft.com/bs-cyrl-ba/azure/Iot-hub/iot-hub-troubleshoot-connectivity

Question #5*Topic 5*

You have an Azure IoT solution that includes a standard tier Azure IoT hub and an IoT device.
The device sends one 100-KB device-to-cloud message every hour.
You need to calculate the total daily message consumption of the device.
What is the total daily message consumption of the device?

- A. 24
- B. 600
- C. 2,400
- D. 4,800

**Correct Answer:** *B* 
100 KB * 24 is around 2,400 bytes.
The 100 KB message is divided into 4 KB blocks, and it is billed for 25 messages. 25 times 24 is 600
Note: The maximum message size for messages sent from a device to the cloud is 256 KB. These messages are metered in 4 KB blocks for the paid tiers so for instance if the device sends a 16 KB message via the paid tiers it will be billed as 4 messages.
Reference:
https://azure.microsoft.com/en-us/pricing/details/iot-hub/

Question #6*Topic 5*

You have 1,000 devices that connect to an Azure IoT hub.
You are performing a scheduled check of deployed IoT devices.
You plan to run the following command from the Azure CLI prompt. az iot hub query --hub-name hub1 --query-command "SELECT * FROM devices WHERE connectionState = 'Disconnected'"
What does the command return?

- A. the Device Disconnected events
- B. the device twins
- C. the Connections logs
- D. the device credentials

**Correct Answer:** *B* 
Device twin queries: IoT Hub exposes the device twins as a document collection called devices. For example, the following query retrieves the whole set of device twins:

SELECT * FROM devices -
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-query-language#device-and-module-twin-queries

Question #7*Topic 5*

You have an Azure IoT solution that includes several Azure IoT hubs.
A new alerting feature was recently added to the IoT devices. The feature uses a new device twin reported property named alertCondition.
You need to send alerts to an Azure Service Bus queue named MessageAlerts. The alerts must include alertCondition and the name of the IoT hub.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. Configure File upload for each IoT hub. Configure the device to send a file to an Azure Storage container that contains the device name and status message.
- B. Add the following message enrichments: Name = iotHubName Value = $twin.tag.location Endpoint = MessageAlerts
- C. Create an IoT Hub routing rule that has a data source of Device Twin Change Events and select the endpoint for MessageAlerts.
- D. Add the following message enrichments: Name = iotHubName Value = $iothubname Endpoint = MessageAlerts
- E. Create an IoT Hub routing rule that has a data source of Device Telemetry Messages and select the endpoint for MessageAlerts.

**Correct Answer:** *CD*
C: Device twins change notifications allow back end applications to be notified in real-time of twin changes and react as business logic requires. For instance, when building an application that notifies an operator directly that a device has a firmware update pending and is ג€ready to updateג€. This is accomplished by creating a routing rule from the ג€Twin Change Eventsג€ source and filtering all events that involve the software update status.

D: Applying enrichments -
The messages can come from any data source supported by IoT Hub message routing, including the following examples:
✑ -->device twin change notifications -- changes in the device twin
✑ device telemetry, such as temperature or pressure
✑ device life-cycle events, such as when the device is created or deleted
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-message-enrichments-overview https://azure.microsoft.com/en-us/blog/enhancements-to-azure-iot-hub-improve-management-of-the-full-device-lifecycle/

Question #8*Topic 5*

DRAG DROP -
You have 100 devices that connect to an Azure IoT hub.
You need to be notified about failed local logins to a subset of the devices.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0014600001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0014600002.jpg)*
Step 1: Enable Azure Security Center for IoT
Security alerts, such as failed local IoT hub logins, are stored in AzureSecurityOfThings.SecurityAlert table in the Log Analytics workspace configured for the
Azure Security Center for IoT solution.
Step 2: Select a device security group
Update a device security group..
Step 3: Create a custom alert rule
..by creating a custom alert rule
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/asc-for-iot/how-to-security-data-access https://docs.microsoft.com/en-us/rest/api/securitycenter/devicesecuritygroups/createorupdate

Question #9*Topic 5*

You have an Azure IoT solution that includes a basic tier Azure IoT hub named Hub1 and a Raspberry Pi device named Device1. Device1 connects to Hub1.
You back up Device1 and restore the backup to a new Raspberry Pi device.
When you start the new Raspberry Pi device, you receive the following error message in the diagnostic logs of Hub1: "409002 LinkCreationConflict."
You need to ensure that Device1 and the new Raspberry Pi device can run simultaneously without error.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. On the new Raspberry Pi device, modify the connection string.
- B. From Hub1, modify the device shared access policy.
- C. Upgrade Hub1 to the standard tier.
- D. From Hub1, create a new consumer group.
- E. From Hub1, create a new IoT device.

**Correct Answer:** *AE* 
Note: Symptoms -
You see the error 409002 LinkCreationConflict in logs along with device disconnection or cloud-to-device message failure.

Cause -
Generally, this error happens when IoT Hub detects a client has more than one connection. In fact, when a new connection request arrives for a device with an existing connection, IoT Hub closes the existing connection with this error.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-troubleshoot-error-409002-linkcreationconflict#symptoms https://devblogs.microsoft.com/iotdev/understand-different-connection-strings-in-azure-iot-hub/

Question #10*Topic 5*

You have 1,000 devices that connect to an Azure IoT hub.
You discover that some of the devices fail to send data to the IoT hub.
You need to ensure that you can use Azure Monitor to troubleshoot the device connectivity issues.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. From the Diagnostics settings of the IoT hub, select Archive to a storage account.
- B. Collect the DeviceTelemetry, Connections, and Routes logs.
- C. Collect all metrics.
- D. From the Diagnostics settings of the IoT hub, select Send to Log Analytic.
- E. Collect the JobsOperations, DeviceStreams, and FileUploadOperations logs.

**Correct Answer:** *BD* 
The IoT Hub resource logs connections category emits operations and errors having to do with device connections. The following screenshot shows a diagnostic setting to route these logs to a Log Analytics workspace:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0014900001.jpg)
Note: Azure Monitor: Route connection events to logs:
IoT hub continuously emits resource logs for several categories of operations. To collect this log data, though, you need to create a diagnostic setting to route it to a destination where it can be analyzed or archived. One such destination is Azure Monitor Logs via a Log Analytics workspace, where you can analyze the data using Kusto queries.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-troubleshoot-connectivity

Question #11*Topic 5*

You have an Azure IoT solution that includes an Azure IoT hub.
You plan to deploy 10,000 IoT devices.
You need to validate the performance of the IoT solution while 10,000 concurrently connected devices stream telemetry. The solution must minimize effort.
What should you deploy?

- A. an Azure IoT Device Simulation from Azure IoT Solution Accelerator
- B. an Azure function, an IoT Hub device SDK, and a timer trigger
- C. Azure IoT Central application and a template for the retail industry
- D. an Azure IoT Edge gateway configured as a protocol translation gateway

**Correct Answer:** *A* 
The IoT solution accelerators are complete, ready-to-deploy IoT solutions that implement common IoT scenarios. The scenarios include connected factory and device simulation.
Use the Device Simulation solution accelerator to run simulated devices that generate realistic telemetry. You can use this solution accelerator to test the behavior of the other solution accelerators or to test your own custom IoT solutions.
Reference:
https://docs.microsoft.com/en-us/azure/iot-accelerators/about-iot-accelerators

Question #12*Topic 5*

You have an Azure IoT Central application that monitors 100 IoT devices.
You need to generate alerts when the temperature of a device exceeds 100 degrees. The solution must meet the following requirements:
✑ Minimize costs
✑ Minimize deployment time
What should you do?

- A. Perform a data export to Azure Service Bus.
- B. Create an email property in the device templates.
- C. Perform a data export to Azure Blob storage and create an Azure function.
- D. Create a rule that uses an email action.

**Correct Answer:** *D* 
You can create rules in IoT Central that trigger actions, such as sending an email, in response to telemetry-based conditions, such as device temperature exceeding a threshold.
Reference:
https://docs.microsoft.com/en-us/azure/iot-central/core/howto-configure-rules-advanced

Question #13*Topic 5*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have 20 IoT devices deployed across two floors of a building. The devices on the first floor must be set to 60 degrees. The devices on the second floor must be set to 80 degrees.
The device twins are configured to use a tag that identifies the floor on which the twins are located.
You create the following automatic configuration for the devices on the first floor.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015200001.jpg)
You create the following automatic configuration for the devices on the second floor.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015300001.jpg)
The IoT devices on the first floor report that the temperature is set to 80 degrees.
You need to ensure that the first-floor devices are set to the correct temperature.
Solution: In the automatic configuration for the second-floor devices, you set targetCondition to "tags.floor='second'".
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-deployment-monitoring?view=iotedge-2020-11 https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-automatic-device-management-cli

Question #14*Topic 5*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You have 20 IoT devices deployed across two floors of a building. The devices on the first floor must be set to 60 degrees. The devices on the second floor must be set to 80 degrees.
The device twins are configured to use a tag that identifies the floor on which the twins are located.
You create the following automatic configuration for the devices on the first floor.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015500001.png)
You create the following automatic configuration for the devices on the second floor.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015600001.png)
The IoT devices on the first floor report that the temperature is set to 80 degrees.
You need to ensure that the first-floor devices are set to the correct temperature.
Solution: In the automatic configuration for the second-floor devices, you set Version to 2.
Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-deployment-monitoring?view=iotedge-2020-11 https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-automatic-device-management-cli

Question #15*Topic 5*

You have an Azure IoT hub that has 1,000 registered devices.
You create an Azure logic app.
You need to send Device Connected and Device Disconnected events in real time to the logic app.
What should you do?

- A. From the Message routing blade of the IoT hub, add a route, Route DeviceLifecycleEvents to an Azure Service Bus queue.
- B. From the Diagnostic settings blade of the IoT hub, add a diagnostic setting. Route the connection logs to a Log Analytics workspace.
- C. From the Events blade of the IoT hub, add an event subscription. Configure the Filter to Event Types setting and route the events to a webhook.

**Correct Answer:** *C* 
Adding an Event subscription. Example:
To proceed with Event Grid events, go back to the Event tab in your IoT Hub.
Add an Event subscription and name it 'DeviceRelated'. The default selected event types to send are device creation, device deletion, device connected, device disconnected.
And we see the event schemas:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015800001.jpg)
Just keep it to the Event Grid Schema. You can experiment with other schemas on your own.
Because we added the subscription from within our IoT Hub, this IoT Hub is selected as Topic resource.
For the endpoint, select 'Webhook' as the type and fill in your assembled endpoint URL.
Reference:
https://sandervandevelde.wordpress.com/2019/12/20/subscribe-your-iothub-to-eventgrid-as-event-source/

Question #16*Topic 5*

DRAG DROP -
You are troubleshooting device connections to and disconnections from an Azure IoT hub.
You configure diagnostic logging for the IoT hub to send to Log Analytics.
You need to generate a report that displays the device connection and disconnection events.
How should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.
You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0015900001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0016000001.jpg)*
Box 1: ResourceProvider ==
Query to monitor your IoT hub connectivity Errors: Identify device connection errors.

AzureDiagnostics -
| where ResourceProvider == "MICROSOFT.DEVICES" and ResourceType == "IOTHUBS"
| where Category == "Connections" and Level == "Error"
Box 2: ResourceType ==
Box 3: Category ==
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/monitor-iot-hub

Question #17*Topic 5*

You have an Azure IoT hub.
You need to check whether the IoT hub was affected by an outage.
What should you select in the Azure portal? To answer, select the appropriate option in the answer area.
NOTE: Each correct selection is worth one point.

- A. Resource health
- B. Metrics
- C. Alerts
- D. Diagnostic settings

**Correct Answer:** *A* 
Azure Service Health service helps you monitor service-level events like outages.
You can check the health status of your IoT hub directly from the portal.
To see status and status history of your IoT hub using the portal, follow these steps:

1. In Azure portal, go to your IoT hub in Azure portal.
2. On the left pane, under Support + troubleshooting, select Resource Health.

![img](https://www.examtopics.com/assets/media/exam-media/04123/0016100001.jpg)
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-azure-service-health-integration

Question #18*Topic 5*

You have an Azure IoT solution.
You need to test that the solution remains functional if IoT Hub is affected by a regional outage.
What should you do?

- A. From the IoT hub, set Allow public network access to Disabled.
- B. From the IoT hub, start a manual failover.
- C. From the Device Provisioning Service (DPS), unlink the IoT hub.
- D. From the IoT hub, select Disable fallback route.

**Correct Answer:** *B* 
Manual failover is a feature of the IoT Hub service that allows customers to failover their hub's operations from a primary region to the corresponding Azure geo- paired region. Manual failover can be done in the event of a regional disaster or an extended service outage. You can also perform a planned failover to test your disaster recovery capabilities, although we recommend using a test IoT hub rather than one running in production.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/tutorial-manual-failover

Question #19*Topic 5*

You have an Azure IoT hub and 15,000 IoT devices that monitor temperature. The IoT hub has four partitions. Each IoT device sends a 1-KB message every five seconds.
You plan to use Azure Stream Analytics to process the telemetry stream and generate an alert when temperatures exceed a defined threshold.
You need to recommend the minimum number of streaming units to configure for Stream Analytics.
What should you recommend?

- A. 1
- B. 3
- C. 6
- D. 12

**Correct Answer:** *D* 
15000/5 = 3K/s -> 3 Streaming Units (SU).
3 SU x 4 partitions -> 12 SU
For reference:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0016300001.png)
Reference:
https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-parallelization#calculate-the-maximum-streaming-units-of-a-job

Question #20*Topic 5*

You have an Azure IoT solution that contains an Azure IoT hub.
You need to ensure that the IoT hub configuration is compliant with the Health Insurance Portability and Accountability Act (HIPAA) audit logging requirements.
What should you use?

- A. Azure Advisor recommendations
- B. an Azure Policy definition
- C. Azure Monitor alerts
- D. an Azure Sentinel workspace

**Correct Answer:** *B* 
Regulatory Compliance in Azure Policy provides Microsoft created and managed initiative definitions, known as built-ins, for the compliance domains and security controls related to different compliance standards, including HIPAA auditing logging.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/security-controls-policy

Question #21*Topic 5*

You plan to deploy a standard tier Azure IoT hub.

You need to reboot a set of devices by scheduling IoT Hub jobs.

What should you use?

- A. the device twin reported properties
- B. a direct method
- C. a cloud-to-device message
- D. a device-to-cloud message

**Correct Answer:** *B* 

Question #22*Topic 5*

You have an IoT solution that includes an Azure IoT hub named Hub1 and 20 IoT devices.

Hub1 sends cloud-to-device messages to the IoT devices.

You need to track the number of messages that are resubmitted for delivery to an IoT device.

Which metric should you monitor?

- A. C2D Messages Expired
- B. C2D messages rejected
- C. C2D messages abandoned
- D. C2D message deliveries completed

**Correct Answer:** *C* 

Question #23*Topic 5*

You have an Azure subscription that contains an Azure IoT hub and two Azure IoT Edge devices named Device1 and Device2.

You need to ensure that the IoT hub only accepts connections from Device1 and Device2.

What should you configure?

- A. Azure Defender for IoT
- B. Azure Active Directory (Azure AD) External Identities
- C. Azure Active Directory (Azure AD) Identity Protection
- D. an IP filter

**Correct Answer:** *C* 

Question #24*Topic 5*

DRAG DROP
\-

You have the following Azure Stream Analytics query.

![img](https://img.examtopics.com/az-220/image74.png)

You need to build a Stream Analytics query that will use a JavaScript user-defined aggregate (UDA) function named UDA1 to sum the TemperatureDB values.

How should you complete the function? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image75.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image76.png)* 

Question #25*Topic 5*

DRAG DROP
\-

You have an Azure IoT solution that contains an Azure IoT Edge device. 

You need to perform the following tasks on the device: 

• Collect all the logs from the device. 
• Identify issues with the config file and the container engine that prevent the device from connecting to the cloud. 
• Verify that the IoT Edge runtime can access ports on the device, and that all the IoT Edge components can connect to an Azure IoT hub. 

Which command should you use to perform each task? To answer, drag the appropriate commands to the correct tasks. Each command may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. 

NOTE: Each correct selection is worth one point. 

![img](https://img.examtopics.com/az-220/image77.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image78.png)* 

Question #26*Topic 5*

You have an Azure IoT solution that contains an Azure IoT hub and Azure IoT Edge devices.

You need to configure the metrics-collector module on the devices to send metrics to the IoT hub as device-to-cloud messages.

Which environment variable should you update?

- A. AllowedMetrics
- B. LogAnalyticsWorkspaceId
- C. UploadTarget
- D. MetricsEndpointsCSVc

**Correct Answer:** *C* 

Question #27*Topic 5*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You receive the following error in Azure Monitor "403006 DeviceMaximumActiveFileUploadLimitExceeded."

You need to ensure that the file upload code is configured correctly.

Solution: You limit the maximum concurrent file uploads to ten and notify an Azure IoT hub that a file upload has completed by using the REST API.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #28*Topic 5*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You receive the following error in Azure Monitor "403006 DeviceMaximumActiveFileUploadLimitExceeded."

You need to ensure that the file upload code is configured correctly.

Solution: You limit the maximum concurrent file uploads to 10 and notify an Azure IoT hub that a file upload has completed by using a module twin property.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #29*Topic 5*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure IoT solution.

You receive the following error in Azure Monitor "403006 DeviceMaximumActiveFileUploadLimitExceeded."

You need to ensure that the file upload code is configured correctly.

Solution: You limit the maximum concurrent file uploads to 20 and notify an Azure IoT hub that a file upload has completed by using the REST API.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #30*Topic 5*

You have an Azure subscription named Sub1.

You need to ensure that when a new Azure IoT hub is created in Sub1, a warning appears indicating that communication must be allowed only from known networks. The solution must minimize development and administrative effort.

What should you include in the solution?

- A. an application security group rule
- B. an Azure function
- C. an Azure policy
- D. an Azure Monitor alert

**Correct Answer:** *D* 

## Topic 6 - Question Set 6

Question #1*Topic 6*

You use Azure Security Center in an Azure IoT solution.
You need to exclude some security events. The solution must minimize development effort.
What should you do?

- A. Create an Azure function to filter security messages.
- B. Add a configuration to the code of the physical IoT device.
- C. Add configuration details to the device twin object.
- D. Create an azureiotsecurity module twin and add configuration details to the module twin object.

**Correct Answer:** *D* 
Properties related to every Azure Security Center for IoT security agent are located in the agent configuration object, within the desired properties section, of the azureiotsecurity module.
To modify the configuration, create and modify this object inside the azureiotsecurity module twin identity.
Note: Azure Security Center for IoT's security agent twin configuration object is a JSON format object. The configuration object is a set of controllable properties that you can define to control the behavior of the agent.
These configurations help you customize the agent for each scenario required. For example, automatically excluding some events, or keeping power consumption to a minimal level are possible by configuring these properties.
Reference:
https://docs.microsoft.com/en-us/azure/asc-for-iot/how-to-agent-configuration

Question #2*Topic 6*

You have an Azure IoT hub that uses a Device Provisioning Service instance.

You have 1,000 legacy IoT devices that only support MAC address or serial number identities. The devices do NOT have a security feature that can be used to securely identify the device or a hardware security module (HSM).
You plan to deploy the devices to a secure environment.
You need to configure the Device Provisioning Service instance to ensure that all the devices are identified securely before they receive updates.
Which attestation mechanism should you choose?

- A. Trusted Platform Module (TPM) 1.2 attestation
- B. symmetric key attestation
- C. X.509 certificates

**Correct Answer:** *B* 
A common problem with many legacy devices is that they often have an identity that is composed of a single piece of information. This identity information is usually a MAC address or a serial number. Legacy devices may not have a certificate, TPM, or any other security feature that can be used to securely identify the device. The Device Provisioning Service for IoT hub includes symmetric key attestation. Symmetric key attestation can be used to identify a device based off information like the MAC address or a serial number.
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-legacy-device-symm-key

Question #3*Topic 6*

From the Device Provisioning Service, you create an enrollment as shown in the exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0016700001.jpg)
You need to deploy a new IoT device.
What should you use as the device identity during attestation?

- A. a self-signed X.509 certificate
- B. the random string of alphanumeric characters
- C. the HMAC-SHA256 hash of the device's registration ID
- D. the endorsement key of the device's Trusted Platform Module (TPM)

**Correct Answer:** *C* 
Each device uses its derived device key with your unique registration ID to perform symmetric key attestation with the enrollment during provisioning. To generate the device key, use the key you copied from your DPS enrollment to compute an HMAC-SHA256 of the unique registration ID for the device and convert the result into Base64 format.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/how-to-auto-provision-symmetric-keys

Question #4*Topic 6*

DRAG DROP -
You have an Azure IoT Edge solution.
You plan to deploy an Azure Security Center for IoT security agent. You need to configure the security agent to meet the following requirements:
✑ Connection events must be reported as high priority.
✑ High priority events must be collected every seven minutes.
How should you configure the azureiotsecurity module twin? To answer, drag the appropriate values to the correct locations. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0016900001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0016900002.png)*
Box 1: "desired": {
To configure connection events as high priority and collect high priority events every 7 minutes, use the following configuration.
"desired": {
"ms_iotn:urn_azureiot_Security_SecurityAgentConfiguration": {
"highPriorityMessageFrequency": {
"value": "PT7M"
},
"eventPriorityConnectionCreate": {
"value": "High"
}
Box 2: "highPriorityMessageFrequency ": {
Box 3: "eventPriorityConnectionCreate": {
Reference:
https://docs.microsoft.com/en-us/azure/defender-for-iot/how-to-agent-configuration

Question #5*Topic 6*

You have an Azure IoT hub that has a hostname of contoso-hub.azure-devices.net and an MCU-based IoT device named Device1. Device1 does NOT support
Azure IoT SDKs.
You plan to connect Device1 to the IoT hub by using the Message Queuing Telemetry Transport (MQTT) protocol and to authenticate by using X.509 certificates.
You need to ensure that Device1 can authenticate to the IoT hub.
What should you do?

- A. Create an Azure key vault and enable the encryption of data at rest for the IoT hub by using a customer-managed key.
- B. Enable a hardware security module (HSM) on Device1.
- C. From the Azure portal, create an IoT Hub Device Provisioning Service (DPS) instance and add a certificate enrollment for Device1.
- D. Add the DigiCert Baltimore Root Certificate to Device1.

**Correct Answer:** *D* 
The connection to Azure IoT Hub with MQTT is secured using TLS.
The Azure IoT Hub library requires the provisioning of the following certificates and a private key for a successful TLS connection:

1. Baltimore CyberTrust Root certificate - Server certificate, used to verify the server's certificate while connecting.
2. Device certificate - generated by the procedures described in Creating Azure IoT Hub certificates , used by Azure IoT Hub to authenticate the device.
3. Private key of the device.

Reference:
https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/include/net/azure_iot_hub.html

Question #6*Topic 6*

HOTSPOT -
You are planning a proof of concept (POC) that will use an Azure IoT hub.
You have two self-signed client authentication certificates named Cert1 and Cert2. Cert1 has a basic constraint that contains Subject Type=CA. Cert2 has a basic constraint that contains Subject Type=End Entity.
You need to identify which certificates to use.
What should you identify? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0017100001.png)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0017200001.png)* 
Box 1: Cert2 only -
Cert2: The leaf certificate, or end-entity certificate, identifies the certificate holder. It has the root certificate in its certificate chain as well as zero or more intermediate certificates. The leaf certificate is not used to sign any other certificates. It uniquely identifies the device to the provisioning service and is sometimes referred to as the device certificate.

Box 2: Cert1 only -
Cert1: A root certificate is a self-signed X.509 certificate representing a certificate authority (CA). It is the terminus, or trust anchor, of the certificate chain. Root certificates can be self-issued by an organization or purchased from a root certificate authority.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/concepts-x509-attestation

Question #7*Topic 6*

You have an Azure IoT Edge device.
You need to modify the credentials used to access the container registry.
What should you modify?

- A. the $edgeHub module twin
- B. the IoT Edge module
- C. the $edgeAgent module twin
- D. the Azure IoT Hub device twin

**Correct Answer:** *C* 
The module twin for the IoT Edge agent is called $edgeAgent and coordinates the communications between the IoT Edge agent running on a device and IoT Hub.
The desired properties are set when applying a deployment manifest on a specific device as part of a single-device or at-scale deployment.
These properties include:
✑ runtime.settings.registryCredentials.{registryId}.username
✑ runtime.settings.registryCredentials.registryId}.password
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/module-edgeagent-edgehub

Question #8*Topic 6*

You enable Azure Security Center for IoT.
You need to onboard a device to Azure Security Center.
What should you do?

- A. Add the azureiotsecurity module identity to the Azure IoT Hub device identity.
- B. Open incoming TCP port 8883 on the device.
- C. Modify the connection string of the device.
- D. Install an X.509 certificate on the hardware security module (HSM) of the device.

**Correct Answer:** *A* 
Use the following workflow to deploy and test your Azure Security Center for IoT security agents:

1. Enable Azure Security Center for IoT service to your IoT Hub
2. If your IoT Hub has no registered devices, Register a new device.
3. Create an azureiotsecurity security module for your devices.

Azure Security Center for IoT makes use of the module twin mechanism and maintains a security module twin named azureiotsecurity for each of your devices.
Note: To manually create a new azureiotsecurity module twin for a device use the following instructions:

1. In your IoT Hub, locate and select the device you wish to create a security module twin for.
2. Click on your device, and then on Add module identity.
3. In the Module Identity Name field, enter azureiotsecurity.
4. Click Save.

Reference:
https://docs.microsoft.com/en-us/azure/asc-for-iot/quickstart-create-security-twin

Question #9*Topic 6*

You have an Azure IoT solution that includes an Azure IoT hub, 100 Azure IoT Edge devices, and 500 leaf devices.
You need to perform a key rotation across the devices.
Which three types of entities should you update? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.

- A. the $edgeHub module identity
- B. the $edgeAgent module identity
- C. the leaf module identities
- D. the IoT Edge device identities
- E. the iothubowner policy credentials
- F. the leaf device identities

**Correct Answer:** *ADF* 
To get authorization to connect to IoT Hub, devices and services must send security tokens signed with either a shared access or symmetric key. These keys are stored with a device identity in the identity registry.
An IoT Hub identity registry can be accessed like a dictionary, by using the deviceId or moduleId as the key.
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-dps/how-to-control-access https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-identity-registry

Question #10*Topic 6*

You have an Azure IoT hub that is being taken from prototype to production.
You plan to connect IoT devices to the IoT hub. The devices have hardware security modules (HSMs).
You need to use the most secure authentication method between the devices and the IoT hub. Company policy prohibits the use of internally generated certificates.
Which authentication method should you use?

- A. an X.509 self-signed certificate
- B. a certificate thumbprint
- C. a symmetric key
- D. An X.509 certificate signed by a root certification authority (CA).

**Correct Answer:** *D* 
Purchase X.509 certificates from a root certificate authority (CA). This method is recommended for production environments.
The hardware security module, or HSM, is used for secure, hardware-based storage of device secrets, and is the most secure form of secret storage. Both X.509 certificates and SAS tokens can be stored in the HSM
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/concepts-security

Question #11*Topic 6*

DRAG DROP -
You have an Azure IoT solution that includes an Azure IoT hub.
You receive a root certification authority (CA) certificate from the security department at your company.
You need to configure the IoT hub to use the root CA certificate.
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0017600001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0017700001.png)*
Reference:
https://docs.microsoft.com/bs-latn-ba/azure/iot-hub/iot-hub-security-x509-get-started

Question #12*Topic 6*

You have an Azure IoT hub.
You need to enable Azure Defender for IoT on the IoT hub.
What should you do?

- A. From the Security settings of the IoT hub, select Secure your IoT solution.
- B. From the Diagnostics settings of the IoT hub, select Add diagnostic setting.
- C. From Defender, add a security policy.
- D. From Defender, configure security alerts.

**Correct Answer:** *A*
You can onboard Defender for IoT to an existing IoT Hub, where you can then monitor the device identity management, device to cloud, and cloud to device communication patterns.
To onboard Defender for IoT to an existing IoT Hub:

1. Navigate to the IoT Hub.
2. Select the IoT Hub to be onboarded.
3. Select any option under the Security section.
4. Clickג€‰Secure your IoT solutionג€‰and complete the onboarding form.

The Secure your IoT solution button will only appear if the IoT Hub has not already been onboarded, or if while onboarding you left the Defender for IoT toggle on
Off.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0017800001.jpg)
Reference:
https://docs.microsoft.com/en-us/azure/defender-for-iot/device-builders/quickstart-onboard-iot-hub

Question #13*Topic 6*

You have an Azure subscription that contains an Azure IoT hub and two Azure IoT Edge devices named Device1 and Device2.
You need to ensure that the IoT hub only accepts connections from Device1 and Device2.
What should you configure?

- A. a private endpoint connection
- B. Azure API Management
- C. Azure Active Directory (Azure AD) Identity Protection
- D. a gateway device

**Correct Answer:** *A* 
Ingress connectivity to IoT Hub using Azure Private Link.
A private endpoint is a private IP address allocated inside a customer-owned VNet via which an Azure resource is reachable. Through Azure Private Link, you can set up a private endpoint for your IoT hub to allow services inside your VNet to reach IoT Hub without requiring traffic to be sent to IoT Hub's public endpoint.
Similarly, your on-premises devices can use Virtual Private Network (VPN) or ExpressRoute peering to gain connectivity to your VNet and your IoT Hub (via its private endpoint). As a result, you can restrict or completely block off connectivity to your IoT hub's public endpoints by using IoT Hub IP filter or the public network access toggle. This approach keeps connectivity to your Hub using the private endpoint for devices.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/virtual-network-support

Question #14*Topic 6*

You have an Azure IoT solution that contains an Azure IoT hub and 100 IoT devices. The devices run Windows Server 2016.
You need to deploy the Azure Defender for IoT C#-based security agent to the devices.
What should you do first?

- A. On the devices, initialize Trusted Platform Module (TPM).
- B. From the IoT hub, create a system-assigned managed identity.
- C. From the IoT hub, create a security module for the devices.
- D. On the devices, set the PowerShell execution policy to Restricted.

**Correct Answer:** *C* 
The IoT Edge security manager provides a safe framework for security service extensions through host-level modules. The IoT Edge security manager include
✑ Ensure safe operation of client agents for services including Device Update for IoT Hub and Azure Defender for IoT.
Reference:
https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-security-manager

Question #15*Topic 6*

DRAG DROP -
You have an Azure IoT hub named Hub1 and a root certification authority (CA) named CA1. Hub1 is configured to use X.509 certificate device authentication.
You and a custom manufacturing partner complete a proof of possession flow.
You plan to deploy IoT devices manufactured by the custom manufacturing partner. Each device will have a certificate generated by an intermediate CA. The devices will authenticate by using device certificates signed by the partner.
You need to ensure that the custom devices can connect successfully to Hub1.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0018100001.jpg)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0018200001.jpg)*
Box 1: Sign the intermediate CA certificate by using the CA1 certificate.
X.509 certificates are typically arranged in a certificate chain of trust in which each certificate in the chain is signed by the private key of the next higher certificate, and so on, terminating in a self-signed root certificate. This arrangement establishes a delegated chain of trust from the root certificate generated by a trusted root certificate authority (CA) down through each intermediate CA to the end-entity "leaf" certificate installed on a device.
Box 2: Sign the device certificate by using the intermediate CA
An intermediate certificate is an X.509 certificate, which has been signed by the root certificate (or by another intermediate certificate with the root certificate in its chain). The last intermediate certificate in a chain is used to sign the leaf certificate. An intermediate certificate can also be referred to as an intermediate CA certificate.
Box 3: Deploy the certificate chain to the device.
The leaf certificate, or end-entity certificate, identifies the certificate holder. It has the root certificate in its certificate chain as well as zero or more intermediate certificates. The leaf certificate is not used to sign any other certificates. It uniquely identifies the device to the provisioning service and is sometimes referred to as the device certificate. During authentication, the device uses the private key associated with this certificate to respond to a proof of possession challenge from the service.
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/concepts-x509-attestation

Question #16*Topic 6*

You have an Azure IoT solution that contains an Azure IoT hub. The IoT hub uses Microsoft Defender for IoT for device builders and an IoT device named ContosoDevice1.

You need to implement the Defender for IoT micro agent.

What should you configure in the IoT hub?

- A. a module twin
- B. a private endpoint
- C. an Azure IoT Edge module
- D. the device twin

**Correct Answer:** *A* 

Question #17*Topic 6*

HOTSPOT
\-

You have an Azure IoT solution that contains an Azure IoT hub and 100 IoT devices.

You deploy Azure Defender for IoT to the devices.

You need to configure alerts for the following events:

• An X.509 certificate is expired.
• Potential loss of data is detected.
• The number of unauthorized operations is outside the allowed range.

The solution must minimize administrative effort.

Which type of alert should you configure for each event? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image79.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image80.png)* 

Question #18*Topic 6*

You have an Azure IoT solution that contains 20 IoT devices. Each device typically sends five Message Queuing Telemetry Transport (MQTT) messages per minute.

You need to configure an alert to detect which devices have an anomalous MQTT message send rate.

What should you do?

- A. Create an Azure IoT hub and an IoT alert that has the following settings:
  • Condition: C2D message deliveries completed
  • Threshold: Static
  • Threshold value: 15
  • Aggregation granularity: 5 minutes
- B. Create an Azure IoT hub and an IoT alert that has the following settings:
  • Condition: C2D message deliveries completed
  • Threshold: Static
  • Operator: Greater than
  • Aggregation type: Average
  • Threshold value: 30
- C. Enable Azure Defender for IoT and create a custom rule that has the following settings:
  • Custom Alert: Number of device to cloud messages (MQTT protocol) is not in allowed range
  • Minimal Threshold: 30
  • Maximum Threshold: 60
  • Time Window Size: 00:05:00
- D. Enable Azure Defender for IoT and create a custom rule that has the following settings:
  • Custom Alert: Number of device to cloud messages (MQTT protocol) is not in allowed range
  • Minimal Threshold: 20
  • Maximum Threshold: 30
  • Time Window Size: 00:05:00

**Correct Answer:** *C* 

Question #19*Topic 6*

You have ab Azure subscription that contains an Azure IoT hub named Hub1, 50 IoT devices, and an Azure Blob storage account named storage1.

Hub1 will be used to route data from the IoT devices to storage1.

You enable private endpoint access for Hub1.

You need to ensure that Hub1 can route the data to storage1.

What should you do?

- A. On Hub1, create a shared access policy.
- B. On Hub1, add an X.509 certificate.
- C. Deploy an Azure IoT Edge gateway device.
- D. On Hub1, configure a system-assigned managed identity.

**Correct Answer:** *A* 

Question #20*Topic 6*

HOTSPOT
\-

You have an Azure IoT solution that contains a Device Provisioning Service (DPS) server named DPS1. DPS1 is configured to support auto provisioning.

You plan to deploy a new Linux IoT Edge device named Edge1 that will contain a Trusted Platform Module (TPM).

You need to configure Edge1 to support DPS TPM provisioning.

Which file should you modify, and which element should you enable? To answer, drag the appropriate options to the correct targets. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image81.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image82.png)* 

Question #21*Topic 6*

HOTSPOT
\-

You have sites that contain industrial control devices as shown in the following table.

![img](https://img.examtopics.com/az-220/image83.png)

You have an Azure subscription that contains an Azure IoT hub. The IoT hub has Microsoft Defender for IoT enabled.

You plan to deploy Microsoft Defender for IoT to the devices.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image84.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image85.png)* 

Question #22*Topic 6*

You have an Azure subscription that contains an Azure IoT hub and two Azure IoT Edge devices named Device1 and Device2.

You need to ensure that the IoT hub only accepts connections from Device1 and Device2.

What should you configure?

- A. Azure API Management
- B. Identity Protection in Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra
- C. a Network Security Group
- D. an IP filter

**Correct Answer:** *B* 

Question #23*Topic 6*

You have an Azure subscription.

You need to deploy an Azure IoT hub by using an Azure Resource Manager (ARM) template. The solution must ensure that the IoT hub rejects connections from devices that only support cipher suites that use SHA1.

What should you include in the template?

- A. “authenticationType”:“keyBased”
- B. “disableDeviceSAS”:“true”
- C. “disableModuleSAS”:“true”
- D. “minTlsVersion”:“1.2”

**Correct Answer:** *B* 

Question #24*Topic 6*

HOTSPOT
\-

You are planning a project that will use an Azure IoT hub. 

You have two authentication certificates named Cert1 and Cert2. Cert1 is a CA signed certificate and Cert 2 is a leaf certificate.

You need to identify which certificates to use. 

What should you identify? To answer, select the appropriate options in the answer area. 

NOTE: Each correct selection is worth one point. 

![img](https://img.examtopics.com/az-220/image86.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image87.png)* 

Question #25*Topic 6*

You have an Azure IoT solution.

You need to implement multi-factor device authentication by using custom device authentication.

What should you do first?

- A. Create an Azure Policy definition for Azure IoT Hub.
- B. Enable multi-factor authentication (MFA) for Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra.
- C. Create a service endpoint policy.
- D. Deploy a security token service.

**Correct Answer:** *B* 

Question #26*Topic 6*

You have an IoT solution that contains an Azure IoT hub and 500 IoT devices.

You are evaluating Microsoft Defender for IoT.

You plan to deploy the Defender for IoT micro agent to a test device.

You need to configure authentication for the agent. The solution must minimize administrative effort.

Which authentication method should you use?

- A. OAuth2
- B. module identity
- C. shared access policies
- D. Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra

**Correct Answer:** *B* 

Question #27*Topic 6*

You use Microsoft Defender for IoT in an Azure IoT solution.

You need to exclude some security events. The solution must minimize development effort.

What should you do?

- A. Create an Azure function to filter security messages.
- B. Add a configuration to the code of the physical IoT device.
- C. Create an DefenderIotMicroAgent module twin and add configuration details to the module twin object.
- D. Add configuration details to the device twin object.

**Correct Answer:** *C* 

Question #28*Topic 6*

You have an Azure subscription that contains an Azure IoT hub and two Azure IoT Edge devices named Device1 and Device2.

You need to ensure that the IoT hub only accepts connections from Device1 and Device2.

What should you configure?

- A. Azure API Management
- B. a gateway device
- C. a Network Security Group
- D. a private endpoint connection

**Correct Answer:** *D* 

Question #29*Topic 6*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have 10 devices that connect to an Azure IoT hub. Each device has a unique public IP address. The devices are not provisioned through DPS.

You discover an anomaly in messages from two devices.

You need to stop all messages from both devices without affecting the other devices.

Solution: You delete the devices from the IoT hub.

Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #30*Topic 6*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have 10 devices that connect to an Azure IoT hub. Each device has a unique public IP address. The devices are not provisioned through DPS.

You discover an anomaly in messages from two devices.

You need to stop all messages from both devices without affecting the other devices.

Solution: You add IP filter rules for the devices.

Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #31*Topic 6*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have 10 devices that connect to an Azure IoT hub. Each device has a unique public IP address. The devices are not provisioned through DPS.

You discover an anomaly in messages from two devices.

You need to stop all messages from both devices without affecting the other devices.

Solution: You create a custom endpoint for the IoT hub and configure a message routing query to redirect events from suspicious devices.

Does the solution meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

## Topic 7 - Question Set 7

Question #1*Topic 7*

You deploy an Azure Digital Twins instance.
You are developing client code that will modify digital twin data.
You run the client code and receive the following response for an Azure Digital Twins API.
403 (Forbidden)
You need to configure access control for the Azure Digital Twins instance to ensure that the client code can modify the data.
Which role should you assign?

- A. Contributor
- B. Azure Digital Twins Data Owner
- C. Owner
- D. Managed Application Operator Role

**Correct Answer:** *B* 
Most often, this error indicates that your Azure role-based access control (Azure RBAC) permissions for the service aren't set up correctly. Many actions for an
Azure Digital Twins instance require you to have the Azure Digital Twins Data Owner role on the instance you are trying to manage.
Reference:
https://docs.microsoft.com/en-us/azure/digital-twins/troubleshoot-error-403

Question #2*Topic 7*

You have an Azure IoT solution.
You need to create a digital twin model.
Which language should you use?

- A. XHTML
- B. DTDL
- C. YAML
- D. XML

**Correct Answer:** *B* 
Azure Digital Twins models are represented in the JSON-LD-based Digital Twin Definition Language (DTDL).
Reference:
https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models

Question #3*Topic 7*

You need to route events in Azure Digital Twins to a downstream service for additional processing.
Which type of output endpoint can you use?

- A. Azure Event Hubs
- B. Azure Queue storage
- C. Microsoft Power BI
- D. Azure Table storage

**Correct Answer:** *A* 
Create an endpoint for Azure Digital Twins.
These are the supported types of endpoints that you can create for your instance:
✑ Event Grid
✑ Event Hubs
✑ Service Bus
Note: In Azure Digital Twins, you can route event notifications to downstream services or connected compute resources. This is done by first setting up endpoints that can receive the events. You can then create event routes that specify which events generated by Azure Digital Twins are delivered to which endpoints.
Reference:
https://docs.microsoft.com/en-us/azure/digital-twins/how-to-manage-routes

Question #4*Topic 7*

You have IoT devices that connect to an Azure IoT hub.

From IoT Hub, you create an Event subscription to be notified when devices are registered to IoT Hub. You select webhook endpoint as a handler for the Event subscription.

Which two types of Event Grid messages will be received by the webhook? Each correct answer presents a complete solution.

NOTE: Each correct selection is worth one point.

- A. Microsoft.Devices.DeviceCreated
- B. Microsoft.Resources.ResourceWriteSuccess
- C. Microsoft.EventGrid.SubscriptionValidationEvent
- D. Microsoft.Devices.DeviceConnected

**Correct Answer:** *AC* 

Question #5*Topic 7*

HOTSPOT
\-

You have an Azure Stream Analytics job named Asjob1 that uses the following query.

![img](https://img.examtopics.com/az-220/image92.png)

Event ordering is configured as shown in the following exhibit.

![img](https://img.examtopics.com/az-220/image93.png)

Asjob1 receives the events shown in the following table.

![img](https://img.examtopics.com/az-220/image94.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image95.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image96.png)* 

Question #6*Topic 7*

You have a digital twin model named Model1 and a digital twin named Twin1. Twin1 uses Model1.

You need to prevent new digital twins from using Model1. The solution must ensure that you can edit the properties of Twin1.

What should you do?

- A. Update the schema of Model1.
- B. Decommission Model1.
- C. Update the version of Model1.
- D. Delete Model1.

**Correct Answer:** *B* 

Question #7*Topic 7*

You need to route events in Azure Digital Twins to a downstream service for additional processing.

Which type of output endpoint can you use?

- A. Azure Event Hubs
- B. Azure Data Lake
- C. Azure Cosmos DB
- D. Azure SQL Database

**Correct Answer:** *A* 

Question #8*Topic 7*

HOTSPOT
\-

You have an Azure IoT hub.

You have four Azure IoT Edge devices and the device twin code shown in the following table.

![img](https://img.examtopics.com/az-220/image97.png)

You have three deployments and the deployment code shown in the following table.

![img](https://img.examtopics.com/az-220/image98.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image99.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image100.png)* 

Question #9*Topic 7*

You have a remote network that contains an IoT device named Device1 and a firewall named Firewall1.

You have an Azure subscription that contains an Azure IoT hub named Hub1. Device1 is registered to Hub1. Firewall1 only allows outbound traffic from Hub1 via TCP port 443.

You need to build an app that will connect to Device1 by using SSH on port 22. The solution must minimize costs.

What should you configure to connect to Device1?

- A. IoT Hub message routing
- B. shared access policies
- C. Azure Private Link
- D. IoT Hub device streams

**Correct Answer:** *D* 

Question #10*Topic 7*

You need to route events in Azure Digital Twins to a downstream service for additional processing.

Which type of output endpoint can you use?

- A. Azure Cosmos DB
- B. Azure Table storage
- C. Azure Service Bus
- D. Azure SQL Database

**Correct Answer:** *C* 

Question #11*Topic 7*

HOTSPOT
\-

You create an Azure IoT hub named Iothub1 as shown in the following exhibit. 

![img](https://img.examtopics.com/az-220/image101.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No. 

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image102.png)

**Correct Answer:***![img](https://img.examtopics.com/az-220/image103.png)* 

Question #12*Topic 7*

You need to route events in Azure Digital Twins to a downstream service for additional processing.

Which type of output endpoint can you use?

- A. Azure Cosmos DB
- B. Azure Data Lake
- C. Azure Service Bus
- D. Microsoft Power BI

**Correct Answer:** *C* 

Question #13*Topic 7*

You plan to deploy an Azure IoT hub. The solution must ensure that when connecting to the IoT hub, IoT devices can only authenticate by presenting a certificate that is encrypted with a 256-bit AES key and uses a SHA384 hash.

You need to configure the Azure Resource Manager (ARM) template to deploy the IoT hub.

Which property should you configure?

- A. disableLocalAuth
- B. authenticationType
- C. minTlsVersion
- D. authorizationPolicies

**Correct Answer:** *B* 

Question #14*Topic 7*

![img](https://img.examtopics.com/az-220/image104.png)

Which query should you use?

- A. $event.payload.Status = "Running" AND $event.payload.Alert = "True"
- B. $body.event.payload.Status = "Running" AND $body.event.payload.Alert = "True"
- C. MessageType.payload.Status = "Running" AND MessageType.event.payload.Alert = "True"
- D. $Status = "Running" AND $Alert = "True"

**Correct Answer:** *D* 

Question #15*Topic 7*

You have an Azure IoT solution that includes an Azure IoT hub and 100 Azure IoT Edge devices.

You plan to deploy the IoT Edge devices to external networks. The firewalls of the external networks only allow traffic on port 80 and port 443.

You need to ensure that the devices can connect to the IoT hub. The solution must minimize costs.

What should you do?

- A. Configure the upstream protocol of the devices to use AMQP over WebSocket.
- B. Deploy IoT Hub to the external networks by using Azure Stack.
- C. Connect the devices for extended offline operations.
- D. Integrate cellular communication hardware onto the devices and avoid the use of the external networks.

**Correct Answer:** *A* 

Question #16*Topic 7*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image105.png)

You create a group enrollment in DPS1 and enroll 100 IoT devices. Each device is issued a leaf certificate from CA1.

You need to deprovision a single IoT device from the group enrollment. The solution must not affect the other devices.

Solution: You create a disabled symmetric key individual enrollment by using the device ID of the device.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #17*Topic 7*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image105.png)

You create a group enrollment in DPS1 and enroll 100 IoT devices. Each device is issued a leaf certificate from CA1.

You need to deprovision a single IoT device from the group enrollment. The solution must not affect the other devices.

Solution: You create a disabled symmetric individual enrollment by using the X.509 certificate of the device.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #18*Topic 7*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image105.png)

You create a group enrollment in DPS1 and enroll 100 IoT devices. Each device is issued a leaf certificate from CA1.

You need to deprovision a single IoT device from the group enrollment. The solution must not affect the other devices.

Solution: You delete the device entry from the device registry of Hub1.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #19*Topic 7*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have 20 IoT devices deployed across two floors of a building. The devices on the first floor must be set to 60 degrees. The devices on the second floor must be set to 80 degrees.

The device twins are configured to use a tag that identifies the floor on which the twins are located.

You create the following automatic configuration for the devices on the first floor.

![img](https://img.examtopics.com/az-220/image106.png)

You create the following automatic configuration for the devices on the second floor.

![img](https://img.examtopics.com/az-220/image107.png)

The IoT devices on the first floor report that the temperature is set to 80 degrees.

You need to ensure that the first-floor devices are set to the correct temperature.

Solution: In the automatic configuration for the first-floor devices, you set targetCondition to “tags.floor=‘second’”.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *B* 

Question #20*Topic 7*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.

You have an Azure subscription that contains the resources shown in the following table.

![img](https://img.examtopics.com/az-220/image105.png)

You create a group enrollment in DPS1 and enroll 100 IoT devices. Each device is issued a leaf certificate from CA1.

You need to deprovision a single IoT device from the group enrollment. The solution must not affect the other devices.

Solution: You create a disabled individual enrollment by using the X.509 certificate of CA1.

Does this meet the goal?

- A. Yes
- B. No

**Correct Answer:** *A* 

Question #21*Topic 7*

HOTSPOT
\-

You are creating an Azure Digital Twins query.

You need to return all the digital twins that have a contains relationship with a digital twin that has an ID of twin1.

How should you complete the query? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image108.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image109.png)* 

Question #22*Topic 7*

HOTSPOT
\-

You have an Azure IoT solution that includes an Azure IoT hub and 50 IoT devices.

The device twins have the following structure.

![img](https://img.examtopics.com/az-220/image110.png)

You need to configure message enrichments to add the following values to messages:

• The device deployment location
• The device firmware version

How should you configure the message enrichments? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image111.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image112.png)* 

Question #23*Topic 7*

You have an Azure IoT hub and an IoT device that generates the following messages.

![img](https://img.examtopics.com/az-220/image120.png)

You need to route the messages to a custom Azure Event Hubs endpoint. The solution must route only messages that have the following values.

"Status": "Running"
"Alert": "True"

Which query should you use?

- A. $body.event.payload.Status = "Running" AND $body.event.payload.Alert = "True"
- B. MessageType.payload.Status = "Running" AND MessageType.event.payload.Alert = "True"
- C. $Status = "Running" AND $Alert = "True"
- D. $event.payload.Status = "Running" AND $event.payload.Alert = "True"

**Correct Answer:** *A* 

Question #24*Topic 7*

HOTSPOT
\-

You have an Azure IoT solution that uses Azure Digital Twins.

You plan to ingest telemetry from an IoT device into a digital twin.

You need to create an Azure function that will process the telemetry messages received by the Azure IoT hub and update the digital twin of the IoT device with the new values.

How should you complete the code? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

![img](https://img.examtopics.com/az-220/image124.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image125.png)* 

Question #25*Topic 7*

DRAG DROP
\-

You have an Azure IoT hub named Hub1 and an Azure Service Bus queue named SBQ1.

You create an authorization rule for the Service Bus queue.

You need to configure message routing from Hub1 to SBQ1.

Which three commands should you run in sequence? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.

![img](https://img.examtopics.com/az-220/image126.png)

**Correct Answer:** *![img](https://img.examtopics.com/az-220/image127.png)* 

## Topic 8 - Testlet 1

Question #1*Topic 8*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0000300001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0000400001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionHOTSPOT -
You create a new IoT device named device1 on iothub1. The primary key value assigned to device1 is Uihuih76hbHb.
How should you complete the device connection string? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0000500013.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0000600001.png)*
Box 1: iothub1 -
The Azure IoT hub is named iothub1.

Box 2: azure-devices.net -
The format of the device connection string looks like:
HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyNodeDevice;SharedAccessKey={YourSharedAccessKey}

Box 1: device1 -
Device1 has a primary key of Uihuih76hbHb.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-control-device-dotnet

## Topic 9 - Testlet 2

Question #1*Topic 9*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002800001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002900001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionWhat should you do to identify the cause of the connectivity issues?

- A. Send cloud-to-device messages to the IoT devices.
- B. Use the heartbeat pattern to send messages from the IoT devices to iothub1.
- C. Monitor the connection status of the device twin by using an Azure function.
- D. Enable the collection of the Connections diagnostic logs and set up alerts for the connected devices count metric.

**Correct Answer:** *D* 
Scenario: You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.
To log device connection events and errors, turn on diagnostics for IoT Hub. We recommend turning on these logs as early as possible, because if diagnostic logs aren't enabled, when device disconnects occur, you won't have any information to troubleshoot the problem with.
Step 1:

1. Sign in to the Azure portal.
2. Browse to your IoT hub.
3. Select Diagnostics settings.
4. Select Turn on diagnostics.
5. Enable Connections logs to be collected.
6. For easier analysis, turn on Send to Log Analytics (see pricing).

Step 2:
Set up alerts for device disconnect at scale
To get alerts when devices disconnect, configure alerts on the Connected devices (preview) metric.
Reference:
https://docs.microsoft.com/bs-cyrl-ba/azure/iot-hub/iot-hub-troubleshoot-connectivity

Question #2*Topic 9*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002800001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0002900001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionHOTSPOT -
You are writing code to provision IoT devices by using the Device Provisioning Service.
Which two details from the Overview blade of the Device Provisioning Service are required to provision a new IoT client device? To answer, select the appropriate detail in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0003200001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0003300001.png)*
Box 1: ID Scope -
In the Azure portal, select the Overview blade for your Device Provisioning service and copy the ID Scope value. The ID Scope is generated by the service and guarantees uniqueness. It is immutable and used to uniquely identify the registration IDs.

Box 2: Global device endpoint -
The global_prov_uri variable, which allows the IoT Hub client registration API IoTHubClient_LL_CreateFromDeviceAuth to connect with the designated Device
Provisioning Service instance.
Example code:
static const char* global_prov_uri = "global.azure-devices-provisioning.net"; static const char* id_scope = "[ID Scope]";
Reference:
https://docs.microsoft.com/en-us/azure/iot-dps/tutorial-set-up-device

## Topic 10 - Testlet 3

Question #1*Topic 10*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009700001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009800001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionYou plan to deploy Azure Time Series Insights.
What should you create on iothub1 before you deploy Time Series Insights?

- A. a new message route
- B. a new consumer group
- C. a new shared access policy
- D. an IP filter rule

**Correct Answer:** *B* 
Create a dedicated consumer group in the IoT hub for the Time Series Insights environment to consume from. Each Time Series Insights event source must have its own dedicated consumer group that isn't shared with any other consumer. If multiple readers consume events from the same consumer group, all readers are likely to exhibit failures.
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-how-to-add-an-event-source-iothub

Question #2*Topic 10*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009700001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009800001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionHow should you complete the GROUP BY clause to meet the Streaming Analytics requirements?

- A. GROUP BY HoppingWindow(Second, 60, 30)
- B. GROUP BY TumblingWindow(Second, 30)
- C. GROUP BY SlidingWindow(Second, 30)
- D. GROUP BY SessionWindow(Second, 30, 60)

**Correct Answer:** *B* 
Scenario: You plan to use a 30-second period to calculate the average temperature reading of the sensors.
Tumbling window functions are used to segment a data stream into distinct time segments and perform a function against them, such as the example below. The key differentiators of a Tumbling window are that they repeat, do not overlap, and an event cannot belong to more than one tumbling window.
Incorrect Answers:
A: Hopping window functions hop forward in time by a fixed period. It may be easy to think of them as Tumbling windows that can overlap, so events can belong to more than one Hopping window result set.
Reference:
https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-window-functions

Question #3*Topic 10*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009700001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0009800001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionHOTSPOT -
You need to use message enrichment to add additional device information to messages sent from the IoT gateway devices when the reported temperature exceeds a critical threshold.
How should you configure the enrich message values? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010100001.jpg)

**Correct Answer:** *![img](https://www.examtopics.com/assets/media/exam-media/04123/0010100002.jpg)* 
Reference:
https://docs.microsoft.com/bs-cyrl-ba/azure/iot-hub/iot-hub-message-enrichments-overview

## Topic 11 - Testlet 4

Question #1*Topic 11*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010300001.png)
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500002.jpg)QuestionYou need to configure Stream Analytics to meet the POV requirements.
What are two ways to achieve the goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.

- A. From IoT Hub, create a custom event hub endpoint, and then configure the endpoint as an input to Stream Analytics.
- B. Create a Stream Analytics module, and then deploy the module to all IoT Edge devices in the fleet.
- C. Create an input in Stream Analytics that uses the built-in events endpoint of IoT Hub as the source.
- D. Route telemetry to an Azure Blob storage custom endpoint, and then configure the Blob storage as a reference input for Stream Analytics.

**Correct Answer:** *AC* 

Question #2*Topic 11*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010300001.png)
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500002.jpg)QuestionDRAG DROP -
You need to add Time Series Insights to the solution to meet the pilot requirements.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010600001.png)

**Correct Answer:***![img](https://www.examtopics.com/assets/media/exam-media/04123/0010700001.png)*
Step 1: Provision Time Series Insights
Select Provision new IoT Hub to create a new IoT hub.
Step 2: Route telemetry from IoT Hub to a custom event.
Step 3: Add a data access policy to Time Series Insights for the dashboard web app
Scenario: Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Incorrect Answers:
No need to use an endpoint.
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-update-create-environment

Question #3*Topic 11*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010300001.png)
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500002.jpg)QuestionYou need to store the real-time alerts generated by Stream Analytics to meet the technical requirements.
Which type of Stream Analytics output should you configure?

- A. Azure Blob storage
- B. Microsoft Power BI
- C. Azure Cosmos DB
- D. Azure SQL Database

**Correct Answer:** *A* 
When you create a Time Series Insights Preview pay-as-you-go (PAYG) SKU environment, you create two Azure resources:
✑ An Azure Storage general-purpose V1 blob account for cold data storage.
✑ An Azure Time Series Insights Preview environment that can be configured for warm data storage.
Reference:
https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-update-storage-ingress

Question #4*Topic 11*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010300001.png)
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500002.jpg)QuestionYou need to recommend the format of telemetry messages to meet the POV requirements.
What should you recommend?

- A. XML
- B. Avro
- C. JSON

**Correct Answer:** *C* 
Scenario: POV Requirements -
Ensure that all message content during this phase is human readable to simplify debugging.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010800003.png)
Avro uses a binary format, so it is not human readable.
The more lightweight JSON (Javascript object notation) has become a popular alternative to XML for various reasons. A couple obvious ones are:
✑ Less verbose- XML uses more words than necessary
✑ JSON is faster- Parsing XML software is slow and cumbersome.
Reference:
https://blog.cloud-elements.com/json-better-xml

Question #5*Topic 11*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010300001.png)
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0010500002.jpg)QuestionDuring the POV phase, telemetry from IoT Hub stops flowing to the hot path. The cold path continues to work.
What should you do to restore the hot path?

- A. Disable the fallback route.
- B. Run the Test all routes action.
- C. Create an explicit route for the hot path.
- D. Modify cold-route to send only some telemetry data to the cold path.

**Correct Answer:** *C* 

## Topic 12 - Testlet 5

Question #1*Topic 12*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0012900001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0013000001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionYou need to enable telemetry message tracing through the entire IoT solution.
What should you do?

- A. Monitor device lifecycle events.
- B. Upload IoT device logs by using the File upload feature.
- C. Enable the DeviceTelemetry diagnostic log and stream the log data to an Azure event hub.
- D. Implement distributed tracing.

**Correct Answer:** *D* 
IoT Hub is one of the first Azure services to support distributed tracing. As more Azure services support distributed tracing, you'll be able trace IoT messages throughout the Azure services involved in your solution.
Note:
Enabling distributed tracing for IoT Hub gives you the ability to:
✑ Precisely monitor the flow of each message through IoT Hub using trace context. This trace context includes correlation IDs that allow you to correlate events from one component with events from another component. It can be applied for a subset or all IoT device messages using device twin.
✑ Automatically log the trace context to Azure Monitor diagnostic logs.
✑ Measure and understand message flow and latency from devices to IoT Hub and routing endpoints.
✑ Start considering how you want to implement distributed tracing for the non-Azure services in your IoT solution.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-distributed-tracing

## Topic 13 - Testlet 6

Question #1*Topic 13*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
ADatum Corporation is an international manufacturing company that has 3,000 employees.
ADatum has a main office in New York and more than 100 branch offices worldwide.

Requirements. Planned Changes -
ADatum is developing an Azure IoT solution to monitor environmental conditions. The IoT solution consists of hardware devices and cloud services. All the devices will communicate directly to Azure IoT Hub.
The hardware devices will be deployed to the branch offices and will collect data about various environmental conditions such as temperature, humidity, air quality, and noise level. The devices will be wired by using Power over Ethernet (PoE) connections.
ADatum is developing the solution in the following three phases: proof of value (POV), pilot, and production.

Requirements. POV Requirements -
The POV phase will demonstrate that a technical solution is viable. During this phase, 100 devices will be deployed to the main office and Azure Stream Analytics will be connected to an IoT hub to generate real-time alerts. Stream Analytics will perform the following processing:
Calculate the median rate of the telemetry across the entire device fleet and issue alerts for devices that exceed the median rate by a factor of 4.
Compare the current telemetry to the specified thresholds and issue alerts when telemetry values are out of range.
Ensure that all message content during this phase is human readable to simplify debugging.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0013300003.png)
Requirements. Pilot Requirements
During the pilot phase, devices will be deployed to 10 offices. Each office will have up to 1,000 devices.
During this phase, you will add Azure Time Series Insights in parallel to Stream Analytics to support real-time graphs and queries in a dashboard web app.
The pilot deployment must minimize operating costs.
Requirements. Production Requirements
The production phase will include all the offices.
The production deployment will have one IoT hub in each Azure region. Devices must connect to the IoT hub in their region.
The production phase must meet the following requirements:
Ensure that the IoT solution can support performance and scale targets.
Ensure that the IoT solution supports up to 1,000 devices per office.
Minimize operating costs of the IoT solution.
Requirements. Technical Requirements
Datum identifies the following requirements for the planned IoT solution:
The solution must generate real-time alerts when a fire condition is detected in an office. All the devices in that office must trigger an audible alarm siren within
10 seconds of the alert.
A dashboard UI must display alerts and the system status in real time and must allow device operators to make adjustments to the system.
Each device will send hourly updates to IoT Hub. Condition alerts will be sent immediately.
Multiple types of devices will collect telemetry that has different schemas.
IoT Hub must perform message routing based on the message body.
Direct methods must be used for cloud-to-device communication.
Reports must be provided monthly, quarterly, and annually.
Stored data queries must be as efficient as possible.
The device message size will be under 4 KB.
Development effort must be minimized.
Requirements. Throttle and Quotas
The relevant throttles and quotas for various IoT Hub tiers are shown in the following table.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0013500001.png)

Requirements. IoT Hub Routing -
You plan to implement IoT Hub routing during the POV phase as shown in the following exhibit.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0013500002.jpg)QuestionDuring the POV phase, you connect a device to IoT Hub and start sending telemetry messages.
You need to verify the content of the messages received by IoT Hub during the POV phase.
What should you use?

- A. the Monitoring settings of IoT Hub or a Postman call to the IoT Hub REST API
- B. Azure Monitor or Azure Log Analytics
- C. Microsoft Visual Studio Code that uses the IoT Hub Toolkit or Azure CLI that uses the IoT Hub extension
- D. Splunk or Grafana

**Correct Answer:** *B* 
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/tutorial-use-metrics-and-diags

## Topic 14 - Testlet 7

Question #1*Topic 14*

Introductory InfoCase Study -
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -
A company named Contoso, Ltd. is creating a building monitoring system that will monitor the temperature, humidity, and light level at various points in a building's internal structure.
Contoso will test the system at a single building located in the United Kingdom. The building has 25 floors. Each floor has 15 rooms.
Existing Environment. Current State of Development
Contoso produces a set of Bluetooth sensors that read the temperature and humidity. The sensors connect to IoT gateway devices that relay the data.
All the IoT gateway devices connect to an Azure IoT hub named iothub1.
Existing Environment. Device Twin
You plan to implement device twins by using the following JSON sample.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0018500001.jpg)
Existing Environment. Azure Stream Analytics
Each room will have between three to five sensors that will generate readings that are sent to a single IoT gateway device. The IoT gateway device will forward all the readings to iothub1 at intervals of between 10 and 60 seconds.
You plan to use a gateway pattern so that each IoT gateway device will have its own IoT Hub device identity.
You draft the following query, which is missing the GROUP BY clause.

SELECT -
AVG(temperature),

System.TimeStamp() AS AsaTime -

FROM -

Iothub -
You plan to use a 30-second period to calculate the average temperature reading of the sensors.
You plan to minimize latency between the condition reported by the sensors and the corresponding alert issued by the Stream Analytics job.
Existing Environment. Device Messages
The IoT gateway devices will send messages that contain the following JSON data whenever the temperature exceeds a specified threshold.
![img](https://www.examtopics.com/assets/media/exam-media/04123/0018600001.png)
The level property will be used to route the messages to an Azure Service Bus queue endpoint named criticalep.

Existing Environment. Issues -
You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.

Requirements. Planned Changes -
Contoso plans to make the following changes:
Use Stream Analytics to process and view data.
Use Azure Time Series Insights to visualize data.
Implement a system to sync device statuses and required settings.
Add extra information to messages by using message enrichment.
Create a notification system to send an alert if a condition exceeds a specified threshold.
Implement a system to identify what causes the intermittent connection issues and lost messages.
Requirements. Technical Requirements
Contoso must meet the following technical requirements:
Use the built-in functions of IoT Hub whenever possible.
Minimize hardware and software costs whenever possible.
Minimize administrative effort to provision devices at scale.
Implement a system to trace message flow to and from iothub1.
Minimize the amount of custom coding required to implement the planned changes.
Prevent read operations from being negatively affected when you implement additional services.QuestionYou need to recommend a solution to keep device properties synced to IoT Hub. The solution must minimize data loss caused by the connectivity issues.
What should you include in the recommendation?

- A. Azure Event Grid
- B. a cloud-to-device message
- C. IoT Hub device twins
- D. the IoT Hub direct method

**Correct Answer:** *C* 
Scenario: You discover connectivity issues between the IoT gateway devices and iothub1, which cause IoT devices to lose connectivity and messages.
To synchronize state information between a device and an IoT hub, you use device twins. A device twin is a JSON document, associated with a specific device, and stored by IoT Hub in the cloud where you can query them. A device twin contains desired properties, reported properties, and tags.
Reference:
https://docs.microsoft.com/en-us/azure/iot-hub/tutorial-device-twins