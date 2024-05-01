export declare class SelfieVideo {
    private stream?;
    /**
     * Get media stream, if present
     *
     * @returns {MediaStream | undefined}
     */
    getStream(): MediaStream | undefined;
    /**
     * Start media stream
     *
     * @async
     * @param {string?} deviceId    Device ID, if needed
     * @returns {Promise<MediaStream>}
     */
    start(deviceId?: string): Promise<MediaStream>;
    /**
     * Stop media stream
     *
     */
    stop(): void;
    /**
     * Enumerate video devices
     *
     * @async
     * @returns {Promise<MediaDeviceInfo[]>}
     */
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Change device for existing MediaStream
     *
     * @async
     * @param {string} deviceId
     * @returns {Promise<void>}
     */
    changeDevice(deviceId: string): Promise<void>;
}
