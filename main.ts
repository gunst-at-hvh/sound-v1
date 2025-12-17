namespace sound {

    let threshold = 30
    let wasAbove = false

    let aboveHandler: (() => void) | null = null
    let belowHandler: (() => void) | null = null

    /**
     * Setzt den Schwellenwert
     */
    //% block="setze Schwellenwert auf %value"
    //% blockNamespace="input"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    /**
     * Prüft die Lautstärke
     */
    //% block="prüfe Lautstärke"
    //% blockNamespace="input"
    export function checkSound() {
        let current = input.soundLevel()

        // Lautstärke steigt über Schwellenwert
        if (current > threshold && !wasAbove) {
            if (aboveHandler) aboveHandler()
        }

        // Lautstärke fällt unter Schwellenwert
        if (current <= threshold && wasAbove) {
            if (belowHandler) belowHandler()
        }

        wasAbove = current > threshold
    }

    /**
     * Wenn Lautstärke steigt über Schwellenwert
     */
    //% block="wenn Lautstärke steigt über Schwellenwert"
    //% blockNamespace="input"
    export function onAbove(handler: () => void) {
        aboveHandler = handler
    }

    /**
     * Wenn Lautstärke fällt unter Schwellenwert
     */
    //% block="wenn Lautstärke fällt unter Schwellenwert"
    //% blockNamespace="input"
    export function onBelow(handler: () => void) {
        belowHandler = handler
    }
}
