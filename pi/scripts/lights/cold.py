from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

c = [100,250,250]

image = [
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c,
    c,c,c,c,c,c,c,c
    ]

sense.set_pixels(image)
