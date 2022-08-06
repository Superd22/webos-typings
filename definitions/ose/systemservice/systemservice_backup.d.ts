export interface SystemserviceBackupPreBackupParameters {
    incrementalKey?: any;
    maxTempBytes?: number;
    tempDir?: string;
}

export interface SystemserviceBackupPreBackupCallReturn {
    description: string;
    version: string;
    files: string[];
}
