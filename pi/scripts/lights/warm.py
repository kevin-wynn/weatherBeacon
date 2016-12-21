from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

y = [250,225,125]
o = [255,100,10]

image = [
    y,y,y,y,y,y,y,o,
    y,y,y,y,y,y,o,o,
    y,y,y,y,y,o,o,o,
    y,y,y,y,o,o,o,o,
    y,y,y,o,o,o,o,o,
    y,y,o,o,o,o,o,o,
    y,o,o,o,o,o,o,o,
    o,o,o,o,o,o,o,o
    ]

sense.set_pixels(image)
