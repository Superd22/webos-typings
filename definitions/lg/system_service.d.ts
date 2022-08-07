/** luna://com.palm.systemservice */
interface SystemService {
}

export interface SystemServiceTimeGetSystemTimeParameters {
    /** Flag that decides whether to subscribe or not. */
    /** If the app wants to receive notifications when the time zone changes and/or the system time changes by a system-defined threshold, it should set subscribe to true. The current system-defined threshold is 5 minutes. */
    /** If the app does not wish to receive notifications of change in time zone and/or the system time changes, it should set subscribe to false. */
    /** true: Subscribe. */
    /** false: Do no subscribe. Call the method only once. (Default) */
    subscribe?: boolean;
}

export interface SystemServiceTimeGetSystemTimeCallReturn {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** Flag that indicates whether the subscription is enabled or not. */
    /** true: Enabled */
    /** false: Not enabled. */
    subscribed?: boolean;
    /** The number of milliseconds since Epoch (midnight of January 1, 1970, UTC), also known as the Unix time. */
    utc: number;
    /** The object that contains information about the current system time. */
    localtime: any;
    /** The number of minutes from UTC. This can be negative for time zones west of UTC, and positive for time zones east of UTC. */
    offset: number;
    /** The current system time zone. It has the same format as the TZ environment variable. For information, visit http://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html. */
    timezone: string;
    /** Contains the time zone abbreviation in the standard Unix format, for example, PDT (which stands for Pacific Daylight Time). The timezone corresponds to the current time zone of the system. */
    TZ: string;
    /** Linux zone information file for the currently set zone. For more information, visit http://linux.die.net/man/5/tzfile. */
    timeZoneFile: string;
    /** Deprecated. Formerly it was used to alert the UI whether if the method managed to set the time correctly using NITZ. Currently, it does not indicate anything meaningful. */
    NITZValid: string;
}
