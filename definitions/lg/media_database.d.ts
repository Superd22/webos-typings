/** luna://com.webos.mediadb */
interface MediaDatabase {
}

export interface MediaDatabaseBatchParameters {
    operations: objectarray;
}

export enum MediaDatabaseBatchError {
    NO_REQUIRED_KEY_METHOD = "-3984",
    NO_REQUIRED_KEY_PARAMS = "-3984",
    DB_INVALID_OPERATION_IN_BATCH = "-3982"
}

export interface MediaDatabaseBatchCallReturn {
    BatchResponse?: any;
    ErrResponse?: any;
}
