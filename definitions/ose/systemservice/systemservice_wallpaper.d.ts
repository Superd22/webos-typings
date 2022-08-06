export interface SystemserviceWallpaperConvertParameters {
    source: string;
    destType: string;
    dest?: string;
    focusX?: number;
    focusY?: number;
    scale?: number;
}

export interface SystemserviceImageConversionResult {
    source?: string;
    dest: string;
    destType: string;
}

export interface SystemserviceWallpaperConvertCallReturn {
    conversionResult: SystemserviceImageConversionResult;
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceWallpaperDeleteWallpaperParameters {
    wallpaperName: string;
}

export interface SystemserviceWallpaper {
    wallpaperName: string;
    wallpaperFile?: string;
    wallpaperThumbFile?: string;
}

export interface SystemserviceWallpaperDeleteWallpaperCallReturn {
    wallpaper?: SystemserviceWallpaper;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceWallpaperImportWallpaperParameters {
    target: string;
    focusX?: number;
    focusY?: number;
    scale?: number;
}

export interface SystemserviceWallpaperImportWallpaperCallReturn {
    wallpaper?: SystemserviceWallpaper;
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceWallpaperInfoParameters {
    wallpaperName?: string;
    wallpaperFile?: string;
}

export interface SystemserviceWallpaperInfoCallReturn {
    wallpaper?: SystemserviceWallpaper;
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceWallpaperRefreshCallReturn {
    returnValue: boolean;
}
