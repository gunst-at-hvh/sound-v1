namespace input {

    let wasLoud = false

    /**
     * Zeigt die aktuelle Lautstärke (0–255)
     */
    //% block="zeige Lautstärke"
    //% group="Lautstärke"
    export function showSoundLevel() {
        basic.showNumber(input.soundLevel())
    }

    /**
     * Wird ausgelöst, wenn die Lautstärke über die Schwelle steigt
     */
    //% block="wenn Lautstärke über %threshold steigt"
    //% threshold.min=0 threshold.max=255 threshold.defl=30
    //% group="Lautstärke"
    export function onLoud(threshold: number, handler: () => void) {

        basic.forever(function () {
            let isLoud = input.soundLevel() > threshold

            if (isLoud && !wasLoud) {
                handler()
            }

            wasLoud = isLoud
            basic.pause(50)
        })
    }

    /**
     * Wird ausgelöst, wenn die Lautstärke unter die Schwelle fällt
     */
    //% block="wenn Lautstärke unter %threshold fällt"
    //% threshold.min=0 threshold.max=255 threshold.defl=30
    //% group="Lautstärke"
    export function onQuiet(threshold: number, handler: () => void) {

        basic.forever(function () {
            let isLoud = input.soundLevel() > threshold

            if (!isLoud && wasLoud) {
                handler()
            }

            wasLoud = isLoud
            basic.pause(50)
        })
    }
}
