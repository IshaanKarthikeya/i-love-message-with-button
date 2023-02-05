input.onButtonPressed(Button.A, function () {
    showIndigo = 1
})
function ILOVEDAD () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString(" DAD")
}
function ILOVEINDIGO () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . #
        . # # # .
        . . # # .
        # # . # .
        . # . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    showIndigo = 0
})
let showIndigo = 0
showIndigo = 1
basic.forever(function () {
    if (showIndigo == 1) {
        ILOVEINDIGO()
    } else {
        ILOVEDAD()
    }
})
