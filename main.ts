/**
 * Sound-Events Extension angepasst an Tutorial
 * Calliope mini V1
 */

namespace sound {

    let threshold = 30
    let wasLoud = false

    /**
     * Setzt den Schwellenwert
     */
    //% block="setze Schwellenwert für laut auf %value"
    //% value.min=0 value.max=255 value.defl=30
    //% group="Sound-Alarm"
    export function setSoundThreshold(value: number) {
        threshold = value
    }

    /**
     * Prüft die Lautstärke (muss in basic.forever aufgerufen werden)
     */
    //% block="prüfe Lautstärke"
    //% group="Sound-Alarm"
    export function checkSound() {
        let current = input.soundLevel() > threshold
        // Flanke: leise → laut
        if (current && !wasLoud) {
            if (_onLoud) _onLoud()
        }
        // Flanke: laut → leise
        if (!current && wasLoud) {
            if (_onQuiet) _onQuiet()
        }
        wasLoud = current
    }

    let _onLoud: (() => void) | null = null
    let _onQuiet: (() => void) | null = null

    /**
     * Event: wenn Lautstärke über Schwellenwert steigt
     */
    //% block="wenn laut"
    //% group="Sound-Alarm"
    export function onLoud(handler: () => void) {
        _onLoud = handler
    }

    /**
     * Event: wenn Lautstärke unter Schwellenwert fällt
     */
    //% block="wenn ruhig"
    //% group="Sound-Alarm"
    export function onQuiet(handler: () => void) {
        _onQuiet = handler
    }
}
