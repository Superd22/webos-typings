/** ACG: bluetooth.operationDescriptionThis is the first API that must be called by the application to create a network and to become a provisioner. This is called once for every network and the token returned should be stored securely by the application.This API should not be called if the local node is not acting as the provisioner.Parameters */
export interface Bluetooth2MeshCreateNetworkParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
}

/** ACG: bluetooth.operationDescriptionThis is the first API that must be called by the application to create a network and to become a provisioner. This is called once for every network and the token returned should be stored securely by the application.This API should not be called if the local node is not acting as the provisioner.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)Call Returns */
export interface Bluetooth2MeshCreateNetworkCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** The unique identifier for the local network. */
    networkId: string;
}

/** ACG: bluetooth.operationDescriptionScans for mesh devices to provision when the local node is provisioner.Parameters */
export interface Bluetooth2MeshScanUnprovisionedDevicesParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Scan timeout in seconds. The scan continues until mesh/unprovisionedScanCancel is called or for scanTimeout seconds (if non-zero).Default value: 20 sec */
    scanTimeout?: number;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed. */
    subscribe: boolean;
}

/** Array of BLE Mesh devices that are known to the system and that are not yet provisioned by the system */
export interface Bluetooth2BleMeshUnprovisionedDevice {
    /** RSSI Measurement of the signal strength of the received unprovisioned beacon */
    rssi: number;
    /** Device uuid */
    uuid: string;
    /** Device name */
    name?: string;
}

/** ACG: bluetooth.operationDescriptionScans for mesh devices to provision when the local node is provisioner.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)scanTimeoutOptionalNumber (uint16_t)Scan timeout in seconds. The scan continues until mesh/unprovisionedScanCancel is called or for scanTimeout seconds (if non-zero).Default value: 20 secsubscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed.Call Returns */
export interface Bluetooth2MeshScanUnprovisionedDevicesCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** Array of BLE Mesh devices that are known to the system and that are not yet provisioned by the system.Note: Contains information for all the devices known to the system. */
    devices: Bluetooth2BleMeshUnprovisionedDevice[];
    /** BLE Mesh device that is known to the system and that is not yet provisioned by the system.Note: Contains information of only a single device detected in the scan environment during the mesh/scanUnprovisionedDevices API call. The device is listed for the following reasons: New device detected in the scan environment. */
    device: Bluetooth2BleMeshUnprovisionedDevice;
}

/** ACG: bluetooth.operationDescriptionScans for mesh devices to provision when the local node is provisioner.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)scanTimeoutOptionalNumber (uint16_t)Scan timeout in seconds. The scan continues until mesh/unprovisionedScanCancel is called or for scanTimeout seconds (if non-zero).Default value: 20 secsubscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.devicesRequiredObject array: BleMeshUnprovisionedDeviceArray of BLE Mesh devices that are known to the system and that are not yet provisioned by the system.Note: Contains information for all the devices known to the system.deviceRequiredObject: BleMeshUnprovisionedDeviceBLE Mesh device that is known to the system and that is not yet provisioned by the system.Note: Contains information of only a single device detected in the scan environment during the mesh/scanUnprovisionedDevices API call. The device is listed for the following reasons: New device detected in the scan environment.Subscription Returns */
export interface Bluetooth2MeshScanUnprovisionedDevicesSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** Array of BLE Mesh devices that are known to the system and that are not yet provisioned by the system.Note: Contains information for all the devices known to the system. */
    devices: Bluetooth2BleMeshUnprovisionedDevice[];
    /** BLE Mesh device that is known to the system and that is not yet provisioned by the system.Note: Contains information of only a single device detected in the scan environment during the mesh/scanUnprovisionedDevices API call. The device is listed for the following reasons: New device detected in the scan environment. */
    device: Bluetooth2BleMeshUnprovisionedDevice;
}

/** ACG: bluetooth.operationDescriptionCancels scanning for unprovisioned BLE mesh devices.Parameters */
export interface Bluetooth2MeshUnprovisionedScanCancelParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
}

/** ACG: bluetooth.operationDescriptionCancels scanning for unprovisioned BLE mesh devices.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)Call Returns */
export interface Bluetooth2MeshUnprovisionedScanCancelCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** ACG: bluetooth.operationDescriptionInitiates provisioning of a device.Once a mesh device is discovered using mesh/scanUnprovisionedDevices API, the discovered device can be provisioned using this method. After the provisioning, the device becomes a node in the mesh network.Parameters */
export interface Bluetooth2MeshProvisionParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Provision request timeout in seconds.Default value: 60 secNote: Authentication data must be supplied in this interval if requiredeg. call mesh/supplyProvisioningOob API if request string is "promptStatic" */
    timeout?: number;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method).false: Not subscribed. */
    subscribe: string;
    /** Device UUID for provisioning device. UUID is received as part of the subscription response of mesh/scanUnprovisionedDevices API. */
    uuid: string;
}

/** ACG: bluetooth.operationDescriptionInitiates provisioning of a device.Once a mesh device is discovered using mesh/scanUnprovisionedDevices API, the discovered device can be provisioned using this method. After the provisioning, the device becomes a node in the mesh network.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)timeoutOptionalNumber (uint16_t)Provision request timeout in seconds.Default value: 60 secNote: Authentication data must be supplied in this interval if requiredeg. call mesh/supplyProvisioningOob API if request string is "promptStatic"subscribeRequiredStringSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method).false: Not subscribed.uuidRequiredStringDevice UUID for provisioning device. UUID is received as part of the subscription response of mesh/scanUnprovisionedDevices API.Call Returns */
export interface Bluetooth2MeshProvisionCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** ACG: bluetooth.operationDescriptionInitiates provisioning of a device.Once a mesh device is discovered using mesh/scanUnprovisionedDevices API, the discovered device can be provisioned using this method. After the provisioning, the device becomes a node in the mesh network.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)timeoutOptionalNumber (uint16_t)Provision request timeout in seconds.Default value: 60 secNote: Authentication data must be supplied in this interval if requiredeg. call mesh/supplyProvisioningOob API if request string is "promptStatic"subscribeRequiredStringSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method).false: Not subscribed.uuidRequiredStringDevice UUID for provisioning device. UUID is received as part of the subscription response of mesh/scanUnprovisionedDevices API.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Subscription Returns */
export interface Bluetooth2MeshProvisionSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** Indicates the type of user interaction required to complete provisioning.Possible values are:displayString: Display the string from "stringToDisplay" field and do not require any additional input locally. For instance: "Enter "ABCDE" on remote device".displayNumeric: Display the number from "numberToDisplay" field in the way requested in "numberDisplayType " field.promptNumeric: Supply the decimal value between 1-99999999. Which decimal value to supply is indicated by "promptType" field. supplyProvisioningNumeric() API can be used to supply the required data.promptStatic: Supply 16 octet byte array, as an Out-of-Band authentication. supplyProvisioningOob() API can be used to supply the required data.endProvision: Indicates the end of provisioning. */
    request: string;
    /** The string to display to the user when "request"="displayString" */
    stringToDisplay?: string;
    /** The number to display when "request"="displayNumeric". */
    numberToDisplay?: number;
    /** Indicates how the number should be displayed when "request"="displayNumeric".Possible values are:blink: Locally blink LEDbeep: Locally make a noisevibrate: Locally vibrateout-numeric: Display value to enter remotelypush: Request pushes on remote buttontwist: Request twists on remote knob */
    numberDisplayType?: string;
    /** The input method (how the number to supply is shown) when "request"="promptNumeric".Possible values are:blink: Enter times remote LED blinkedbeep: Enter times remote device beepedvibrate: Enter times remote device vibratedin-numeric: Enter a remotely displayed valuepush: Push local button requested timestwist: Twist local knob remotely requested times */
    promptType?: string;
    /** The unicast address of the node provisioned when the provisioning is success and "request"="endProvision". */
    unicastAddress?: number;
    /** The uuid of the device. */
    uuid: string;
}

/** ACG: bluetooth.operationDescriptionProvides decimal number for authentication during provisioning; when "request" = "promptNumeric" in the subscription response of mesh/provision API.Parameters */
export interface Bluetooth2MeshSupplyProvisioningNumericParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The numeric data. */
    number: number;
}

/** ACG: bluetooth.operationDescriptionProvides decimal number for authentication during provisioning; when "request" = "promptNumeric" in the subscription response of mesh/provision API.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)numberRequiredNumberThe numeric data.Call Returns */
export interface Bluetooth2MeshSupplyProvisioningNumericCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the static OOB data required during provision; when "request" = "promptStatic" in the subscription response of mesh/provision API.Parameters */
export interface Bluetooth2MeshSupplyProvisioningOobParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The static OOB data which is 16 octet byte array. */
    oobData: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the static OOB data required during provision; when "request" = "promptStatic" in the subscription response of mesh/provision API.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)oobDataRequiredStringThe static OOB data which is 16 octet byte array.Call Returns */
export interface Bluetooth2MeshSupplyProvisioningOobCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** ACG: bluetooth.operationDescriptionRequests to generate a new application key.This call affects the local key database only. To update the remote config server, use mesh/model/config/set.Parameters */
export interface Bluetooth2MeshCreateAppKeyParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The net key to be bound to the application key.Note: If netKeyIndex value is not passed the primary netKeyIndex (i.e. 000) is used. Call mesh/getMeshInfo to get the available netKeyIndexes. */
    netKeyIndex?: number;
    /** The app key index to add.Note: If appKeyIndex value is not passed, Bluetooth service creates appKeyIndex. */
    appKeyIndex?: number;
}

/** ACG: bluetooth.operationDescriptionRequests to generate a new application key.This call affects the local key database only. To update the remote config server, use mesh/model/config/set.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)netKeyIndexOptionalNumberThe net key to be bound to the application key.Note: If netKeyIndex value is not passed the primary netKeyIndex (i.e. 000) is used. Call mesh/getMeshInfo to get the available netKeyIndexes.appKeyIndexOptionalNumberThe app key index to add.Note: If appKeyIndex value is not passed, Bluetooth service creates appKeyIndex.Call Returns */
export interface Bluetooth2MeshCreateAppKeyCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** The net key index bound to application key. */
    netKeyIndex?: number;
    /** The created app key index. */
    appKeyIndex?: number;
}

/** Payload object structure when the command is "passThrough" in mesh/model/send API. */
export interface Bluetooth2BleMeshPayloadForpassthroughcommand {
    /** Payload for passThrough command */
    value: number[];
}

/** Payload object structure when the command is "onOff" in mesh/model/send API. */
export interface Bluetooth2BleMeshPayloadForonOffcommand {
    /** Payload for onOff command */
    value: boolean;
}

/** ACG: bluetooth.operationDescriptionSends a message originated by a local model.Parameters */
export interface Bluetooth2MeshModelSendParameters {
    /** The address of the adapter. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The unicast address of the source element. */
    srcAddress: number;
    /** The destination unicast address or group address. */
    destAddress: number;
    /** The application key to use for encrypting the message. The appKeyIndex must be valid for that elementNote: The application which has created the appKeyIndex will only receive messages belonging to that application */
    appKeyIndex: number;
    /** The command that corresponds to the message being sent in the payload.Possible values are:passThroughonOffNote: webos-bluetooth-service with the help of the underlying stack just encrypts and sends the payload when the command is passThrough. The application sends the payload that is in the packet format as mentioned in the specification. The bluetooth service and the underlying stack do not do any processing of the payload. */
    command: string;
    /** Payload object when "command" = "passthrough". */
    payload: Bluetooth2BleMeshPayloadForpassthroughcommand;
    /** Payload object when "command" = "onOff". */
    payload: Bluetooth2BleMeshPayloadForonOffcommand;
}

/** ACG: bluetooth.operationDescriptionSends a message originated by a local model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)srcAddressRequiredNumberThe unicast address of the source element.destAddressRequiredNumberThe destination unicast address or group address.appKeyIndexRequiredNumberThe application key to use for encrypting the message. The appKeyIndex must be valid for that elementNote: The application which has created the appKeyIndex will only receive messages belonging to that applicationcommandRequiredStringThe command that corresponds to the message being sent in the payload.Possible values are:passThroughonOffNote: webos-bluetooth-service with the help of the underlying stack just encrypts and sends the payload when the command is passThrough. The application sends the payload that is in the packet format as mentioned in the specification. The bluetooth service and the underlying stack do not do any processing of the payload.payloadRequiredObject: BleMeshPayload - for "passthrough" commandPayload object when "command" = "passthrough".payloadRequiredObject: BleMeshPayload - for "onOff" commandPayload object when "command" = "onOff".Call Returns */
export interface Bluetooth2MeshModelSendCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** ACG: bluetooth.operationDescriptionReceives messages addressed to the application.Parameters */
export interface Bluetooth2MeshModelReceiveParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The application key to be used for decrypting the message. The appKeyIndex must be valid for that element. */
    appKeyIndex: number;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed. */
    subscribe: boolean;
}

/** ACG: bluetooth.operationDescriptionReceives messages addressed to the application.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)appKeyIndexRequiredNumberThe application key to be used for decrypting the message. The appKeyIndex must be valid for that element.subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.Call Returns */
export interface Bluetooth2MeshModelReceiveCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** ACG: bluetooth.operationDescriptionReceives messages addressed to the application.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)appKeyIndexRequiredNumberThe application key to be used for decrypting the message. The appKeyIndex must be valid for that element.subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Subscription Returns */
export interface Bluetooth2MeshModelReceiveSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The unicast address of the remote node-element that sent the message. */
    srcAddress: number;
    /** The destination address of received message. */
    destAddress: number;
    /** The incoming message. */
    data: number[];
}

/** ACG: bluetooth.queryDescriptionGets various configuration parameters provided by configuration model.Parameters */
export interface Bluetooth2MeshModelConfigGetParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed. */
    subscribe: boolean;
    /** The unicast address of the destination. */
    destAddress: number;
    /** The configurations to be retrieved.Possible values are:APPKEYINDEXDEFAULT_TTLGATT_PROXYRELAY */
    config: string;
    /** The index of the net key. This parameter is mandatory if config field is APPKEYINDEX and ignored for others. */
    netKeyIndex?: number;
}

/** ACG: bluetooth.queryDescriptionGets various configuration parameters provided by configuration model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.destAddressRequiredNumberThe unicast address of the destination.configRequiredStringThe configurations to be retrieved.Possible values are:APPKEYINDEXDEFAULT_TTLGATT_PROXYRELAYnetKeyIndexOptionalNumberThe index of the net key. This parameter is mandatory if config field is APPKEYINDEX and ignored for others.Call Returns */
export interface Bluetooth2MeshModelConfigGetCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** provide node relay information */
export interface Bluetooth2BleMeshConfigRelayStatus {
    /** Provide relay information */
    relay: number;
    /** Provide retransmitIntervalSteps information */
    retransmitIntervalSteps: number;
    /** provide retransmitCount information */
    retransmitCount: number;
}

/** ACG: bluetooth.queryDescriptionGets various configuration parameters provided by configuration model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.destAddressRequiredNumberThe unicast address of the destination.configRequiredStringThe configurations to be retrieved.Possible values are:APPKEYINDEXDEFAULT_TTLGATT_PROXYRELAYnetKeyIndexOptionalNumberThe index of the net key. This parameter is mandatory if config field is APPKEYINDEX and ignored for others.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Subscription Returns */
export interface Bluetooth2MeshModelConfigGetSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The configuration that is requested to be retrieved. */
    config: string;
    /** A list of AppKey indexes that are bound to the NetKey identified by netKeyIndex passed during API call.Note: This information will be sent when config is APPKEYINDEX */
    appKeyIndexes?: number[];
    /** The default TTL for the outgoing messages.Values will be in the range: 0x00, 0x02–0x7FNote: This information will be sent when config is DEFAULT_TTL */
    ttl?: number;
    /** The GATT proxy state.Possible values are:0x00 - The Proxy feature is supported and disabled0x01 - The Proxy feature is supported and enabled0x02 - The Proxy feature is not supportedNote: This information will be sent when config is GATT_PROXY */
    gattProxyState?: number;
    /** The Current Relay and Relay Retransmit states of a node.Note: This information will be sent when config is RELAY */
    relayStatus?: Bluetooth2BleMeshConfigRelayStatus;
}

/** ACG: bluetooth.operationDescriptionSets various configuration parameters provided by the configuration model.Parameters */
export interface Bluetooth2MeshModelConfigSetParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed. */
    subscribe: boolean;
    /** The unicast address of the destination. */
    destAddress: number;
    /** The configuration to be set.Possible values are:APPKEY_ADDAPPKEY_DELETEAPPKEY_UPDATEAPPKEY_BINDAPPKEY_UNBINDDEFAULT_TTLGATT_PROXYRELAY */
    config: string;
    /** The net key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_UNBIND */
    netKeyIndex?: number;
    /** The app key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_BIND, APPKEY_UNBIND. */
    appKeyIndex?: number;
    /** SIG Model ID or Vendor Model ID.Note: Mandatory parameter if config is APPKEY_BIND, APPKEY_UNBIND. */
    modelId?: number;
    /** The default TTL to set for the outgoing message.Values can be in the range: 0x00, 0x02–0x7FNote: Mandatory parameter if config is DEFAULT_TTL. */
    ttl?: number;
    /** The GATT proxy state to set.Possible values are:0x00: The Proxy feature is supported and disabled0x01: The Proxy feature is supported and enabled0x02: The Proxy feature is not supportedNote: Mandatory parameter if config is GATT_PROXY. */
    gattProxyState?: number;
    /** The Current Relay and Relay Retransmit states of a node.Note: Mandatory parameter if config is RELAY. */
    relayStatus?: Bluetooth2BleMeshConfigRelayStatus;
}

/** ACG: bluetooth.operationDescriptionSets various configuration parameters provided by the configuration model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.destAddressRequiredNumberThe unicast address of the destination.configRequiredStringThe configuration to be set.Possible values are:APPKEY_ADDAPPKEY_DELETEAPPKEY_UPDATEAPPKEY_BINDAPPKEY_UNBINDDEFAULT_TTLGATT_PROXYRELAYnetKeyIndexOptionalNumberThe net key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_UNBINDappKeyIndexOptionalNumberThe app key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_BIND, APPKEY_UNBIND.modelIdOptionalNumberSIG Model ID or Vendor Model ID.Note: Mandatory parameter if config is APPKEY_BIND, APPKEY_UNBIND.ttlOptionalNumberThe default TTL to set for the outgoing message.Values can be in the range: 0x00, 0x02–0x7FNote: Mandatory parameter if config is DEFAULT_TTL.gattProxyStateOptionalNumberThe GATT proxy state to set.Possible values are:0x00: The Proxy feature is supported and disabled0x01: The Proxy feature is supported and enabled0x02: The Proxy feature is not supportedNote: Mandatory parameter if config is GATT_PROXY.relayStatusOptionalObject: BleMeshConfigRelayStatusThe Current Relay and Relay Retransmit states of a node.Note: Mandatory parameter if config is RELAY.Call Returns */
export interface Bluetooth2MeshModelConfigSetCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** ACG: bluetooth.operationDescriptionSets various configuration parameters provided by the configuration model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.destAddressRequiredNumberThe unicast address of the destination.configRequiredStringThe configuration to be set.Possible values are:APPKEY_ADDAPPKEY_DELETEAPPKEY_UPDATEAPPKEY_BINDAPPKEY_UNBINDDEFAULT_TTLGATT_PROXYRELAYnetKeyIndexOptionalNumberThe net key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_UNBINDappKeyIndexOptionalNumberThe app key index.Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_BIND, APPKEY_UNBIND.modelIdOptionalNumberSIG Model ID or Vendor Model ID.Note: Mandatory parameter if config is APPKEY_BIND, APPKEY_UNBIND.ttlOptionalNumberThe default TTL to set for the outgoing message.Values can be in the range: 0x00, 0x02–0x7FNote: Mandatory parameter if config is DEFAULT_TTL.gattProxyStateOptionalNumberThe GATT proxy state to set.Possible values are:0x00: The Proxy feature is supported and disabled0x01: The Proxy feature is supported and enabled0x02: The Proxy feature is not supportedNote: Mandatory parameter if config is GATT_PROXY.relayStatusOptionalObject: BleMeshConfigRelayStatusThe Current Relay and Relay Retransmit states of a node.Note: Mandatory parameter if config is RELAY.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Subscription Returns */
export interface Bluetooth2MeshModelConfigSetSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The configuration which is updated. */
    config: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionGets mesh network-related information.Parameters */
export interface Bluetooth2MeshGetMeshInfoParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
}

/** Object provides the info related to network key */
export interface Bluetooth2BleMeshNetKeys {
    /** Net key index */
    index: number;
    /** Indicates if the net key refresh is in progress. */
    keyRefresh: boolean;
}

/** Object gives the info related to app-key used/created by the application */
export interface Bluetooth2BleMeshAppKeys {
    /** App key index */
    index: number;
    /** Net key index to which this app key is bound. */
    boundNetKeyIndex: number;
}

/** Object provides provisioner related information */
export interface Bluetooth2BleMeshProvisioner {
    /** Provisioner name */
    name: string;
    /** Unicast address of the provisioner */
    unicastAddress: number;
}

/** Object provides mesh network information */
export interface Bluetooth2BleMeshInfo {
    /** The name of the mesh network. */
    name: string;
    /** Network key information. */
    netKeys: Bluetooth2BleMeshNetKeys[];
    /** Application keys information. */
    appKeys: Bluetooth2BleMeshAppKeys[];
    /** Provisioner-related information, which includes the unicast address of the provisioner and the address range that the provisioner can use to assign unicast addresses to the nodes. */
    provisioners: Bluetooth2BleMeshProvisioner[];
}

/** ACG: bluetooth.queryDescriptionGets mesh network-related information.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)Call Returns */
export interface Bluetooth2MeshGetMeshInfoCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Details of the mesh network. */
    meshInfo: Bluetooth2BleMeshInfo;
}

/** ACG: bluetooth.queryDescriptionGets composition data of a mesh node. The composition data contains information about a node, the elements it includes, and the supported models.Note: The naming convention for this method is taken from the specification.Parameters */
export interface Bluetooth2MeshModelConfigGetCompositionDataParameters {
    /** The address of the adapter to be used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The destination address. */
    destAddress: number;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed. */
    subscribe: boolean;
}

/** ACG: bluetooth.queryDescriptionGets composition data of a mesh node. The composition data contains information about a node, the elements it includes, and the supported models.Note: The naming convention for this method is taken from the specification.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)destAddressRequiredNumberThe destination address.subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.Call Returns */
export interface Bluetooth2MeshModelConfigGetCompositionDataCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** Object information indicating the device features. */
export interface Bluetooth2BleMeshFeature {
    /** Relay feature support. Possible values are:true: feature is supportedfalse: feature is not supported */
    relay: boolean;
    /** Proxy feature support. Possible values are:true: feature is supportedfalse: feature is not supported */
    proxy: boolean;
    /** Friend feature support. Possible values are:true: feature is supportedfalse: feature is not supported */
    friend: boolean;
    /** Low Power feature support. Possible values are:true: feature is supportedfalse: feature is not supported */
    lowPower: boolean;
}

/** Object provides sequence of element descriptions */
export interface Bluetooth2BleMeshElement {
    /** Location descriptor */
    loc: number;
    /** Number of SIG Model IDs in this element */
    numS: string;
    /** Sequence of SIG Model IDs */
    sigModelIds: number[];
    /** Number of Vendor Model IDs in this element */
    numV: number;
    /** Sequence of NumV Vendor Model IDs */
    vendorModelIds: number[];
}

/** Provides composition data information about a requested node. */
export interface Bluetooth2BleMeshCompositionData {
    /** Company identifier assigned by the Bluetooth SIG */
    companyId: number;
    /** Vendor-assigned product identifier */
    productId: number;
    /** Vendor-assigned product version identifier */
    versionId: number;
    /** Minimum number of replay protection list entries in a device */
    numRplEnteries: number;
    /** Contains information indicating the device features */
    features: Bluetooth2BleMeshFeature;
    /** Contains a sequence of element descriptions */
    elements: Bluetooth2BleMeshElement[];
}

/** ACG: bluetooth.queryDescriptionGets composition data of a mesh node. The composition data contains information about a node, the elements it includes, and the supported models.Note: The naming convention for this method is taken from the specification.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)destAddressRequiredNumberThe destination address.subscribeRequiredBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed (Must be set to true. The caller must subscribe to this method.)false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Subscription Returns */
export interface Bluetooth2MeshModelConfigGetCompositionDataSubscription {
    /** Indicates the status of the operation. */
    returnValue: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** Composition data information about a requested node. */
    compositionData: Bluetooth2BleMeshCompositionData;
}

/** ACG: bluetooth.operationDescriptionSets the on/off state of the remote node using a generic on-off model.Parameters */
export interface Bluetooth2MeshModelOnOffSetParameters {
    /** The address of the adapter to be used */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** The destination address. */
    destAddress: number;
    /** The application key index to used for encoding. */
    appKeyIndex: number;
    /** The state of the remote node.Possible values are:true: Onfalse: Off */
    state: boolean;
    /** Subscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed (default).Note: If not subscribed, unacknowledged on/off message is sent to the remote node, acknowledged message is sent otherwise. */
    subscribe?: boolean;
}

/** ACG: bluetooth.operationDescriptionSets the on/off state of the remote node using a generic on-off model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be usedbearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)destAddressRequiredNumberThe destination address.appKeyIndexRequiredNumberThe application key index to used for encoding.stateRequiredBooleanThe state of the remote node.Possible values are:true: Onfalse: OffsubscribeOptionalBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed (default).Note: If not subscribed, unacknowledged on/off message is sent to the remote node, acknowledged message is sent otherwise.Call Returns */
export interface Bluetooth2MeshModelOnOffSetCallReturn {
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** ACG: bluetooth.operationDescriptionSets the on/off state of the remote node using a generic on-off model.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter to be usedbearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)destAddressRequiredNumberThe destination address.appKeyIndexRequiredNumberThe application key index to used for encoding.stateRequiredBooleanThe state of the remote node.Possible values are:true: Onfalse: OffsubscribeOptionalBooleanSubscribe for notifications on changes.Possible values are:true: Subscribed.false: Not subscribed (default).Note: If not subscribed, unacknowledged on/off message is sent to the remote node, acknowledged message is sent otherwise.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation.adapterAddressRequiredStringThe address of the adapter.Subscription Returns */
export interface Bluetooth2MeshModelOnOffSetSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The address of the adapter. */
    adapterAddress: string;
    /** The state of the remote node. */
    onoFF: boolean;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
}

/** ACG: bluetooth.queryDescriptionGets a list of provisioned nodes.Parameters */
export interface Bluetooth2MeshListProvisionedNodesParameters {
    /** The address of the adapter.Note: If not specified, the default adapter is used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
}

/** Object containing a list of provisioned nodes in the network */
export interface Bluetooth2BleMeshNode {
    /** UUID of the node */
    uuid: string;
    /** Unicast address assigned to primary element of the node. */
    primaryElementAddress: number;
    /** Specifies the number of elements that are present in the remote node.For example, if "primaryElementAddress" = 170 and "numberOfElements" = 3, this means that the primary element is assigned with address 170, and the remaining two elements are assigned with addresses 171 and 172.The application can call the mesh/model/config/getCompositionData API to know about the models supported in each element. It can use these addresses as the destination address to communicate with those models. */
    numberOfElements: number;
    /** Network key index of the network that this node is associated with */
    netKeyIndex: number;
    /** App key indexes known/used by the node */
    appKeyIndexes: number[];
}

/** ACG: bluetooth.queryDescriptionGets a list of provisioned nodes.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter.Note: If not specified, the default adapter is used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)Call Returns */
export interface Bluetooth2MeshListProvisionedNodesCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'Error Codes' section of this method for details. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Array of provisioned nodes in the network. */
    nodes: Bluetooth2BleMeshNode[];
}

/** ACG: bluetooth.managementDescriptionRemoves the node from the network.Multiple nodes can be removed by calling this API multiple times. After the required nodes are removed from the mesh network, key refresh procedure for the corresponding app keys and net key must be initiated by the application using mesh/keyRefresh API to avoid compromising network security.Parameters */
export interface Bluetooth2MeshRemoveNodeParameters {
    /** The address of the adapter.Note: If not specified, the default adapter is used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Unicast address of the primary element of the node to be removed from the network.Valid Range: 1 to 32767.Note: Removing local node not allowed */
    primaryElementAddress: number;
}

/** ACG: bluetooth.managementDescriptionRemoves the node from the network.Multiple nodes can be removed by calling this API multiple times. After the required nodes are removed from the mesh network, key refresh procedure for the corresponding app keys and net key must be initiated by the application using mesh/keyRefresh API to avoid compromising network security.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter.Note: If not specified, the default adapter is used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)primaryElementAddressRequiredNumberUnicast address of the primary element of the node to be removed from the network.Valid Range: 1 to 32767.Note: Removing local node not allowedCall Returns */
export interface Bluetooth2MeshRemoveNodeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'Error Codes' section of this method for details. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
    /** Unicast address of the node which is removed from the network. */
    primaryElementAddress: number;
}

/** ACG: bluetooth.managementDescriptionRefreshes the mesh network key and associated app keys.Parameters */
export interface Bluetooth2MeshKeyRefreshParameters {
    /** Subscribe for notifications about any failure during the key refresh procedure.Possible values are:true: Subscribed.false: Not subscribed.For example: If app key update to the remote node fails during the key refresh procedure, it informs the application using subscription response and the key refresh procedure continues for the remaining nodes. */
    subscribe: boolean;
    /** The address of the adapter.Note: If not specified, the default adapter is used. */
    adapterAddress?: string;
    /** The underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported) */
    bearer?: string;
    /** Provide a list of blacklistedNodes, represented by the primary element address of the node.Note: Blacklisted nodes will not receive new app/network keys during the keyRefresh process. */
    blacklistedNodes?: number[];
    /** The total duration (in seconds) to wait for each phase to complete during keyRefresh process.The application has to provide a time considering the low power nodes in the network as they may take longer to respond.Note: If not specified, a default timeout time of 2 seconds is used. */
    waitTimeout?: number;
    /** Indicates whether to refresh appkeys associated with net key indicated by netKeyIndextrue: Refresh app keys (List the app keys to refresh in "appKeyIndexes" field)false: Do not Refresh app keysNote: If not specified, the default value false is used.Use case 1: When an application had called removeNode API to remove a node from the network, it can refresh only those app keys that were known to the removed node. In that case:Call this API with refreshAppKeys = true and give the list of app keys known to removed node in appKeyIndexes parameter.Use case 2: When an application wants to refresh all the keys to prevent any security threat:Call this API with refreshAppKeys = true and appKeyIndexes as an empty array,Use case 3: When an application wants to refresh only Netkeys to prevent any security threat:Call this API with refreshAppKeys = false */
    refreshAppKeys?: boolean;
    /** Provide app key indexes to refresh. This parameter is ignored if refreshAppKeys is false.Note:If refreshAppKeys is true, and an empty array is passed, or if this field is not provided, all app keys will be refreshed by default.List of appkeys known to a node can be fetched by calling mesh/listProvisionedNodes API before removing a particular node. */
    appKeyIndexes?: number[];
}

/** ACG: bluetooth.managementDescriptionRefreshes the mesh network key and associated app keys.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe for notifications about any failure during the key refresh procedure.Possible values are:true: Subscribed.false: Not subscribed.For example: If app key update to the remote node fails during the key refresh procedure, it informs the application using subscription response and the key refresh procedure continues for the remaining nodes.adapterAddressOptionalStringThe address of the adapter.Note: If not specified, the default adapter is used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)blacklistedNodesOptionalNumber arrayProvide a list of blacklistedNodes, represented by the primary element address of the node.Note: Blacklisted nodes will not receive new app/network keys during the keyRefresh process.waitTimeoutOptionalNumberThe total duration (in seconds) to wait for each phase to complete during keyRefresh process.The application has to provide a time considering the low power nodes in the network as they may take longer to respond.Note: If not specified, a default timeout time of 2 seconds is used.refreshAppKeysOptionalBooleanIndicates whether to refresh appkeys associated with net key indicated by netKeyIndextrue: Refresh app keys (List the app keys to refresh in "appKeyIndexes" field)false: Do not Refresh app keysNote: If not specified, the default value false is used.Use case 1: When an application had called removeNode API to remove a node from the network, it can refresh only those app keys that were known to the removed node. In that case:Call this API with refreshAppKeys = true and give the list of app keys known to removed node in appKeyIndexes parameter.Use case 2: When an application wants to refresh all the keys to prevent any security threat:Call this API with refreshAppKeys = true and appKeyIndexes as an empty array,Use case 3: When an application wants to refresh only Netkeys to prevent any security threat:Call this API with refreshAppKeys = falseappKeyIndexesOptionalNumber arrayProvide app key indexes to refresh. This parameter is ignored if refreshAppKeys is false.Note:If refreshAppKeys is true, and an empty array is passed, or if this field is not provided, all app keys will be refreshed by default.List of appkeys known to a node can be fetched by calling mesh/listProvisionedNodes API before removing a particular node.Call Returns */
export interface Bluetooth2MeshKeyRefreshCallReturn {
    /** Indicates if subscribed to get notifications. */
    subscribed?: boolean;
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'Error Codes' section of this method for details. */
    errorText?: string;
    /** The address of the adapter. */
    adapterAddress: string;
}

/** Object representing the intermediate response during key update to nodes in the network. */
export interface Bluetooth2BleMeshKeyUpdateResponse {
    /** Code for the response. Possible values are:47: Cannot update appKey49: Network key update failed */
    responseCode: number;
    /** Description of the response (check responseCode field) */
    responseText: string;
    /** Primary element address of the node to which app key or net key updating failed.This information is provided when responseCode is 47 or 49.NOTE: The node is as good as removed from the network, if updating a network key to a node fails; because that node will not have the updated key and hence cannot communicate with other nodes in the network. The application can discover the device and provision it again. */
    primaryElementAddress: number;
    /** App key index for which appkey update was failed for a particular node represented by primaryElementAddress.This information is provided when responseCode is 47.If updating appkey fails to any node, application can call APPKEY_UNBIND, APPKEY_DELETE, APPKEY_ADD and APPKEY_BIND in that sequence again for thefailed node using mesh/model/config/set API after the completion of key refresh procedure. */
    appKeyIndex?: number;
}

/** ACG: bluetooth.managementDescriptionRefreshes the mesh network key and associated app keys.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe for notifications about any failure during the key refresh procedure.Possible values are:true: Subscribed.false: Not subscribed.For example: If app key update to the remote node fails during the key refresh procedure, it informs the application using subscription response and the key refresh procedure continues for the remaining nodes.adapterAddressOptionalStringThe address of the adapter.Note: If not specified, the default adapter is used.bearerOptionalStringThe underlying bearer to use.Possible values are:PB-ADV (default)PB-GATT (Currently not supported)blacklistedNodesOptionalNumber arrayProvide a list of blacklistedNodes, represented by the primary element address of the node.Note: Blacklisted nodes will not receive new app/network keys during the keyRefresh process.waitTimeoutOptionalNumberThe total duration (in seconds) to wait for each phase to complete during keyRefresh process.The application has to provide a time considering the low power nodes in the network as they may take longer to respond.Note: If not specified, a default timeout time of 2 seconds is used.refreshAppKeysOptionalBooleanIndicates whether to refresh appkeys associated with net key indicated by netKeyIndextrue: Refresh app keys (List the app keys to refresh in "appKeyIndexes" field)false: Do not Refresh app keysNote: If not specified, the default value false is used.Use case 1: When an application had called removeNode API to remove a node from the network, it can refresh only those app keys that were known to the removed node. In that case:Call this API with refreshAppKeys = true and give the list of app keys known to removed node in appKeyIndexes parameter.Use case 2: When an application wants to refresh all the keys to prevent any security threat:Call this API with refreshAppKeys = true and appKeyIndexes as an empty array,Use case 3: When an application wants to refresh only Netkeys to prevent any security threat:Call this API with refreshAppKeys = falseappKeyIndexesOptionalNumber arrayProvide app key indexes to refresh. This parameter is ignored if refreshAppKeys is false.Note:If refreshAppKeys is true, and an empty array is passed, or if this field is not provided, all app keys will be refreshed by default.List of appkeys known to a node can be fetched by calling mesh/listProvisionedNodes API before removing a particular node.Call ReturnsNameRequiredTypeDescriptionsubscribedOptionalBooleanIndicates if subscribed to get notifications.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringThe reason for the failure of the operation. See the 'Error Codes' section of this method for details.adapterAddressRequiredStringThe address of the adapter.Subscription Returns */
export interface Bluetooth2MeshKeyRefreshSubscription {
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'Error Codes' section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the network key index to which the key refresh result belongs. */
    netKeyIndex: number;
    /** Indicates the status of the KeyRefresh process.Possible values are :idle: Not yet started, maybe queued in stackactive: Started.completed: Completed. */
    status: string;
    /** Key refresh phase currently the network is in.Possible values are:0 : Normal operation. Received when all 3 phases of network key refresh procedure are complete1 : Distribution of new keys2 : Switching to the new keys3 : Revoking old keys */
    keyRefreshPhase: number;
    /** Object representing the intermediate response during key update to nodes in the network. */
    keyUpdateResponse?: Bluetooth2BleMeshKeyUpdateResponse;
}
