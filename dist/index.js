export class SelfieVideo {
    /**
     * Get media stream, if present
     *
     * @returns {MediaStream | undefined}
     */
    getStream() {
        return this.stream;
    }
    /**
     * Start media stream
     *
     * @async
     * @param {string?} deviceId    Device ID, if needed
     * @returns {Promise<MediaStream>}
     */
    async start(deviceId) {
        return new Promise((resolve, reject) => {
            const constraints = { audio: false, video: deviceId ? { deviceId } : true };
            if (!!this.stream) {
                this.stream.getTracks().forEach((track) => track.stop());
            }
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then((stream) => {
                stream.getTracks().forEach((track) => console.log(track));
                this.stream = stream;
                resolve(stream);
            })
                .catch((error) => reject(error));
        });
    }
    /**
     * Stop media stream
     *
     */
    stop() {
        if (!!this.stream) {
            this.stream.getTracks().forEach((track) => track.stop());
            this.stream = undefined;
        }
    }
    /**
     * Enumerate video devices
     *
     * @async
     * @returns {Promise<MediaDeviceInfo[]>}
     */
    async enumerateDevices() {
        return new Promise((resolve, reject) => {
            return navigator.mediaDevices
                .enumerateDevices()
                .then((devices) => {
                resolve(devices.filter((device) => device.kind === 'videoinput'));
            })
                .catch((error) => reject(error));
        });
    }
    /**
     * Change device for existing MediaStream
     *
     * @async
     * @param {string} deviceId
     * @returns {Promise<void>}
     */
    async changeDevice(deviceId) {
        console.log('1110', this.stream);
        console.log('1110', this.stream?.getVideoTracks());
        return this.stream?.getVideoTracks().forEach((track) => {
            console.log(1111);
            track
                .applyConstraints({ deviceId })
                .then(() => {
                console.log(1112);
            })
                .catch((error) => console.log(error));
        });
    }
}
//# sourceMappingURL=index.js.map