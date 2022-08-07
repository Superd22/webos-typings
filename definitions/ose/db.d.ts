/** luna://com.webos.service.db */
interface Db {
}

/** ACG: database.managementDescriptionThe compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the object as to be deleted. The object will be removed by DB8, when the garbage collector is called. To call the garbage collector manually, the client can call the compact method.This command is implemented only for the LevelDB and Sandwich engine.ParametersNoneCall Returns */
export interface DbCompactCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** Defines a SQL-like JSON where clause for a db8 Query. */
export interface DbWhereClause {
    /** Name of property to test. */
    prop: string;
    /** Test operator. Must be one of the following:"<" : Less than"<=" : Less than or equal"=" : Equals">=" : Greater than or equal">" : Greater than"!=" : Not equal"?" : Wildcard"%" : Full-text. This operator (aka - the prefix operator) will return all matches beginning with the value specified."%%" : Partial-text. This operator is used to locate sub-strings or partial string matches. */
    op: string;
    /** Value to test against. */
    val: any;
    /** Indicates the string comparison routine used to order the results. See the collate field in the IndexPropClause data structure for more information. */
    collate?: string;
}

/** Definition of the Filter clause that is part of the Query object. */
export interface DbFilterClause {
    /** Name of property to test. */
    prop: string;
    /** Test operator. Must be one of the following:"<" : Less than"<=" : Less than or equal"=" : Equals">=" : Greater than or equal">" : Greater than"!=" : Not equal"?" : Wildcard"%" : Full-text. This operator (aka - the prefix operator) will return all matches beginning with the value specified."%%" : Partial-text. This operator is used to locate sub-strings or partial string matches. */
    op: string;
    /** Value to test against. */
    val: any;
    /** Indicates the string comparison routine used to order the results. See the collate field in the IndexPropClause data structure for more information. */
    collate?: string;
}

/** Defines a db8 query. */
export interface DbQuery {
    /** Array of property names to return. */
    select?: string[];
    /** Name of kind to retrieve results from. */
    from: string;
    /** Array of clauses to test. */
    where?: DbWhereClause[];
    /** Order results on this property. */
    orderBy?: string;
    /** To display query results in descending order, set desc to true.To display query results in ascending order, set desc to false.The default value of desc is false. */
    desc?: boolean;
    /** To display query results with deleted objects, set incDel to true.To display query as is, set incDel to false.The default value of incDel is false.Note: You can only request this if the incDel field was true when you created your indexes during a putKind operation. Otherwise, the query fails with a "no index for this query" message. */
    incDel?: boolean;
    /** Specifies maximum number of results to return (0-500). Default is 500 */
    limit?: number;
    /** Page key returned by previous query. */
    page?: string;
    /** Array of clauses - works only in the search method - identical to WhereClause. Can be used along with where to perform a range search. */
    filter?: DbFilterClause[];
}

/** ACG: database.operationDescriptionThe del method deletes JSON data objects from the database.Apps can specify the objects to be deleted by providing:a set of IDs to be deleteda DB8 queryParameters */
export interface DbDelParameters {
    /** The ids parameter contains an array of JSON object ids that you wish to delete. If you do not wish to specify JSON object IDs, you must specify a query in the query parameter. */
    ids?: string[];
    /** The query parameter contains a query for a set of objects to be deleted. If you do not wish to specify a query, you must specify a list of JSON object ids in the ids parameter. */
    query?: DbQuery;
    /** The default value of the purge parameter is false.If the purge parameter is set to false, the target objects will only be marked for deletion. Objects marked for deletion can still be restored. They will be purged permanently only when an administrative purge operation is run.If the purge parameter is set to true, the target objects will be deleted permanently immediately. */
    purge?: boolean;
}

/** Contains "id" and "rev" fields for the JSON data object. */
export interface DbResults {
    /** ID of the object. */
    id: any;
    /** Object's revision ID. Every db8 object has this ID field. db8 maintains a global rev id counter that is incremented every time a db8 object is created or updated. */
    rev: any;
}

/** ACG: database.operationDescriptionThe del method deletes JSON data objects from the database.Apps can specify the objects to be deleted by providing:a set of IDs to be deleteda DB8 queryParametersNameRequiredTypeDescriptionidsOptionalString arrayThe ids parameter contains an array of JSON object ids that you wish to delete. If you do not wish to specify JSON object IDs, you must specify a query in the query parameter.queryOptionalObject: QueryThe query parameter contains a query for a set of objects to be deleted. If you do not wish to specify a query, you must specify a list of JSON object ids in the ids parameter.purgeOptionalBooleanThe default value of the purge parameter is false.If the purge parameter is set to false, the target objects will only be marked for deletion. Objects marked for deletion can still be restored. They will be purged permanently only when an administrative purge operation is run.If the purge parameter is set to true, the target objects will be deleted permanently immediately. Call Returns */
export interface DbDelCallReturn {
    /** When the del method succeeds, and the objects to be deleted were specified as a list of JSON object ids, the del method will return a list of deleted ids. */
    results?: DbResults[];
    /** When the del method succeeds, and the objects to be deleted were specified as a query, the del method will return a count of deleted objects. */
    count?: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe delKind method deletes a Kind from the database. Deleting a Kind deletes ALL data objects of that Kind.Parameters */
export interface DbDelKindParameters {
    /** The id parameter contains the id of the kind the app wants to delete. */
    id: string;
}

/** ACG: database.operationDescriptionThe delKind method deletes a Kind from the database. Deleting a Kind deletes ALL data objects of that Kind.ParametersNameRequiredTypeDescriptionidRequiredStringThe id parameter contains the id of the kind the app wants to delete.Call Returns */
export interface DbDelKindCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.managementDescriptionThe dump method is used to backup a database. The file created by the dump method typically contains JSON statements to recreate all of the Kinds and data of the database from which they have been dumped.Parameters */
export interface DbDumpParameters {
    /** Path to the dump file */
    path: string;
    /** If true, also include deleted objects. */
    incDel?: boolean;
}

/** ACG: database.managementDescriptionThe dump method is used to backup a database. The file created by the dump method typically contains JSON statements to recreate all of the Kinds and data of the database from which they have been dumped.ParametersNameRequiredTypeDescriptionpathRequiredStringPath to the dump fileincDelOptionalBooleanIf true, also include deleted objects.Call Returns */
export interface DbDumpCallReturn {
    /** The total number of objects stored if the dump method succeeds. */
    count: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe find method returns a set of objects that match the query specified in the query parameter.The app can specify the number of results to return. However, if the app does not want to specify a limit, it can set the count parameter to true. This will cause the find method to return the total number of results.The app can also request to be notified if any of the returned results from the query change in the future. In order to receive change notifications, set the watch parameter to true.The find method supports distinct groups enabling the app to remove duplicate objects.Parameters */
export interface DbFindParameters {
    /** DB8 query for retrieving results. */
    query: DbQuery;
    /** The default value of the count parameter is false.If the app did not specify a limit on the number of results to return, and wants to know the total number of results returned, the app should set the count parameter to true. */
    count?: boolean;
    /** The default value of the watch parameter is false. If an app wants to be notified about any change in the returned results, the app should set the watch parameter to true. */
    watch?: boolean;
    /** Subscription is enabled if true. */
    subscribe?: boolean;
}

/** ACG: database.operationDescriptionThe find method returns a set of objects that match the query specified in the query parameter.The app can specify the number of results to return. However, if the app does not want to specify a limit, it can set the count parameter to true. This will cause the find method to return the total number of results.The app can also request to be notified if any of the returned results from the query change in the future. In order to receive change notifications, set the watch parameter to true.The find method supports distinct groups enabling the app to remove duplicate objects.ParametersNameRequiredTypeDescriptionqueryRequiredObject: QueryDB8 query for retrieving results.countOptionalBooleanThe default value of the count parameter is false.If the app did not specify a limit on the number of results to return, and wants to know the total number of results returned, the app should set the count parameter to true.watchOptionalBooleanThe default value of the watch parameter is false. If an app wants to be notified about any change in the returned results, the app should set the watch parameter to true. subscribeOptionalBooleanSubscription is enabled if true.Call Returns */
export interface DbFindCallReturn {
    /** Array of db8 kind data objects. What is returned depends on the query and what is stored. */
    results: any[];
    /** Number of results that would have been returned if a limit had not been specified. */
    count?: number;
    /** Key to pass as query's "page" property when retrieving next page of results. */
    next?: string;
    /** Change notification flag.Note: Returned only if the watch parameter is set to true by the app. */
    fired?: boolean;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe get method retrieves JSON data objects by ids. This is the fastest way to retrieve data.Parameters */
export interface DbGetParameters {
    /** Ids of the JSON data objects to retrieve. */
    ids: string[];
}

/** ACG: database.operationDescriptionThe get method retrieves JSON data objects by ids. This is the fastest way to retrieve data.ParametersNameRequiredTypeDescriptionidsRequiredString arrayIds of the JSON data objects to retrieve.Call Returns */
export interface DbGetCallReturn {
    /** Returns an array of stored db8 data objects. */
    results: any[];
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.profilingDescriptionGet profiling data for applications. Profile data includes the queries made and related information such as request time and response time.Parameters */
export interface DbGetProfileParameters {
    /** Name of application for which to get profile data.If no name is specified, returns the profile data for the current application.If name is given as *, returns profile data for all applications. The caller application must have admin permissions. */
    application?: string;
    /** Additional filters for retrieving profile data. */
    query?: DbQuery;
}

/** ACG: database.profilingDescriptionGet profiling data for applications. Profile data includes the queries made and related information such as request time and response time.ParametersNameRequiredTypeDescriptionapplicationOptionalStringName of application for which to get profile data.If no name is specified, returns the profile data for the current application.If name is given as *, returns profile data for all applications. The caller application must have admin permissions.queryOptionalObject: QueryAdditional filters for retrieving profile data.Call Returns */
export interface DbGetProfileCallReturn {
    /** Indicates the status of the operation.True - Indicates success of the operation.False - Indicates failure in the operation. The details of the failure are provided in the errorCode and errorText fields of the response. */
    returnValue: boolean;
    /** If the method succeeds, the relevant details are returned in the response. */
    results?: any[];
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.managementDescriptionThe load method restores a database from a dumped JSON file.Parameters */
export interface DbLoadParameters {
    /** The complete path of the JSON dump file. For example: /tmp/dump.json */
    path: string;
}

/** ACG: database.managementDescriptionThe load method restores a database from a dumped JSON file.ParametersNameRequiredTypeDescriptionpathRequiredStringThe complete path of the JSON dump file. For example: /tmp/dump.jsonCall Returns */
export interface DbLoadCallReturn {
    /** Count of objects loaded from the dump file */
    count: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe merge method updates the properties of existing objects.The objects can be specified in one of the following ways:A queryAn array of IDsParameters */
export interface DbMergeParameters {
    /** The object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. The objects parameter is required if the query parameter is not specified. */
    objects?: any[];
    /** The query parameter is a Query object specifying the set of objects whose properties the app wants to update.The query parameter is required if the object parameter is not specified. */
    query?: DbQuery;
    /** The props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required. */
    props?: any;
    /** Ignore if any key is missing */
    ignoreMissing?: boolean;
}

/** ACG: database.operationDescriptionThe merge method updates the properties of existing objects.The objects can be specified in one of the following ways:A queryAn array of IDsParametersNameRequiredTypeDescriptionobjectsOptionalObject arrayThe object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. The objects parameter is required if the query parameter is not specified.queryOptionalObject: QueryThe query parameter is a Query object specifying the set of objects whose properties the app wants to update.The query parameter is required if the object parameter is not specified.propsOptionalObjectThe props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required.ignoreMissingOptionalBooleanIgnore if any key is missingCall Returns */
export interface DbMergeCallReturn {
    /** If the objects parameter was specified, and the merge method succeeds, merge will return the ids and revisions of the updated object. */
    results?: DbResults[];
    /** If the query parameter was specified, and the merge method succeeds, merge will return the count of updated objects. */
    count?: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe mergePut method updates the properties of existing objects. If an object doesn't exist, a new one will be created in the database.The object to be updated can be specified in one of the following ways:A queryAn array of IDsParameters */
export interface DbMergePutParameters {
    /** The object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. This is required if the query parameter is not specified. */
    objects?: any[];
    /** The query parameter is a Query object specifying the set of objects whose properties the app wants to update.The query parameter is required if the object parameter is not specified. */
    query?: DbQuery;
    /** The props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required. */
    props?: any;
}

/** ACG: database.operationDescriptionThe mergePut method updates the properties of existing objects. If an object doesn't exist, a new one will be created in the database.The object to be updated can be specified in one of the following ways:A queryAn array of IDsParametersNameRequiredTypeDescriptionobjectsOptionalObject arrayThe object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. This is required if the query parameter is not specified.queryOptionalObject: QueryThe query parameter is a Query object specifying the set of objects whose properties the app wants to update.The query parameter is required if the object parameter is not specified.propsOptionalObjectThe props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required.Call Returns */
export interface DbMergePutCallReturn {
    /** If the objects parameter was specified, and the merge method succeeds, merge will return the ids and revisions of the updated object. */
    results?: DbResults[];
    /** If the query parameter was specified, and the merge method succeeds, merge will return the count of updated objects. */
    count?: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.profilingDescriptionEnables or disables DB8 profiling for an application. When enabled, profiling data is stored for the application.You can enable DB8 profiling using one of the following approaches:- Self enabling: In this approach, the 3rd-party application enables profiling on itself (see example 1).- Enable profiling using admin-privileged applications: In the approach, an admin-privileged application controls DB8 profiling for 3rd-party applications. Use this approach when you want the admin to control the profiling of 3rd-party applications. You can choose to enable profiling for a single application or for all 3rd-party applications. See example 2 and 3.Parameters */
export interface DbProfileParameters {
    /** Status of DB8 profiling.Possible values: TRUE, FALSEDefault value: TRUE */
    enable?: boolean;
    /** Name of application to be profiled.If no name is specified, the current/caller application is profiled.If name is given as *, all applications are profiled. The caller application must have admin permissions. */
    application?: string;
}

/** ACG: database.profilingDescriptionEnables or disables DB8 profiling for an application. When enabled, profiling data is stored for the application.You can enable DB8 profiling using one of the following approaches:- Self enabling: In this approach, the 3rd-party application enables profiling on itself (see example 1).- Enable profiling using admin-privileged applications: In the approach, an admin-privileged application controls DB8 profiling for 3rd-party applications. Use this approach when you want the admin to control the profiling of 3rd-party applications. You can choose to enable profiling for a single application or for all 3rd-party applications. See example 2 and 3.ParametersNameRequiredTypeDescriptionenableOptionalBooleanStatus of DB8 profiling.Possible values: TRUE, FALSEDefault value: TRUEapplicationOptionalStringName of application to be profiled.If no name is specified, the current/caller application is profiled.If name is given as *, all applications are profiled. The caller application must have admin permissions.Call Returns */
export interface DbProfileCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionThe purge method invokes the garbage collector. The purge method will:Remove all objects that were marked for deletionPerform a space check, and remove all temporary dataParameters */
export interface DbPurgeParameters {
    /** purge window size */
    window?: number;
}

/** ACG: database.operationDescriptionThe purge method invokes the garbage collector. The purge method will:Remove all objects that were marked for deletionPerform a space check, and remove all temporary dataParametersNameRequiredTypeDescriptionwindowOptionalNumber (int32_t)purge window sizeCall Returns */
export interface DbPurgeCallReturn {
    /** If the purge  method succeeds, returnValue will contain true.If the purge  method fails, returnValue will contain false. The purge method may fail because of:Insufficient disk spaceI/O error */
    returnValue: boolean;
    /** count contains the total number of objects that were permanently deleted by the purge method. */
    count: number;
}

/** ACG: database.operationDescriptionThe purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were permanently deleted, and the purgeStatus method will return the updated database revision number.ParametersNoneCall Returns */
export interface DbPurgeStatusCallReturn {
    /** If the purgeStatus  method succeeds, returnValue will contain true.If the purgeStatus  method fails, returnValue will contain false. */
    returnValue: boolean;
    /** If the purgeStatus method is successful, rev will contain the updated database revision number.If the purgeStatus method fails, rev will contain database revision number before the purge. */
    rev: number;
}

/** ACG: database.operationDescriptionThe put method stores JSON data objects of a particular Kind into the database. The put method will:Assign an id field to each object, if it was not set.Return the id and rev for each stored object.Parameters */
export interface DbPutParameters {
    /** List of JSON data objects of a particular kind that the app wants to store in the database. */
    objects: any[];
    /** Id of shard info */
    shardId?: string;
}

/** ACG: database.operationDescriptionThe put method stores JSON data objects of a particular Kind into the database. The put method will:Assign an id field to each object, if it was not set.Return the id and rev for each stored object.ParametersNameRequiredTypeDescriptionobjectsRequiredObject arrayList of JSON data objects of a particular kind that the app wants to store in the database.shardIdOptionalStringId of shard infoCall Returns */
export interface DbPutCallReturn {
    /** If the object was inserted, results will contain id and revision of the inserted object */
    results: DbResults[];
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** Defines index property for IndexClause */
export interface DbIndexPropClause {
    /** Name of property being indexed. */
    name: string;
    /** Indicates the string comparison routine used to order the index. Must be one of the following:default: Does binary comparison.primary: Compares base characters (for example, "a" < "b") without considering accents, case, or tone marks.secondary: Accents in the characters are considered secondary differences (for example, "as" < "às" < "at"). Other differences between letters can also be considered secondary differences, depending on the language. A secondary difference is ignored when there is a primary difference anywhere in the strings.tertiary: Upper and lower case differences in characters are distinguished at the tertiary level (for example, "ao" < "Ao" < "aò"). In addition, a variant of a letter differs from the base form on the tertiary level (such as "A" and "?"). A tertiary difference is ignored when there is a primary or secondary difference anywhere in the strings. */
    collate?: string;
    /** Default value to set for this property at insertion time, if not present. */
    default?: any;
    /** Indicates if words in strings should be broken up, i.e., should "Hello World" become "Hello" and "World" for purposes of indexing. Must be one of the following:none: Does not tokenize.default: Use the default for the locale (which may strip stop-words). Stop-words are common words that are stripped for purposes of indexing, i.e., "the", "a", "an", "is", etc.all: Tokenizes all words. */
    tokenize?: string;
    /** "single" or "multi". Single property or multiple properties. */
    type: string;
}

/** Used in the putKind call for creating kind object indexes. Note that indexes determine the type of queries your app can make. See Queries and Indexing for more information. Set the incDel flag to true if you want future queries to return marked as deleted objects. Objects are not completely deleted until an administrative purge operation takes place. */
export interface DbIndexClause {
    /** Index name */
    name: string;
    /** Array of properties to index together. */
    props: DbIndexPropClause[];
    /** To display query results with deleted objects, set incDel to true.To display query results without deleted objects, set incDel to false.The default value of incDel is false.Note: You can only request this if the incDel field was true when you created your indexes during a putKind operation. Otherwise, the query fails with a "no index for this query" message. */
    incDel?: boolean;
}

/** A property in a RevSetClause. */
export interface DbRevSetPropClause {
    /** Name of property to include in revision set. */
    name: string;
}

/** Defines a revision set - subset of an object's properties that your app can be notified about when one of the properties is modified. */
export interface DbRevSetClause {
    /** Name of the revision set (unique to this kind). */
    name: string;
    /** Array of properties to include in revision set. */
    props: DbRevSetPropClause[];
}

/** ACG: database.operationDescriptionThe putKind method registers a kind with the database.Kinds define the owner, and the indexes for a JSON data object. Indexes can be composed of single or multiple properties. When you create your index, be aware that queries can only return results that are indexed, and are contiguously ordered.If your app or service wants to be notified only when a subset of an object's properties are updated, then you can use revision sets.If your app or service creates objects that other apps or services need to access, then see the putPermissions method for more information.Parameters */
export interface DbPutKindParameters {
    /** Id of the kind to be registered with the database. */
    id: string;
    /** Owner of the kind, can be any one of the following values:The service's bus addressThe app's app IDOnly the owner has permission to modify the kind. */
    owner: string;
    /** JSON Syntax for data objects of a specific kind. If set, this kind's data objects are validated before being stored. For details refer to http://json-schema.org/documentation.html */
    schema?: any;
    /** The sync parameter allows apps to enable backing up and restoring specific kinds of objects. The default value for the sync parameter is false.If the user moves to another device, the saved app data can be restored. */
    sync?: boolean;
    /** List of ids of parent kinds from which the kind has been derived. */
    extends?: string[];
    /** The indexes parameter contains indexes for the kind. */
    indexes?: DbIndexClause;
    /** List of database revision sets. */
    revsets?: DbRevSetClause[];
    /** Enable private data for putKind */
    private?: boolean;
    /** Enable assign id for putKind if true */
    assignId?: boolean;
}

/** ACG: database.operationDescriptionThe putKind method registers a kind with the database.Kinds define the owner, and the indexes for a JSON data object. Indexes can be composed of single or multiple properties. When you create your index, be aware that queries can only return results that are indexed, and are contiguously ordered.If your app or service wants to be notified only when a subset of an object's properties are updated, then you can use revision sets.If your app or service creates objects that other apps or services need to access, then see the putPermissions method for more information.ParametersNameRequiredTypeDescriptionidRequiredStringId of the kind to be registered with the database.ownerRequiredStringOwner of the kind, can be any one of the following values:The service's bus addressThe app's app IDOnly the owner has permission to modify the kind.schemaOptionalObjectJSON Syntax for data objects of a specific kind. If set, this kind's data objects are validated before being stored. For details refer to http://json-schema.org/documentation.htmlsyncOptionalBooleanThe sync parameter allows apps to enable backing up and restoring specific kinds of objects. The default value for the sync parameter is false.If the user moves to another device, the saved app data can be restored.extendsOptionalString arrayList of ids of parent kinds from which the kind has been derived.indexesOptionalObject: IndexClauseThe indexes parameter contains indexes for the kind.revsetsOptionalObject array: RevSetClauseList of database revision sets.privateOptionalBooleanEnable private data for putKindassignIdOptionalBooleanEnable assign id for putKind if trueCall Returns */
export interface DbPutKindCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** Object used to represent a batch operation to run.Note: This object has different format as target. Following object example is for the target. */
export interface DbOperation {
    /** operation being requested. */
    method: string;
    /** Params will depend on the type of operation being requested. */
    params: any[];
}

/** ACG: database.operationDescriptionThe putPermissions method enables other apps or services to access an app's stored DB8 data. The app can give permissions to access data objects of a specific Kind.Parameters */
export interface DbPutPermissionsParameters {
    /** Must be set to db.kind. */
    type: string;
    /** The DB8 kind of the object for which the app wants to provide access. */
    object: string;
    /** The id of the app or service that the app is granting permission to access its data. */
    caller: string;
    /** Database operations the app is granting permissions for. */
    operations: DbOperation;
    /** To grant create permission, set the create parameter to allow. */
    create?: string;
    /** To grant read permission, set the read parameter to allow. */
    read?: string;
    /** To grant update permission, set the update parameter to allow. */
    update?: string;
    /** To grant delete permission, set the delete parameter to allow. */
    delete?: string;
}

/** ACG: database.operationDescriptionThe putPermissions method enables other apps or services to access an app's stored DB8 data. The app can give permissions to access data objects of a specific Kind.ParametersNameRequiredTypeDescriptiontypeRequiredStringMust be set to db.kind.objectRequiredStringThe DB8 kind of the object for which the app wants to provide access.callerRequiredStringThe id of the app or service that the app is granting permission to access its data.operationsRequiredObject: operationDatabase operations the app is granting permissions for.createOptionalStringTo grant create permission, set the create parameter to allow.readOptionalStringTo grant read permission, set the read parameter to allow.updateOptionalStringTo grant update permission, set the update parameter to allow.deleteOptionalStringTo grant delete permission, set the delete parameter to allow.Call Returns */
export interface DbPutPermissionsCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.managementDescriptionThe putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services.Parameters */
export interface DbPutQuotasParameters {
    /** List of quotas */
    quotas: any[];
    /** Name of service */
    owner?: string;
    /** quota size in bytes */
    size?: number;
}

/** ACG: database.managementDescriptionThe putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services.ParametersNameRequiredTypeDescriptionquotasRequiredObject array: putQuotasList of quotasownerOptionalStringName of servicesizeOptionalNumber (int32_t)quota size in bytesCall Returns */
export interface DbPutQuotasCallReturn {
    /** If the putQuotas  method succeeds, returnValue will contain true.If the putQuotas  method fails, returnValue will contain false. The putQuotas  method may fail because of:Insufficient free disk spaceDisk I/ONot found kind */
    returnValue: boolean;
}

/** Information about used quotas. */
export interface DbQuotaStatsResult {
    /** Size of quotas in bytes */
    size: number;
    /** Used quotas by service in bytes */
    used: number;
}

/** ACG: database.managementDescriptionThe quotaStats method returns information about a service's used limits.ParametersNoneCall Returns */
export interface DbQuotaStatsCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. A possible reason for failure is "Internal db8 logic broken". */
    returnValue: boolean;
    /** Returns information about a service's quota. */
    results: DbQuotaStatsResult;
}

/** ACG: database.operationDescriptionThe removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner.Parameters */
export interface DbRemoveAppDataParameters {
    /** Owner(s) of kinds to delete. Kinds having given owners will be removed from the database. */
    owners: string[];
}

/** ACG: database.operationDescriptionThe removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner.ParametersNameRequiredTypeDescriptionownersRequiredString arrayOwner(s) of kinds to delete. Kinds having given owners will be removed from the database. Call Returns */
export interface DbRemoveAppDataCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionWhen a client service creates objects that have references between each other, the service can ask the database through the reserveIds method to regenerate ids of objects. The client service can use such ids as objects, and DB8 will use those ids when objects are inserted into the database.By default, DB8 configured to reserve maximum [0:1000] ids, but this limit can vary depending on the platform.Parameters */
export interface DbReserveIdsParameters {
    /** Number of Ids to reserve. */
    count: number;
}

/** ACG: database.operationDescriptionWhen a client service creates objects that have references between each other, the service can ask the database through the reserveIds method to regenerate ids of objects. The client service can use such ids as objects, and DB8 will use those ids when objects are inserted into the database.By default, DB8 configured to reserve maximum [0:1000] ids, but this limit can vary depending on the platform.ParametersNameRequiredTypeDescriptioncountRequiredNumberNumber of Ids to reserve.Call Returns */
export interface DbReserveIdsCallReturn {
    /** Array of reserved db8 IDs. */
    ids: string[];
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: database.operationDescriptionUnlike the find method, the search method supports the "?" (question mark) operator. The ? operator can be used for full-text searching. However, the search method is significantly slower, and should only be used for full-text type-down search. The search method should not be used for retrieving results that are going to be scrolled in a list.The search method supports:Ordering by any property.Distinct method to remove duplicate objects.%% operator in filter to search in a sub-string.Canceling the search mid-way (using the 'cancelable' parameter). The search method has some limitations:There must be an index for the field you are searching on.The search operation looks for words beginning with the search string.Parameters */
export interface DbSearchParameters {
    /** Query for search. */
    query: DbQuery;
    /** Indicates if the app must be notified of any changes in the search results. This notification is sent only once (the first time when there is a change in the result).Possible values are:true - Notifies the changes.false - No notifications. Default value: falseNote: The 'watch' and 'subscribe' parameters must not be used in the same call. */
    watch?: boolean;
    /** Subscribe to get notified when there are changes in search results. Possible values are:true - Subscribe for changes.false - Not subscribed.Note:It is mandatory to set 'subscribe' to true when 'cancelable' is set to true.The 'watch' and 'subscribe' parameters must not be used in the same call. */
    subscribe?: boolean;
}

/** ACG: database.operationDescriptionUnlike the find method, the search method supports the "?" (question mark) operator. The ? operator can be used for full-text searching. However, the search method is significantly slower, and should only be used for full-text type-down search. The search method should not be used for retrieving results that are going to be scrolled in a list.The search method supports:Ordering by any property.Distinct method to remove duplicate objects.%% operator in filter to search in a sub-string.Canceling the search mid-way (using the 'cancelable' parameter). The search method has some limitations:There must be an index for the field you are searching on.The search operation looks for words beginning with the search string.ParametersNameRequiredTypeDescriptionqueryRequiredObject: QueryQuery for search.watchOptionalBooleanIndicates if the app must be notified of any changes in the search results. This notification is sent only once (the first time when there is a change in the result).Possible values are:true - Notifies the changes.false - No notifications. Default value: falseNote: The 'watch' and 'subscribe' parameters must not be used in the same call.subscribeOptionalBooleanSubscribe to get notified when there are changes in search results. Possible values are:true - Subscribe for changes.false - Not subscribed.Note:It is mandatory to set 'subscribe' to true when 'cancelable' is set to true.The 'watch' and 'subscribe' parameters must not be used in the same call.Call Returns */
export interface DbSearchCallReturn {
    /** Returns an array of objects if the search() method succeeds. What is returned depends on the query and what is stored. */
    results: any[];
    /** The number of objects returned in the results array. */
    count: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Unique identifier of the search operation (only when 'cancelable' is set to true). */
    taskId?: string;
}

/** ACG: database.operationDescriptionUnlike the find method, the search method supports the "?" (question mark) operator. The ? operator can be used for full-text searching. However, the search method is significantly slower, and should only be used for full-text type-down search. The search method should not be used for retrieving results that are going to be scrolled in a list.The search method supports:Ordering by any property.Distinct method to remove duplicate objects.%% operator in filter to search in a sub-string.Canceling the search mid-way (using the 'cancelable' parameter). The search method has some limitations:There must be an index for the field you are searching on.The search operation looks for words beginning with the search string.ParametersNameRequiredTypeDescriptionqueryRequiredObject: QueryQuery for search.watchOptionalBooleanIndicates if the app must be notified of any changes in the search results. This notification is sent only once (the first time when there is a change in the result).Possible values are:true - Notifies the changes.false - No notifications. Default value: falseNote: The 'watch' and 'subscribe' parameters must not be used in the same call.subscribeOptionalBooleanSubscribe to get notified when there are changes in search results. Possible values are:true - Subscribe for changes.false - Not subscribed.Note:It is mandatory to set 'subscribe' to true when 'cancelable' is set to true.The 'watch' and 'subscribe' parameters must not be used in the same call.Call ReturnsNameRequiredTypeDescriptionresultsRequiredObject arrayReturns an array of objects if the search() method succeeds. What is returned depends on the query and what is stored.countRequiredNumberThe number of objects returned in the results array.returnValueRequiredBooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.taskIdOptionalStringUnique identifier of the search operation (only when 'cancelable' is set to true). Subscription Returns */
export interface DbSearchSubscription {
    /** Returns an array of objects if the search() method succeeds. What is returned depends on the query and what is stored. */
    results: any[];
    /** The number of objects returned in the results array. */
    count: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Unique identifier of the search operation (only when 'cancelable' is set to true). */
    taskId?: string;
}

/** ACG: database.profilingDescriptionThe stats method returns detailed information about the storage space used by every service.Parameters */
export interface DbStatsParameters {
    /** Identifier of kind */
    kind?: string;
    /** Verify kindkey if it is true */
    verify?: boolean;
}

/** Information about kind usage. */
export interface DbStatsKindResult {
    /** Statistic for each index, created for kind */
    indexes: string;
    /** Statistic for each id, created for kind */
    _id: string;
    /** Statistic about objects, relative to kind */
    objects: string;
}

/** ACG: database.profilingDescriptionThe stats method returns detailed information about the storage space used by every service.ParametersNameRequiredTypeDescriptionkindOptionalStringIdentifier of kindverifyOptionalBooleanVerify kindkey if it is trueCall Returns */
export interface DbStatsCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. A possible reason for failure is "Internal DB8 error (internal stat doesn't exist)". */
    returnValue: boolean;
    /** Information about resource usage per kind. */
    results: DbStatsKindResult[];
}

/** ACG: database.operationDescriptionThe watch method watches for updates to the database that would change the results of a query.Parameters */
export interface DbWatchParameters {
    /** Query whose results the app wants to watch. */
    query: DbQuery;
    /** subscription is enabled if it true */
    subscribe?: boolean;
}

/** ACG: database.operationDescriptionThe watch method watches for updates to the database that would change the results of a query.ParametersNameRequiredTypeDescriptionqueryRequiredObject: QueryQuery whose results the app wants to watch.subscribeOptionalBooleansubscription is enabled if it trueCall Returns */
export interface DbWatchCallReturn {
    /** If the watch method found any object by query, fired will contain true. Fired will never return false. */
    fired: boolean;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}
