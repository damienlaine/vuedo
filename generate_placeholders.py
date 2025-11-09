#!/usr/bin/env python3
"""
Generate placeholder images for Vue&Do website
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Vue&Do brand colors from design system
COLORS = {
    'primary': '#6366f1',  # Indigo
    'secondary': '#10b981',  # Emerald
    'neutral': '#f8fafc',  # Light gray background
    'text': '#1e293b'  # Dark text
}

def create_hero_mockup():
    """Create hero mockup placeholder (600x500)"""
    img = Image.new('RGB', (600, 500), COLORS['neutral'])
    draw = ImageDraw.Draw(img)

    # Draw colorful gradient background
    for y in range(500):
        color_value = int(99 + (156 * y / 500))  # Gradient from indigo to lighter
        draw.rectangle([(0, y), (600, y+1)], fill=f'#{color_value:02x}{102:02x}{241:02x}')

    # Draw a phone/tablet mockup rectangle
    draw.rounded_rectangle([(150, 50), (450, 450)], radius=20, fill='white', outline=COLORS['primary'], width=4)

    # Draw some content lines inside
    for i in range(5):
        y = 100 + (i * 60)
        draw.rounded_rectangle([(180, y), (420, y + 40)], radius=10, fill=COLORS['neutral'])

    # Add text
    try:
        # Try to use a nice font
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
    except:
        font = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Title
    text = "Vue&Do"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    draw.text((300 - text_width/2, 10), text, fill='white', font=font)

    # Subtitle
    subtitle = "Visual Routines for Kids"
    bbox = draw.textbbox((0, 0), subtitle, font=font_small)
    text_width = bbox[2] - bbox[0]
    draw.text((300 - text_width/2, 470), subtitle, fill='white', font=font_small)

    img.save('images/hero-mockup.png', 'PNG')
    print('✓ Created hero-mockup.png (600x500)')

def create_favicon(size, filename):
    """Create favicon of specified size"""
    img = Image.new('RGB', (size, size), COLORS['primary'])
    draw = ImageDraw.Draw(img)

    # Draw V&D letters
    try:
        font_size = int(size * 0.5)
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()

    text = "V&D"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    x = (size - text_width) / 2
    y = (size - text_height) / 2 - bbox[1]

    draw.text((x, y), text, fill='white', font=font)

    img.save(f'images/{filename}', 'PNG')
    print(f'✓ Created {filename} ({size}x{size})')

def create_og_image():
    """Create OpenGraph image (1200x630)"""
    img = Image.new('RGB', (1200, 630), COLORS['primary'])
    draw = ImageDraw.Draw(img)

    # Gradient background
    for y in range(630):
        color_value = int(99 + (57 * y / 630))
        draw.rectangle([(0, y), (1200, y+1)], fill=f'#{color_value:02x}{102:02x}{241:02x}')

    # Add text
    try:
        font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
        font_subtitle = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
    except:
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()

    # Title
    title = "Vue&Do"
    bbox = draw.textbbox((0, 0), title, font=font_title)
    text_width = bbox[2] - bbox[0]
    draw.text((600 - text_width/2, 200), title, fill='white', font=font_title)

    # Subtitle
    subtitle = "Transform Daily Routines into Visual Stories"
    bbox = draw.textbbox((0, 0), subtitle, font=font_subtitle)
    text_width = bbox[2] - bbox[0]
    draw.text((600 - text_width/2, 350), subtitle, fill='white', font=font_subtitle)

    img.save('images/og-image.png', 'PNG')
    print('✓ Created og-image.png (1200x630)')

def create_twitter_card():
    """Create Twitter card image (1200x600)"""
    img = Image.new('RGB', (1200, 600), COLORS['secondary'])
    draw = ImageDraw.Draw(img)

    # Gradient background
    for y in range(600):
        green_value = int(16 + (100 * y / 600))
        blue_value = int(185 - (56 * y / 600))
        draw.rectangle([(0, y), (1200, y+1)], fill=f'#{green_value:02x}{blue_value:02x}81')

    # Add text
    try:
        font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 68)
        font_subtitle = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 34)
    except:
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()

    # Title
    title = "Vue&Do"
    bbox = draw.textbbox((0, 0), title, font=font_title)
    text_width = bbox[2] - bbox[0]
    draw.text((600 - text_width/2, 180), title, fill='white', font=font_title)

    # Subtitle
    subtitle = "Visual Routines for Neuro-Diverse Children"
    bbox = draw.textbbox((0, 0), subtitle, font=font_subtitle)
    text_width = bbox[2] - bbox[0]
    draw.text((600 - text_width/2, 350), subtitle, fill='white', font=font_subtitle)

    img.save('images/twitter-card.png', 'PNG')
    print('✓ Created twitter-card.png (1200x600)')

def main():
    """Generate all placeholder images"""
    print("Generating placeholder images for Vue&Do...")
    print()

    # Create images directory if it doesn't exist
    os.makedirs('images', exist_ok=True)

    # Generate all images
    create_hero_mockup()
    create_favicon(32, 'favicon-32x32.png')
    create_favicon(16, 'favicon-16x16.png')
    create_favicon(180, 'apple-touch-icon.png')
    create_favicon(192, 'icon-192.png')
    create_favicon(512, 'icon-512.png')
    create_og_image()
    create_twitter_card()

    print()
    print("✅ All placeholder images created successfully!")
    print()
    print("Note: These are simple placeholders. Replace with professional designs later.")

if __name__ == '__main__':
    main()
