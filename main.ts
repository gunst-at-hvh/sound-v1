/**
 * Stabile Sound-Events für Calliope mini V1
 * Blöcke sichtbar in Input/Eingabe
 */

namespace sound {

    let threshold = 30
    let wasLoud = false

    let onLoudHandler: (() => void) | null = null
    let onQuietHandler: (() => void) | null = null

    /**
     * Setzt den Schwellenwert für Lautstärke
     */
    //% block="setze Schwellenwert auf %value"
    //% blockNamespace="input"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    /**
     * Prüft die aktuelle Lautstärke
     */
    //% block="prüfe Lautstärke"
    //% blockNamespace="input"
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

    /**
     * Event, wenn laut
     */
    //% block="wenn laut"
    //% blockNamespace="input"
    export function onLoud(handler: () => void) {
        onLoudHandler = handler
    }

    /**
     * Event, wenn ruhig
     */
    //% block="wenn ruhig"
    //% blockNamespace="input"
    export function onQuiet(handler: () => void) {
        onQuietHandler = handler
    }
}
