import os
from PIL import Image

# Open input.png
try:
    im = Image.open("input.png")
except IOError:
    print("Error: input.png not found")
    exit(1)

# Create a list of sizes
# sizes = [16, 32, 48, 64, 128, 256, 512]

# Use a list comprehension to create resized versions of input.png
# [im.resize((size, size)).save(
#    f"Square{size}x{size}Logo.png") for size in sizes]


# Create favicon.png of 32x32 size
im.resize((32, 32)).save("favicon.png")

# Create favicon.png of 32x32 size
im.resize((32, 32)).save("favicon.png")

# Create the .icns file
im.save("icon.icns", "icns")

# Create the .ico file
im.save("icon.ico", "ico")

# Create the favicon.ico file
im.save("favicon.ico", "ico", sizes=sizes)
