# Sound-Events Extension

Stabile Sound-Events für Calliope mini V1.  
Blöcke:

- `setze Schwellenwert auf`
- `prüfe Lautstärke`
- `wenn laut`
- `wenn ruhig`

Kategorie: **Input / Eingabe**

---

**Verwendung:**

```ts
sound.setSoundThreshold(128)
basic.forever(() => sound.checkSound())

sound.onLoud(() => {
    basic.showIcon(IconNames.Angry)
    basic.setLedColor(0xff0000)
})

sound.onQuiet(() => {
    basic.clearScreen()
    basic.turnRgbLedOff()
})
