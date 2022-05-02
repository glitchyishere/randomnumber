function randomnumber(number = 49) {
    return Math.ceil(Math.random() * number)
}

for (var k = 1; k <= 8; k++) {
    for (var x = 1; x <= 6; x++) {
        console.log(randomnumber())
    }
}