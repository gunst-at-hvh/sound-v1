Sound-Events Extension für Calliope mini V1

Version: 0.0.4
Kategorie: Input / Eingabe
Beschreibung: Stabile Sound-Events für Calliope mini V1 mit Default-Schwellenwert 30. Die Extension stellt einfache Blöcke zur Verfügung, um auf steigende oder fallende Lautstärke zu reagieren.

Blöcke
Block	Beschreibung
setze Schwellenwert auf [value]	Setzt den Schwellenwert für die Lautstärke (Default: 30).
prüfe Lautstärke	Prüft die aktuelle Lautstärke und löst ggf. Events aus.
wenn Lautstärke steigt über Schwellenwert	Wird ausgelöst, wenn die aktuelle Lautstärke den Schwellenwert überschreitet.
wenn Lautstärke fällt unter Schwellenwert	Wird ausgelöst, wenn die Lautstärke wieder unter den Schwellenwert fällt.
Installation

ZIP-Datei sound-events.zip herunterladen.

MakeCode → Erweiterungen → Eigene Erweiterung → Ordner auswählen oder ZIP importieren.

Blöcke erscheinen unter Input / Eingabe.

Beispiel-Code
sound.setSoundThreshold(30)

basic.forever(() => {
    sound.checkSound()
})

sound.onAbove(() => {
    basic.showIcon(IconNames.Angry)
    basic.setLedColor(0xff0000)
})

sound.onBelow(() => {
    basic.clearScreen()
    basic.turnRgbLedOff()
})


Erklärung:

sound.checkSound() muss in basic.forever aufgerufen werden, damit Events regelmäßig überprüft werden.

onAbove reagiert auf Lautstärke über dem Schwellenwert.

onBelow reagiert, wenn die Lautstärke wieder unter den Schwellenwert fällt.

Hinweise

Die Extension ist getestet auf Calliope mini V1.

Default-Schwellenwert: 30 (kann per Block angepasst werden).

Funktioniert auch auf echter Hardware zuverlässig, Simulator kann Limitierungen haben.
