export interface SystemserviceRingtoneAddRingtoneParameters {
    filePath: string;
}

export interface SystemserviceRingtoneAddRingtoneCallReturn {
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceRingtoneDeleteRingtoneParameters {
    filePath: string;
}

export interface SystemserviceRingtoneDeleteRingtoneCallReturn {
    returnValue: boolean;
    errorText?: string;
}
