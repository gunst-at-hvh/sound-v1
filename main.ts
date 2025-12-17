namespace sound {

    let threshold = 30

    let aboveHandler: (() => void) | null = null
    let belowHandler: (() => void) | null = null

    //% block="setze Schwellenwert auf %value"
    //% blockNamespace="input"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    //% block="prüfe Lautstärke"
    //% blockNamespace="input"
    export function checkSound() {
        let current = input.soundLevel()

        if (current > threshold) {
            if (aboveHandler) aboveHandler()
        } else {
            if (belowHandler) belowHandler()
        }
    }

    //% block="wenn Lautstärke steigt über Schwellenwert"
    //% blockNamespace="input"
    export function onAbove(handler: () => void) {
        aboveHandler = handler
    }

    //% block="wenn Lautstärke fällt unter Schwellenwert"
    //% blockNamespace="input"
    export function onBelow(handler: () => void) {
        belowHandler = handler
    }
}