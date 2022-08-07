/** luna://com.webos.mediadb */
interface MediaDatabase {
}

export interface MediaDatabaseBatchParameters {
    /** The list of database operations to perform. */
    operations: objectarray;
}

export enum MediaDatabaseBatchError {
    NO_REQUIRED_KEY_METHOD = "-3984",
    NO_REQUIRED_KEY_PARAMS = "-3984",
    DB_INVALID_OPERATION_IN_BATCH = "-3982"
}

export interface MediaDatabaseBatchCallReturn {
    /** If the method succeeds, it will return BatchResponse object. */
    BatchResponse?: any;
    /** If the method fails, it will return ErrResponse object. */
    ErrResponse?: any;
}
