export interface Bluetooth2MeshCreateNetworkParameters {
    adapterAddress?: string;
    bearer?: string;
}

export interface Bluetooth2MeshCreateNetworkCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    networkId: string;
}

export interface Bluetooth2MeshScanUnprovisionedDevicesParameters {
    adapterAddress?: string;
    bearer?: string;
    scanTimeout?: number;
    subscribe: boolean;
}

export interface Bluetooth2BleMeshUnprovisionedDevice {
    rssi: number;
    uuid: string;
    name?: string;
}

export interface Bluetooth2MeshScanUnprovisionedDevicesCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
    devices: Bluetooth2BleMeshUnprovisionedDevice[];
    device: Bluetooth2BleMeshUnprovisionedDevice;
}

export interface Bluetooth2MeshScanUnprovisionedDevicesSubscription {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
    devices: Bluetooth2BleMeshUnprovisionedDevice[];
    device: Bluetooth2BleMeshUnprovisionedDevice;
}

export interface Bluetooth2MeshUnprovisionedScanCancelParameters {
    adapterAddress?: string;
    bearer?: string;
}

export interface Bluetooth2MeshUnprovisionedScanCancelCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2MeshProvisionParameters {
    adapterAddress?: string;
    bearer?: string;
    timeout?: number;
    subscribe: string;
    uuid: string;
}

export interface Bluetooth2MeshProvisionCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
}

export interface Bluetooth2MeshProvisionSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    request: string;
    stringToDisplay?: string;
    numberToDisplay?: number;
    numberDisplayType?: string;
    promptType?: string;
    unicastAddress?: number;
    uuid: string;
}

export interface Bluetooth2MeshSupplyProvisioningNumericParameters {
    adapterAddress?: string;
    bearer?: string;
    number: number;
}

export interface Bluetooth2MeshSupplyProvisioningNumericCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2MeshSupplyProvisioningOobParameters {
    adapterAddress?: string;
    bearer?: string;
    oobData: string;
}

export interface Bluetooth2MeshSupplyProvisioningOobCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2MeshCreateAppKeyParameters {
    adapterAddress?: string;
    bearer?: string;
    netKeyIndex?: number;
    appKeyIndex?: number;
}

export interface Bluetooth2MeshCreateAppKeyCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    netKeyIndex?: number;
    appKeyIndex?: number;
}

export interface Bluetooth2BleMeshPayloadForpassthroughcommand {
    value: number[];
}

export interface Bluetooth2BleMeshPayloadForonOffcommand {
    value: boolean;
}

export interface Bluetooth2MeshModelSendParameters {
    adapterAddress?: string;
    bearer?: string;
    srcAddress: number;
    destAddress: number;
    appKeyIndex: number;
    command: string;
    payload: Bluetooth2BleMeshPayloadForpassthroughcommand;
    payload: Bluetooth2BleMeshPayloadForonOffcommand;
}

export interface Bluetooth2MeshModelSendCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2MeshModelReceiveParameters {
    adapterAddress?: string;
    bearer?: string;
    appKeyIndex: number;
    subscribe: boolean;
}

export interface Bluetooth2MeshModelReceiveCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
}

export interface Bluetooth2MeshModelReceiveSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    srcAddress: number;
    destAddress: number;
    data: number[];
}

export interface Bluetooth2MeshModelConfigGetParameters {
    adapterAddress?: string;
    bearer?: string;
    subscribe: boolean;
    destAddress: number;
    config: string;
    netKeyIndex?: number;
}

export interface Bluetooth2MeshModelConfigGetCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
}

export interface Bluetooth2BleMeshConfigRelayStatus {
    relay: number;
    retransmitIntervalSteps: number;
    retransmitCount: number;
}

export interface Bluetooth2MeshModelConfigGetSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    config: string;
    appKeyIndexes?: number[];
    ttl?: number;
    gattProxyState?: number;
    relayStatus?: Bluetooth2BleMeshConfigRelayStatus;
}

export interface Bluetooth2MeshModelConfigSetParameters {
    adapterAddress?: string;
    bearer?: string;
    subscribe: boolean;
    destAddress: number;
    config: string;
    netKeyIndex?: number;
    appKeyIndex?: number;
    modelId?: number;
    ttl?: number;
    gattProxyState?: number;
    relayStatus?: Bluetooth2BleMeshConfigRelayStatus;
}

export interface Bluetooth2MeshModelConfigSetCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
}

export interface Bluetooth2MeshModelConfigSetSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    config: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2MeshGetMeshInfoParameters {
    adapterAddress?: string;
    bearer?: string;
}

export interface Bluetooth2BleMeshNetKeys {
    index: number;
    keyRefresh: boolean;
}

export interface Bluetooth2BleMeshAppKeys {
    index: number;
    boundNetKeyIndex: number;
}

export interface Bluetooth2BleMeshProvisioner {
    name: string;
    unicastAddress: number;
}

export interface Bluetooth2BleMeshInfo {
    name: string;
    netKeys: Bluetooth2BleMeshNetKeys[];
    appKeys: Bluetooth2BleMeshAppKeys[];
    provisioners: Bluetooth2BleMeshProvisioner[];
}

export interface Bluetooth2MeshGetMeshInfoCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    meshInfo: Bluetooth2BleMeshInfo;
}

export interface Bluetooth2MeshModelConfigGetCompositionDataParameters {
    adapterAddress?: string;
    bearer?: string;
    destAddress: number;
    subscribe: boolean;
}

export interface Bluetooth2MeshModelConfigGetCompositionDataCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    subscribed: boolean;
}

export interface Bluetooth2BleMeshFeature {
    relay: boolean;
    proxy: boolean;
    friend: boolean;
    lowPower: boolean;
}

export interface Bluetooth2BleMeshElement {
    loc: number;
    numS: string;
    sigModelIds: number[];
    numV: number;
    vendorModelIds: number[];
}

export interface Bluetooth2BleMeshCompositionData {
    companyId: number;
    productId: number;
    versionId: number;
    numRplEnteries: number;
    features: Bluetooth2BleMeshFeature;
    elements: Bluetooth2BleMeshElement[];
}

export interface Bluetooth2MeshModelConfigGetCompositionDataSubscription {
    returnValue: string;
    adapterAddress: string;
    subscribed: boolean;
    compositionData: Bluetooth2BleMeshCompositionData;
}

export interface Bluetooth2MeshModelOnOffSetParameters {
    adapterAddress?: string;
    bearer?: string;
    destAddress: number;
    appKeyIndex: number;
    state: boolean;
    subscribe?: boolean;
}

export interface Bluetooth2MeshModelOnOffSetCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2MeshModelOnOffSetSubscription {
    returnValue: boolean;
    adapterAddress: string;
    onoFF: boolean;
    subscribed: boolean;
}

export interface Bluetooth2MeshListProvisionedNodesParameters {
    adapterAddress?: string;
    bearer?: string;
}

export interface Bluetooth2BleMeshNode {
    uuid: string;
    primaryElementAddress: number;
    numberOfElements: number;
    netKeyIndex: number;
    appKeyIndexes: number[];
}

export interface Bluetooth2MeshListProvisionedNodesCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    nodes: Bluetooth2BleMeshNode[];
}

export interface Bluetooth2MeshRemoveNodeParameters {
    adapterAddress?: string;
    bearer?: string;
    primaryElementAddress: number;
}

export interface Bluetooth2MeshRemoveNodeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    primaryElementAddress: number;
}

export interface Bluetooth2MeshKeyRefreshParameters {
    subscribe: boolean;
    adapterAddress?: string;
    bearer?: string;
    blacklistedNodes?: number[];
    waitTimeout?: number;
    refreshAppKeys?: boolean;
    appKeyIndexes?: number[];
}

export interface Bluetooth2MeshKeyRefreshCallReturn {
    subscribed?: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
}

export interface Bluetooth2BleMeshKeyUpdateResponse {
    responseCode: number;
    responseText: string;
    primaryElementAddress: number;
    appKeyIndex?: number;
}

export interface Bluetooth2MeshKeyRefreshSubscription {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    netKeyIndex: number;
    status: string;
    keyRefreshPhase: number;
    keyUpdateResponse?: Bluetooth2BleMeshKeyUpdateResponse;
}
