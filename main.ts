let dicesides: number = 6;
const dicemax: number = 99;
const dicemin: number = 2;
let buttnpress: number = 0;
let lock: boolean = true

while (true) {

    if (lock) {
        if (input.buttonIsPressed(Button.A)) {
            if (dicesides > dicemin) {
                dicesides = dicesides - 1
                basic.showNumber(dicesides)
            }
        }

        if (input.buttonIsPressed(Button.B)) {
            if (dicesides < dicemax) {
                dicesides = dicesides + 1
                basic.showNumber(dicesides)
            }
        }



        if (input.isGesture(Gesture.Shake)) {
            let dicerandom = randint(dicemin, dicesides)
            basic.showNumber(dicerandom)
            lock = false
        }

    }

    if (input.logoIsPressed()) {
        music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        lock = true
        
        basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . . # # 
        . . . # # 
        `)
    }

}

