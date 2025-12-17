namespace sound {

    let threshold = 30
    let wasLoud = false

    let onLoudHandler: (() => void) | null = null
    let onQuietHandler: (() => void) | null = null

    //% block="setze Schwellenwert auf %value"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    //% block="prüfe Lautstärke"
    export function checkSound() {
        let loud = input.soundLevel() > threshold

        if (loud && !wasLoud) {
            if (onLoudHandler) {
                onLoudHandler()
            }
        }

        if (!loud && wasLoud) {
            if (onQuietHandler) {
                onQuietHandler()
            }
        }

        wasLoud = loud
    }

    //% block="wenn laut"
    export function onLoud(handler: () => void) {
        onLoudHandler = handler
    }

    //% block="wenn ruhig"
    export function onQuiet(handler: () => void) {
        onQuietHandler = handler
    }
}
