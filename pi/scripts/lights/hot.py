from sense_hat import SenseHat

sense = SenseHat()

r = [255,0,0]
o = [255,100,10]

image = [
    r,r,r,r,r,r,r,o,
    r,r,r,r,r,r,o,o,
    r,r,r,r,r,o,o,o,
    r,r,r,r,o,o,o,o,
    r,r,r,o,o,o,o,o,
    r,r,o,o,o,o,o,o,
    r,o,o,o,o,o,o,o,
    o,o,o,o,o,o,o,o
    ]

sense.set_pixels(image)
