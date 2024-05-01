export class SelfieVideo {
    private stream?: MediaStream;

    /**
     * Get media stream, if present
     *
     * @returns {MediaStream | undefined}
     */
    public getStream(): MediaStream | undefined {
        return this.stream;
    }

    /**
     * Start media stream
     *
     * @async
     * @param {string?} deviceId    Device ID, if needed
     * @returns {Promise<MediaStream>}
     */
    public async start(deviceId?: string): Promise<MediaStream> {
        return new Promise((resolve: (stream: MediaStream) => void, reject: (error: Error) => void) => {
            const constraints = { audio: false, video: deviceId ? { deviceId } : true };
            if (!!this.stream) {
                this.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
            }
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then((stream: MediaStream) => {
                    stream.getTracks().forEach((track: MediaStreamTrack) => console.log(track));
                    this.stream = stream;
                    resolve(stream);
                })
                .catch((error: Error) => reject(error));
        });
    }

    /**
     * Stop media stream
     *
     */
    public stop(): void {
        if (!!this.stream) {
            this.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
            this.stream = undefined;
        }
    }

    /**
     * Enumerate video devices
     *
     * @async
     * @returns {Promise<MediaDeviceInfo[]>}
     */
    public async enumerateDevices(): Promise<MediaDeviceInfo[]> {
        return new Promise((resolve: (devices: MediaDeviceInfo[]) => void, reject: (error: Error) => void) => {
            return navigator.mediaDevices
                .enumerateDevices()
                .then((devices: MediaDeviceInfo[]) => {
                    resolve(devices.filter((device) => device.kind === 'videoinput'));
                })
                .catch((error: Error) => reject(error));
        });
    }

    /**
     * Change device for existing MediaStream
     *
     * @async
     * @param {string} deviceId
     * @returns {Promise<void>}
     */
    public async changeDevice(deviceId: string): Promise<void> {
        /*
        return this.stream?.getVideoTracks().forEach((track: MediaStreamTrack) => {
            track
                .applyConstraints({ deviceId })
                .then(() => {})
                .catch((error: Error) => console.log(error));
        });
        */
    }
}
