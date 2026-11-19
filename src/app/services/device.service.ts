import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * A service that provides device information using Capacitor's Device plugin.
 * This replaces the functionality of cordova-plugin-device.
 */
@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    private _deviceInfo = new BehaviorSubject<any>(null);
    public deviceInfo$: Observable<any> = this._deviceInfo.asObservable();

    private _deviceId = new BehaviorSubject<any>(null);
    public deviceId$: Observable<any> = this._deviceId.asObservable();

    constructor() {
        this.initialize();
    }

    private async initialize() {
        try {
            // Get device information
            const info = await Device.getInfo();
            this._deviceInfo.next(info);

            // Get device ID
            const id = await Device.getId();
            this._deviceId.next(id);

            console.log('Device info initialized', info);
        } catch (error) {
            console.error('Error initializing device information:', error);
        }
    }

    /**
     * Get device information synchronously (if already loaded)
     */
    get deviceInfo(): any {
        return this._deviceInfo.getValue();
    }

    /**
     * Get device ID synchronously (if already loaded)
     */
    get deviceId(): any {
        return this._deviceId.getValue();
    }

    /**
     * Get the device's unique identifier 
     * (replacement for Device.uuid in Cordova)
     */
    async getUUID(): Promise<string> {
        const id = await Device.getId();
        return id.identifier; // Changed from id.uuid to id.identifier which is the correct property
    }

    /**
     * Get the device platform
     * (replacement for Device.platform in Cordova)
     */
    async getPlatform(): Promise<string> {
        const info = await Device.getInfo();
        return info.platform;
    }

    /**
     * Get the device model
     * (replacement for Device.model in Cordova)
     */
    async getModel(): Promise<string> {
        const info = await Device.getInfo();
        return info.model;
    }

    /**
     * Get the operating system version
     * (replacement for Device.version in Cordova)
     */
    async getOsVersion(): Promise<string> {
        const info = await Device.getInfo();
        return info.osVersion;
    }

    /**
     * Check if the app is running on a real device or emulator
     * (replacement for Device.isVirtual in Cordova)
     */
    async isVirtual(): Promise<boolean> {
        const info = await Device.getInfo();
        return info.isVirtual;
    }

    /**
     * Get the manufacturer of the device
     * (replacement for Device.manufacturer in Cordova)
     */
    async getManufacturer(): Promise<string> {
        const info = await Device.getInfo();
        return info.manufacturer;
    }

    /**
     * Get battery info from the device
     * (new in Capacitor Device plugin, not available in Cordova)
     */
    async getBatteryInfo() {
        return await Device.getBatteryInfo();
    }

    /**
     * Get device language
     * (new in Capacitor Device plugin, not available in Cordova)
     */
    async getLanguageCode() {
        return await Device.getLanguageCode();
    }
}