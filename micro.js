let My_choice = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == My_choice) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (receivedNumber == 0 && My_choice == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 1 && My_choice == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 2 && My_choice == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 2 && My_choice == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (receivedNumber == 1 && My_choice == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (receivedNumber == 0 && My_choice == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
    	
    }
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    My_choice = 0
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
    My_choice = 2
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . # #
        . # . # #
        . . # . .
        . # . # #
        # . . # #
        `)
    My_choice = 1
    radio.sendNumber(1)
})
radio.setGroup(5)
My_choice = 1
