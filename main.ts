input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    }
    if (input.compassHeading() == 90) {
        basic.showString("E")
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
    }
})
basic.forever(function () {
	
})
