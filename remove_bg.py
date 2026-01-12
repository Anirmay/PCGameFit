from PIL import Image

def remove_light_background(input_path, output_path, threshold=200):
    """
    Remove light/white background from image.
    threshold: pixels with R, G, B all above this value become transparent (0-255)
    """
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        # If all RGB values are above threshold, make it transparent
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            new_data.append((255, 255, 255, 0))  # Fully transparent
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"✅ Background removed! Processed {len(datas)} pixels.")
    print(f"   Saved to: {output_path}")

# Use the original beautiful logo generated earlier
try:
    original_logo = "C:/Users/HP/.gemini/antigravity/brain/27dfacca-71d6-453e-8db1-bc2455904468/pcgamefit_logo_1768199768286.png"
    remove_light_background(original_logo, "logo.png", threshold=200)
except FileNotFoundError:
    print("Original logo not found, processing current logo.png")
    remove_light_background("logo.png", "logo.png", threshold=200)
