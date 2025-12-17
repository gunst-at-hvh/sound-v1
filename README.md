# Sound-Events Tutorial Extension

Diese Extension stellt die Sound-Events genau so bereit, wie sie im Lärm-Alarm Tutorial verwendet werden:

## Blöcke

- `setSoundThreshold(value)` → Schwellenwert setzen
- `checkSound()` → im `basic.forever` aufrufen
- `onLoud(handler)` → Ereignis bei Lautstärke über Schwelle
- `onQuiet(handler)` → Ereignis bei Lautstärke unter Schwelle

## Nutzung im Tutorial

```blocks
sound.setSoundThreshold(128)
basic.forever(function () {
    sound.checkSound()
})
sound.onLoud(function () {
    basic.showIcon(IconNames.Sad)
    basic.setLedColor(0xff0000)
})
sound.onQuiet(function () {
    basic.clearScreen()
    basic.turnRgbLedOff()
})
