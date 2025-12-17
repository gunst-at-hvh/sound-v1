namespace sound {

    let threshold = 0
    let wasLoud = false

    let loudHandler: (() => void) | null = null
    let quietHandler: (() => void) | null = null

    /**
     * Setzt den Schwellenwert
     */
    //% block="setze Schwellenwert auf %value"
    //% value.min=0 value.max=255
    //% group="Sound-Alarm"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    /**
     * Muss in basic.forever aufgerufen werden
     */
    //% block="prüfe Lautstärke"
    //% group="Sound-Alarm"
    export function checkSound() {
        const isLoud = input.soundLevel() > threshold

        if (isLoud && !wasLoud) {
            if (loudHandler) {
                loudHandler()
            }
        }

        if (!isLoud && wasLoud) {
            if (quietHandler) {
                quietHandler()
            }
        }

        wasLoud = isLoud
    }

    /**
     * Event: wenn laut
     */
    //% block="wenn laut"
    //% group="Sound-Alarm"
    export function onLoud(handler: () => void) {
        loudHandler = handler
    }

    /**
     * Event: wenn ruhig
     */
    //% block="wenn ruhig"
    //% group="Sound-Alarm"
    export function onQuiet(handler: () => void) {
        quietHandler = handler
    }
}
