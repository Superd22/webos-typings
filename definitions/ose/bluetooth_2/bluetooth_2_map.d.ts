export interface Bluetooth2MapConnectParameters {
    adapterAddress?: string;
    address: string;
    instanceName?: string;
    subscribe?: boolean;
}

export interface Bluetooth2MapConnectCallReturn {
    errorCode?: number;
    errorText?: string;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    instanceName: string;
    sessionId?: string;
    returnValue: boolean;
}

export interface Bluetooth2MapConnectSubscription {
    errorCode?: number;
    errorText?: string;
    subscribed: boolean;
    disconnectByRemote: boolean;
    address: string;
    adapterAddress: string;
    instanceName: string;
    sessionId: string;
    returnValue: boolean;
}

export interface Bluetooth2MapDisconnectParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
}

export interface Bluetooth2MapDisconnectCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    instanceName: string;
    sessionId: string;
    returnValue: boolean;
}

export interface Bluetooth2MapGetStatusParameters {
    adapterAddress?: string;
    address: string;
    instanceName?: string;
    subscribe?: boolean;
}

export interface Bluetooth2Bluetooth2MasInstancesStatus {
    instanceName: string;
    sessionId?: string;
    Connecting: boolean;
    Connected: boolean;
}

export interface Bluetooth2MapGetStatusCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    status: Bluetooth2Bluetooth2MasInstancesStatus[];
}

export interface Bluetooth2MapGetStatusSubscription {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    status: Bluetooth2Bluetooth2MasInstancesStatus[];
}

export interface Bluetooth2MapGetMASInstancesParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2Bluetooth2MasInstances {
    instanceName?: string;
    supportedMessageTypes?: string[];
}

export interface Bluetooth2MapGetMASInstancesCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    masInstances: Bluetooth2Bluetooth2MasInstances[];
    returnValue: boolean;
}

export interface Bluetooth2MapGetFolderListParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    startOffset?: number;
    maxListCount?: number;
}

export interface Bluetooth2MapGetFolderListCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    folders?: string[];
    instanceName?: string;
    returnValue: boolean;
}

export interface Bluetooth2MapSetFolderParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    folder: string;
}

export interface Bluetooth2MapSetFolderCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    instanceName?: string;
    returnValue: boolean;
}

export interface Bluetooth2MapGetMessageFiltersParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
}

export interface Bluetooth2MapGetMessageFiltersCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    filters?: string[];
    instanceName?: string;
    returnValue: boolean;
}

export interface Bluetooth2Bluetooth2MessageFilters {
    startOffset?: number;
    maxCount?: number;
    subjectLength?: number;
    fields?: string[];
    messageTypes?: string[];
    periodBegin?: string;
    periodEnd?: string;
    read?: boolean;
    recipient?: string;
    sender?: string;
    priority?: string;
}

export interface Bluetooth2MapGetMessageListParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    folder?: string;
    filters?: Bluetooth2Bluetooth2MessageFilters;
}

export interface Bluetooth2Bluetooth2MessageProperties {
    folder: string;
    subject: string;
    dateTime: string;
    senderName: string;
    senderAddress: string;
    recipientName: string;
    recipientAddress: string;
    type: string;
    status: string;
    priority: boolean;
    read: boolean;
    sent: boolean;
    protected: boolean;
    textType: boolean;
}

export interface Bluetooth2Bluetooth2MessageList {
    handle: string;
    properties: Bluetooth2Bluetooth2MessageProperties;
}

export interface Bluetooth2MapGetMessageListCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    instanceName?: string;
    returnValue: boolean;
    messages?: Bluetooth2Bluetooth2MessageList[];
}

export interface Bluetooth2MapGetMessageParameters {
    adapterAddress?: string;
    address: string;
    handle: string;
    destinationFile?: string;
    attachment?: boolean;
    sessionId: string;
}

export interface Bluetooth2MapGetMessageCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    destinationFile?: string;
    returnValue: boolean;
}

export interface Bluetooth2MapSetMessageStatusParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    handle: string;
    statusIndicator: string;
    statusValue: boolean;
}

export interface Bluetooth2MapSetMessageStatusCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    returnValue: boolean;
}

export interface Bluetooth2MapPushMessageParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    sourceFile: string;
    folder: string;
    transparent?: boolean;
    retry?: boolean;
    charset?: string;
}

export interface Bluetooth2MapPushMessageCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    returnValue: boolean;
    handle?: string;
}

export interface Bluetooth2MapGetMessageNotificationParameters {
    adapterAddress?: string;
    address: string;
    sessionId: string;
    subscribe: boolean;
}

export interface Bluetooth2MapGetMessageNotificationCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    returnValue: boolean;
    subscribed: boolean;
    sessionId: string;
}

export interface Bluetooth2Bluetooth2NewMessageProperties {
    subject: string;
    dateTime: string;
    senderName: string;
    priority: boolean;
}

export interface Bluetooth2Bluetooth2MessageNotificationProperties {
    folder: string;
    oldFolder?: string;
    type: string;
    newMessageProperties?: Bluetooth2Bluetooth2NewMessageProperties;
}

export interface Bluetooth2Bluetooth2Message {
    handle: string;
    properties: Bluetooth2Bluetooth2MessageNotificationProperties;
}

export interface Bluetooth2MapGetMessageNotificationSubscription {
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    subscribed: boolean;
    sessionId: string;
    notificationType?: string;
    message?: Bluetooth2Bluetooth2Message;
}
