/** ACG: systemsettings.managementDescriptionThe convert method converts an image. The type, scaling and centering of the image may be changed. If the resulting image is smaller than the original, black is added to the edges so that the resulting image is the same size as the original. If the resulting image would be bigger than the original, the image is cropped.JPG, PNG and BMP files are supported.Parameters */
export interface SystemserviceWallpaperConvertParameters {
    /** Path to the source file.Note: The wallpaper file needs to be copied manually to the target prior to using this API */
    source: string;
    /** Type for the destination file. Can be jpg, png or bmp. */
    destType: string;
    /** Path for the destination file. */
    dest?: string;
    /** The horizontal coordinate of the new center of the image, from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image. */
    focusX?: number;
    /** The vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image. */
    focusY?: number;
    /** Scale factor for the image, must be greater than zero. */
    scale?: number;
}

/** Contains details of the converted image.Example:{"src": "/usr/lib/luna/system/luna-systemui/images/opensearch-small-icon.png","dest": "/tmp/convertedimage.png","destType": "jpg"} */
export interface SystemserviceImageConversionResult {
    /** Path to the original file. */
    source?: string;
    /** Path to the output file. */
    dest: string;
    /** Type of the output file: jpg, png or bmp. */
    destType: string;
}

/** ACG: systemsettings.managementDescriptionThe convert method converts an image. The type, scaling and centering of the image may be changed. If the resulting image is smaller than the original, black is added to the edges so that the resulting image is the same size as the original. If the resulting image would be bigger than the original, the image is cropped.JPG, PNG and BMP files are supported.ParametersNameRequiredTypeDescriptionsourceRequiredString Path to the source file.Note: The wallpaper file needs to be copied manually to the target prior to using this APIdestTypeRequiredStringType for the destination file. Can be jpg, png or bmp.destOptionalStringPath for the destination file.focusXOptionalNumberThe horizontal coordinate of the new center of the image, from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image.focusYOptionalNumberThe vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image.scaleOptionalNumberScale factor for the image, must be greater than zero.Call Returns */
export interface SystemserviceWallpaperConvertCallReturn {
    /** Object containing information of the converted image. */
    conversionResult: SystemserviceImageConversionResult;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: systemsettings.managementDescriptionThe deleteWallpaper method deletes the specified wallpaper from the list of available wallpapers on the device.Parameters */
export interface SystemserviceWallpaperDeleteWallpaperParameters {
    /** The wallpaperName attribute of the wallpaper object to delete.Note: The wallpaper file should have been copied and imported in the target prior to using this API */
    wallpaperName: string;
}

/** Contains wallpaper details.Example:"wallpaper": {"wallpaperName": "flowers.png","wallpaperFile": "\/media\/internal\/.wallpapers\/flowers.png","wallpaperThumbFile": "\/media\/internal\/.wallpapers\/thumbs\/flowers.png"} */
export interface SystemserviceWallpaper {
    /** The wallpaperName that was passed to the wallpaper managing methods. */
    wallpaperName: string;
    /** Path to file with wallpaper image. */
    wallpaperFile?: string;
    /** Path to file with wallpaper thumbnail. */
    wallpaperThumbFile?: string;
}

/** ACG: systemsettings.managementDescriptionThe deleteWallpaper method deletes the specified wallpaper from the list of available wallpapers on the device.ParametersNameRequiredTypeDescriptionwallpaperNameRequiredStringThe wallpaperName attribute of the wallpaper object to delete.Note: The wallpaper file should have been copied and imported in the target prior to using this APICall Returns */
export interface SystemserviceWallpaperDeleteWallpaperCallReturn {
    /** A wallpaper object corresponding with the deleted wallpaper */
    wallpaper?: SystemserviceWallpaper;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: systemsettings.managementDescriptionThe importWallpaper method is used to convert the specified image into a device wallpaper. To convert into a wallpaper the image is either re-centered and cropped, or scaled. Once the image has been converted, the wallpaper is stored in the internal list of wallpapers on the device, and is available until deleted using deleteWallpaper method.Focus ParameterScale ParameterConversion MethodYesNoThe image is re-centered at the point specified by the focus parameters and cropped. Gaps are filled with Black color if the image does not reach the edge of the screen.NoYesThe image is scaled and then croppedYesYesThe image is first scaled and then re-centered and croppedNoNoScales the image to fill the screen  Parameters */
export interface SystemserviceWallpaperImportWallpaperParameters {
    /** Path to the image file. */
    target: string;
    /** Represents the horizontal coordinates of the new center of the image from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image. */
    focusX?: number;
    /** The vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image. */
    focusY?: number;
    /** Scale parameter determines the new size of the image, must be greater than zero. */
    scale?: number;
}

/** ACG: systemsettings.managementDescriptionThe importWallpaper method is used to convert the specified image into a device wallpaper. To convert into a wallpaper the image is either re-centered and cropped, or scaled. Once the image has been converted, the wallpaper is stored in the internal list of wallpapers on the device, and is available until deleted using deleteWallpaper method.Focus ParameterScale ParameterConversion MethodYesNoThe image is re-centered at the point specified by the focus parameters and cropped. Gaps are filled with Black color if the image does not reach the edge of the screen.NoYesThe image is scaled and then croppedYesYesThe image is first scaled and then re-centered and croppedNoNoScales the image to fill the screen  ParametersNameRequiredTypeDescriptiontargetRequiredStringPath to the image file.focusXOptionalNumberRepresents the horizontal coordinates of the new center of the image from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image.focusYOptionalNumberThe vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image.scaleOptionalNumberScale parameter determines the new size of the image, must be greater than zero.Call Returns */
export interface SystemserviceWallpaperImportWallpaperCallReturn {
    /** A wallpaper object. This object can be passed to setPreferences to set the wallpaper key. */
    wallpaper?: SystemserviceWallpaper;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: systemsettings.managementDescriptionThe info method retrieves a wallpaper object using either the wallpaperName or wallpaperFile parameter.Parameters */
export interface SystemserviceWallpaperInfoParameters {
    /** Wallpaper name. Either this, or wallpaperFile is required.Note: The wallpaper file needs to be copied manually to the target prior to using this API */
    wallpaperName?: string;
    /** Wallpaper's full path including the file name. Either this, or wallpaperName is required.Note: The wallpaper file needs to be copied manually to the target prior to using this API */
    wallpaperFile?: string;
}

/** ACG: systemsettings.managementDescriptionThe info method retrieves a wallpaper object using either the wallpaperName or wallpaperFile parameter.ParametersNameRequiredTypeDescriptionwallpaperNameOptionalStringWallpaper name. Either this, or wallpaperFile is required.Note: The wallpaper file needs to be copied manually to the target prior to using this APIwallpaperFileOptionalStringWallpaper's full path including the file name. Either this, or wallpaperName is required.Note: The wallpaper file needs to be copied manually to the target prior to using this APICall Returns */
export interface SystemserviceWallpaperInfoCallReturn {
    /** A wallpaper object. This object can be passed to setPreferences to set the wallpaper key. */
    wallpaper?: SystemserviceWallpaper;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: systemsettings.managementDescriptionThe refresh method refreshes the internal list of available wallpapers. Under normal circumstances, there is no need to call refresh directly.Note: This method call always succeeds.ParametersNoneCall Returns */
export interface SystemserviceWallpaperRefreshCallReturn {
    /** returnValue will always contain true. */
    returnValue: boolean;
}
