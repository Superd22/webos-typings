/** luna://com.palm.db */
interface Database {
}

export interface DatabaseBatchParameters {
    /** The list of database operations to perform. */
    operations: objectarray;
}

export enum DatabaseBatchError {
    NO_REQUIRED_KEY_METHOD = "-3984",
    NO_REQUIRED_KEY_PARAMS = "-3984",
    DB_INVALID_OPERATION_IN_BATCH = "-3982"
}

export interface DatabaseBatchResponse {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** Array of responses for each of the operations in the batch */
    responses: array;
}

export interface DatabaseErrResponse {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    /** If the method fails, the method will return an error message and error message description in errorCode and errorText fields respectively. */
    returnValue: boolean;
    /** Numeric error code. */
    errorCode: number;
    /** Error message from the service. This property is available when a request fails. */
    errorText: string;
}

export interface DatabaseBatchCallReturn {
    /** If the method succeeds, it will return the BatchResponse object. */
    BatchResponse?: DatabaseBatchResponse;
    /** If the method fails, it will return the ErrResponse object. */
    ErrResponse?: DatabaseErrResponse;
}
