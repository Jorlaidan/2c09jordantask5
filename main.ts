let Xvalue = 0
let Yvalue = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Xvalue = 0
    Yvalue = 0
    while (Xvalue <= 4) {
        led.plot(Xvalue, Yvalue)
        basic.pause(500)
        Xvalue += 1
    }
    while (Yvalue <= 4) {
        Xvalue = 4
        Yvalue += 1
        for (let index = 0; index < 5; index++) {
            led.plot(Xvalue, Yvalue)
            basic.pause(500)
            Xvalue += -1
        }
        Xvalue = 0
        Yvalue += 1
        for (let index = 0; index < 5; index++) {
            led.plot(Xvalue, Yvalue)
            basic.pause(500)
            Xvalue += 1
        }
    }
})
