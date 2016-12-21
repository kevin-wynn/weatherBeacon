from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

o = [150,165,190]
c = [0,255,255]

image = [
    o,c,o,c,o,c,o,c,
    c,o,c,o,c,o,c,o,
    o,c,o,c,o,c,o,c,
    c,o,c,o,c,o,c,o,
    o,c,o,c,o,c,o,c,
    c,o,c,o,c,o,c,o,
    o,c,o,c,o,c,o,c,
    c,o,c,o,c,o,c,o
    ]

sense.set_pixels(image)
