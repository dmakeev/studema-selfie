# Selfie video module

How to use it:
* Connect it as npm via "git+https://github.com/dmakeev/studema-selfie.git"


    /**
     * Get media stream, if present
     *
     * @returns {MediaStream | undefined}
     */
    public getStream(): MediaStream | undefined {}

    /**
     * Start media stream
     *
     * @async
     * @param {string?} deviceId    Device ID, if needed
     * @returns {Promise<MediaStream>}
     */
    public async start(deviceId?: string): Promise<MediaStream> {}

    /**
     * Stop media stream
     *
     */
    public stop(): void {}

    /**
     * Enumerate video devices
     *
     * @async
     * @returns {Promise<MediaDeviceInfo[]>}
     */
    public async enumerateDevices(): Promise<MediaDeviceInfo[]> {}