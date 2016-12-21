from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

c = [100,250,250]
b = [70,200,225]

image = [
    c,c,c,c,c,c,c,b,
    c,c,c,c,c,c,b,b,
    c,c,c,c,c,b,b,b,
    c,c,c,c,b,b,b,b,
    c,c,c,b,b,b,b,b,
    c,c,b,b,b,b,b,b,
    c,b,b,b,b,b,b,b,
    b,b,b,b,b,b,b,b
    ]

sense.set_pixels(image)
