/** ACG: audio.managementDescriptionGives the audiod information regarding the USB Mic/Headset Connected/Disconnected events based on the udev rules.It also provides the sound card number and device number information.Parameters */
export interface AudioUdevEventParameters {
    /** The event to be passed to audiod by the udev rule when USB soundcard is detected.It is a simple string defined by audiod.For example supported events are headset-removed, headset-inserted, headset-mic-inserted, usb-mic-inserted,usb-mic-removed, usb-headset-inserted, usb-headset-removed. */
    event: string;
    /** sound card number as of now is being extracted from the device path where USB sound card is detected by udev. */
    soundcard_no?: number;
    /** device number as of now is being extracted from the device path where USB sound card is detected by udev. */
    device_no?: number;
}

/** ACG: audio.managementDescriptionGives the audiod information regarding the USB Mic/Headset Connected/Disconnected events based on the udev rules.It also provides the sound card number and device number information.ParametersNameRequiredTypeDescriptioneventRequiredStringThe event to be passed to audiod by the udev rule when USB soundcard is detected.It is a simple string defined by audiod.For example supported events are headset-removed, headset-inserted, headset-mic-inserted, usb-mic-inserted,usb-mic-removed, usb-headset-inserted, usb-headset-removed.soundcard_noOptionalNumbersound card number as of now is being extracted from the device path where USB sound card is detected by udev.device_noOptionalNumberdevice number as of now is being extracted from the device path where USB sound card is detected by udev.Call Returns */
export interface AudioUdevEventCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. The method may fail because of one the error conditions described in the Error Codes Reference of this API. */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. */
    errorCode?: number;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    errorText?: string;
}
