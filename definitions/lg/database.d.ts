/** luna://com.palm.db */
interface Database {
}

export interface DatabaseBatchParameters {
    operations: objectarray;
}

export enum DatabaseBatchError {
    NO_REQUIRED_KEY_METHOD = "-3984",
    NO_REQUIRED_KEY_PARAMS = "-3984",
    DB_INVALID_OPERATION_IN_BATCH = "-3982"
}

export interface DatabaseBatchResponse {
    returnValue: boolean;
    responses: array;
}

export interface DatabaseErrResponse {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
}

export interface DatabaseBatchCallReturn {
    BatchResponse?: DatabaseBatchResponse;
    ErrResponse?: DatabaseErrResponse;
}
