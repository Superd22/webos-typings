/** luna://com.webos.service.db */
interface Db {
}

export interface DbCompactCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbWhereClause {
    prop: string;
    op: string;
    val: any;
    collate?: string;
}

export interface DbFilterClause {
    prop: string;
    op: string;
    val: any;
    collate?: string;
}

export interface DbQuery {
    select?: string[];
    from: string;
    where?: DbWhereClause[];
    orderBy?: string;
    desc?: boolean;
    incDel?: boolean;
    limit?: number;
    page?: string;
    filter?: DbFilterClause[];
}

export interface DbDelParameters {
    ids?: string[];
    query?: DbQuery;
    purge?: boolean;
}

export interface DbResults {
    id: any;
    rev: any;
}

export interface DbDelCallReturn {
    results?: DbResults[];
    count?: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbDelKindParameters {
    id: string;
}

export interface DbDelKindCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbDumpParameters {
    path: string;
    incDel?: boolean;
}

export interface DbDumpCallReturn {
    count: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbFindParameters {
    query: DbQuery;
    count?: boolean;
    watch?: boolean;
    subscribe?: boolean;
}

export interface DbFindCallReturn {
    results: any[];
    count?: number;
    next?: string;
    fired?: boolean;
    returnValue: string;
    errorCode?: number;
    errorText?: string;
}

export interface DbGetParameters {
    ids: string[];
}

export interface DbGetCallReturn {
    results: any[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbGetProfileParameters {
    application?: string;
    query?: DbQuery;
}

export interface DbGetProfileCallReturn {
    returnValue: boolean;
    results?: any[];
    errorCode?: number;
    errorText?: string;
}

export interface DbLoadParameters {
    path: string;
}

export interface DbLoadCallReturn {
    count: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbMergeParameters {
    objects?: any[];
    query?: DbQuery;
    props?: any;
    ignoreMissing?: boolean;
}

export interface DbMergeCallReturn {
    results?: DbResults[];
    count?: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbMergePutParameters {
    objects?: any[];
    query?: DbQuery;
    props?: any;
}

export interface DbMergePutCallReturn {
    results?: DbResults[];
    count?: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbProfileParameters {
    enable?: boolean;
    application?: string;
}

export interface DbProfileCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbPurgeParameters {
    window?: number;
}

export interface DbPurgeCallReturn {
    returnValue: boolean;
    count: number;
}

export interface DbPurgeStatusCallReturn {
    returnValue: boolean;
    rev: number;
}

export interface DbPutParameters {
    objects: any[];
    shardId?: string;
}

export interface DbPutCallReturn {
    results: DbResults[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbIndexPropClause {
    name: string;
    collate?: string;
    default?: any;
    tokenize?: string;
    type: string;
}

export interface DbIndexClause {
    name: string;
    props: DbIndexPropClause[];
    incDel?: boolean;
}

export interface DbRevSetPropClause {
    name: string;
}

export interface DbRevSetClause {
    name: string;
    props: DbRevSetPropClause[];
}

export interface DbPutKindParameters {
    id: string;
    owner: string;
    schema?: any;
    sync?: boolean;
    extends?: string[];
    indexes?: DbIndexClause;
    revsets?: DbRevSetClause[];
    private?: boolean;
    assignId?: boolean;
}

export interface DbPutKindCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbOperation {
    method: string;
    params: any[];
}

export interface DbPutPermissionsParameters {
    type: string;
    object: string;
    caller: string;
    operations: DbOperation;
    create?: string;
    read?: string;
    update?: string;
    delete?: string;
}

export interface DbPutPermissionsCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbPutQuotasParameters {
    quotas: any[];
    owner?: string;
    size?: number;
}

export interface DbPutQuotasCallReturn {
    returnValue: boolean;
}

export interface DbQuotaStatsResult {
    size: number;
    used: number;
}

export interface DbQuotaStatsCallReturn {
    returnValue: boolean;
    results: DbQuotaStatsResult;
}

export interface DbRemoveAppDataParameters {
    owners: string[];
}

export interface DbRemoveAppDataCallReturn {
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
}

export interface DbReserveIdsParameters {
    count: number;
}

export interface DbReserveIdsCallReturn {
    ids: string[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface DbSearchParameters {
    query: DbQuery;
    watch?: boolean;
    subscribe?: boolean;
}

export interface DbSearchCallReturn {
    results: any[];
    count: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    taskId?: string;
}

export interface DbSearchSubscription {
    results: any[];
    count: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    taskId?: string;
}

export interface DbStatsParameters {
    kind?: string;
    verify?: boolean;
}

export interface DbStatsKindResult {
    indexes: string;
    _id: string;
    objects: string;
}

export interface DbStatsCallReturn {
    returnValue: boolean;
    results: DbStatsKindResult[];
}

export interface DbWatchParameters {
    query: DbQuery;
    subscribe?: boolean;
}

export interface DbWatchCallReturn {
    fired: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
