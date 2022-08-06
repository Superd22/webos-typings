export interface Bluetooth2PbapConnectParameters {
    adapterAddress?: string;
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2PbapConnectCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
    address: string;
}

export interface Bluetooth2PbapConnectSubscription {
    returnValue: boolean;
    subscribed: boolean;
    disconnectByRemote: string;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
    address: string;
}

export interface Bluetooth2PbapDisconnectParameters {
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2PbapDisconnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
    address: string;
}

export interface Bluetooth2PbapGetPhoneBookPropertiesParameters {
    adapterAddress?: string;
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2Bluetooth2PbapProperties {
    repository: string;
    primaryVersionCounter: string;
    secondaryVersionCounter: string;
    databaseIdentifier: string;
    fixedImageSize: boolean;
}

export interface Bluetooth2PbapGetPhoneBookPropertiesCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    properties: Bluetooth2Bluetooth2PbapProperties;
    subscribed: boolean;
    returnValue: boolean;
}

export interface Bluetooth2PbapGetPhoneBookPropertiesSubscription {
    errorCode?: number;
    errorText?: string;
    properties?: Bluetooth2Bluetooth2PbapProperties;
    adapterAddress: string;
    address: string;
    subscribed: boolean;
    returnValue: boolean;
}

export interface Bluetooth2PbapGetSizeParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2PbapGetSizeCallReturn {
    errorCode?: number;
    errorText?: string;
    size: number;
    adapterAddress: string;
    address: string;
    returnValue: boolean;
}

export interface Bluetooth2PbapGetStatusParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2PbapGetStatusCallReturn {
    returnValue: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
    address: string;
}

export interface Bluetooth2PbapGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
    address: string;
}

export interface Bluetooth2PbapGetvCardFiltersParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2PbapGetvCardFiltersCallReturn {
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    filters: string[];
    returnValue: boolean;
}

export interface Bluetooth2PbapPullPhoneBookParameters {
    adapterAddress?: string;
    address: string;
    subscribe: boolean;
    destinationFile: string;
    startOffset?: number;
    maxListCount?: number;
    vCardVersion?: string;
    filterFields?: string[];
}

export interface Bluetooth2PbapPullPhoneBookCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    destinationFile: string;
    subscribed: boolean;
    returnValue: boolean;
}

export interface Bluetooth2PbapPullPhoneBookSubscription {
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    destinationFile: string;
    status: string;
    subscribed: boolean;
    returnValue: number;
}

export interface Bluetooth2PbapPullvCardParameters {
    adapterAddress?: string;
    address: string;
    destinationFile?: string;
    vCardHandle: string;
    vCardVersion?: string;
    filterFields?: string[];
}

export interface Bluetooth2PbapPullvCardCallReturn {
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    destinationFile: string;
    returnValue: boolean;
}

export interface Bluetooth2Bluetooth2PbapSearchFilter {
    key: string;
    value: string;
}

export interface Bluetooth2PbapSearchPhoneBookParameters {
    adapterAddress?: string;
    address: string;
    order?: string;
    filter: Bluetooth2Bluetooth2PbapSearchFilter;
}

export interface Bluetooth2Bluetooth2PbapVcfHandles {
    Name: string;
    Handle: string;
}

export interface Bluetooth2PbapSearchPhoneBookCallReturn {
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    address: string;
    vcfHandles: Bluetooth2Bluetooth2PbapVcfHandles;
    returnValue: boolean;
}

export interface Bluetooth2PbapSetPhoneBookParameters {
    adapterAddress?: string;
    address: string;
    repository: string;
    object: string;
}

export interface Bluetooth2PbapSetPhoneBookCallReturn {
    errorCode?: number;
    errorText?: string;
    address: string;
    adapterAddress: string;
    returnValue: boolean;
}

export interface Bluetooth2PbapVCardListingParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2PbapVCardListingCallReturn {
    errorCode?: number;
    errorText?: string;
    vcfHandles: Bluetooth2Bluetooth2PbapVcfHandles[];
    adapterAddress: string;
    address: string;
    returnValue: boolean;
}
