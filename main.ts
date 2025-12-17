/**
 * Sound-Events Extension exakt für Lärm-Alarm Tutorial
 * Calliope mini V1
 */

namespace sound {

    let threshold = 0
    let wasLoud = false

    /**
     * Setzt den Schwellenwert (Schüler tragen eigenen Wert ein)
     */
    //% block="setze Schwellenwert auf %value"
    //% value.min=0 value.max=255
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
        if (current && !wasLoud) {
            if (_onLoud) _onLoud()
        }
        if (!current && wasLoud) {
            if (_onQuiet) _onQuiet()
        }
        wasLoud = current
    }

    let _onLoud: (() => void) | null = null
    let _onQuiet: (() => void) | null = null

    /**
     * Event: wenn Lautstärke über Schwelle steigt
     */
    //% block="wenn laut"
    //% group="Sound-Alarm"
    export function onLoud(handler: () => void) {
        _onLoud = handler
    }

    /**
     * Event: wenn Lautstärke unter Schwelle fällt
     */
    //% block="wenn ruhig"
    //% group="Sound-Alarm"
    export function onQuiet(handler: () => void) {
        _onQuiet = handler
    }
}
