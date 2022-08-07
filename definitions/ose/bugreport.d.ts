/** luna://com.webos.service.bugreport */
interface Bugreport {
}

/** Account info to log in to Jira. */
export interface BugreportAccount {
    /** The username (AD username) that has permission to access Jira. */
    username: string;
    /** The password of the user. It must be provided as base64 encoded.Note: https://www.base64encode.org/ can be used to encode the password. */
    password: string;
}

/** ACG: NoneDescriptionSets the Jira configurations.Currently, the only configurations supported are:usernamepasswordNote:These values are persisted across reboots until another value is set.This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.Parameters */
export interface BugreportSetConfigParameters {
    /** Account info to login to Jira */
    account?: BugreportAccount;
}

/** ACG: NoneDescriptionSets the Jira configurations.Currently, the only configurations supported are:usernamepasswordNote:These values are persisted across reboots until another value is set.This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.ParametersNameRequiredTypeDescriptionaccountOptionalObject: accountAccount info to login to JiraCall Returns */
export interface BugreportSetConfigCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code when returnValue is false. */
    errorCode?: number;
    /** The error text when returnValue is false */
    errorText?: string;
}

/** ACG: NoneDescriptionCreates a bug ticket on Jira with the given data.Note: This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.Parameters */
export interface BugreportCreateBugParameters {
    /** Summary of Jira ticket. */
    summary: string;
    /** Description of the Jira ticket. */
    description?: string;
    /** Priority of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com.P1P2P3P4P5 */
    priority?: string;
    /** Reproducibility of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com.Always (100%)Often (50-99%)Seldom (10-49%)Rarely (<10%)I didn't try */
    reproducibility?: string;
    /** Screenshot files to attach to the Jira ticket. These files are deleted upon successful ticket creation. */
    screenshots?: string[];
}

/** ACG: NoneDescriptionCreates a bug ticket on Jira with the given data.Note: This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.ParametersNameRequiredTypeDescriptionsummaryRequiredStringSummary of Jira ticket.descriptionOptionalStringDescription of the Jira ticket.priorityOptionalStringPriority of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com.P1P2P3P4P5reproducibilityOptionalStringReproducibility of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com.Always (100%)Often (50-99%)Seldom (10-49%)Rarely (<10%)I didn't tryscreenshotsOptionalString arrayScreenshot files to attach to the Jira ticket. These files are deleted upon successful ticket creation.Call Returns */
export interface BugreportCreateBugCallReturn {
    /** Indicates the status of the operation. Possible values are:true - Indicates that the operation was successful. It does not mean that the ticket creation is complete. It just means that the method has started the ticket creation task. It takes about 10 seconds to create a ticket and the result is displayed as a pop-up on the screen.false - Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code when returnValue is false. */
    errorCode?: number;
    /** The error text when returnValue is false */
    errorText?: string;
    /** The key of the created issue. */
    key?: string;
}
