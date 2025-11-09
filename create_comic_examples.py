#!/usr/bin/env python3
"""
Create enhanced comic-style example panels for Vue&Do showcase.
Generates improved SVG illustrations with more detail and comic-book styling.
"""

# Enhanced SVG templates for each routine example

TEETH_BEFORE = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Rainy morning -->
    <rect width="200" height="200" fill="#E3F2FD"/>
    <!-- Rain drops -->
    <path d="M20 10 L18 20 M40 15 L38 25 M60 5 L58 15 M80 20 L78 30 M100 12 L98 22 M120 8 L118 18 M140 18 L138 28"
          stroke="#64B5F6" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>

    <!-- Child's face with messy appearance -->
    <circle cx="100" cy="90" r="45" fill="#FFD8A8"/>

    <!-- Messy hair -->
    <path d="M60 60 Q65 45 70 55 Q75 48 80 58 Q85 50 90 60 Q95 48 100 58 Q105 50 110 60 Q115 48 120 58 Q125 50 130 58 Q135 45 140 60"
          fill="#5D4037" stroke="#5D4037" stroke-width="2"/>

    <!-- Sleepy eyes -->
    <ellipse cx="85" cy="85" rx="8" ry="4" fill="#333"/>
    <ellipse cx="115" cy="85" rx="8" ry="4" fill="#333"/>

    <!-- Mouth with dirty teeth -->
    <path d="M85 105 Q100 112 115 105" stroke="#333" stroke-width="2" fill="none"/>
    <rect x="95" y="105" width="4" height="6" fill="#8D6E63" opacity="0.6"/>
    <rect x="101" y="105" width="4" height="6" fill="#8D6E63" opacity="0.6"/>

    <!-- Toothbrush in hand (not brushing yet) -->
    <rect x="40" y="140" width="6" height="30" rx="3" fill="#4FC3F7"/>
    <rect x="42" y="135" width="10" height="8" rx="2" fill="#E1F5FE"/>

    <!-- Time indicator -->
    <text x="10" y="190" font-family="Arial" font-size="12" fill="#666">7:30 AM</text>
</svg>'''

TEETH_AFTER = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Same rainy morning -->
    <rect width="200" height="200" fill="#E3F2FD"/>
    <path d="M20 10 L18 20 M40 15 L38 25 M60 5 L58 15 M80 20 L78 30 M100 12 L98 22 M120 8 L118 18 M140 18 L138 28"
          stroke="#64B5F6" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>

    <!-- Child's face - now refreshed -->
    <circle cx="100" cy="90" r="45" fill="#FFD8A8"/>

    <!-- Neat hair -->
    <ellipse cx="100" cy="55" rx="48" ry="35" fill="#5D4037"/>

    <!-- Happy eyes -->
    <circle cx="85" cy="85" r="3" fill="#333"/>
    <circle cx="115" cy="85" r="3" fill="#333"/>
    <path d="M80 78 Q85 75 90 78" stroke="#333" stroke-width="1.5" fill="none"/>
    <path d="M110 78 Q115 75 120 78" stroke="#333" stroke-width="1.5" fill="none"/>

    <!-- Big smile with sparkly teeth -->
    <path d="M85 105 Q100 115 115 105" stroke="#333" stroke-width="2" fill="none"/>
    <!-- Sparkly white teeth -->
    <rect x="93" y="105" width="4" height="8" fill="#FFF" rx="1"/>
    <rect x="99" y="105" width="4" height="8" fill="#FFF" rx="1"/>
    <rect x="105" y="105" width="4" height="8" fill="#FFF" rx="1"/>

    <!-- Sparkle effects -->
    <g opacity="0.8">
        <path d="M75 95 L77 97 L75 99 L73 97 Z" fill="#FFD700"/>
        <path d="M125 95 L127 97 L125 99 L123 97 Z" fill="#FFD700"/>
        <path d="M100 70 L102 72 L100 74 L98 72 Z" fill="#FFD700"/>
    </g>

    <!-- Toothbrush being used -->
    <rect x="125" y="95" width="6" height="30" rx="3" fill="#4FC3F7" transform="rotate(-30 128 110)"/>
    <rect x="127" y="90" width="10" height="8" rx="2" fill="#E1F5FE" transform="rotate(-30 132 94)"/>
</svg>'''

PAJAMAS_BEFORE = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Evening with moon -->
    <rect width="200" height="200" fill="#E8EAF6"/>
    <circle cx="170" cy="30" r="20" fill="#FFF9C4"/>
    <circle cx="165" cy="27" r="18" fill="#E8EAF6"/>
    <g opacity="0.4">
        <circle cx="30" cy="20" r="1" fill="#FFD700"/>
        <circle cx="50" cy="35" r="1" fill="#FFD700"/>
        <circle cx="45" cy="15" r="1" fill="#FFD700"/>
    </g>

    <!-- Child in day clothes (jeans and shirt) -->
    <circle cx="100" cy="70" r="30" fill="#FFD8A8"/>

    <!-- Regular hairstyle -->
    <ellipse cx="100" cy="50" rx="32" ry="25" fill="#8D6E63"/>

    <!-- Tired eyes -->
    <circle cx="90" cy="68" r="3" fill="#333"/>
    <circle cx="110" cy="68" r="3" fill="#333"/>
    <path d="M95 75 L105 75" stroke="#333" stroke-width="2"/>

    <!-- Day clothes - T-shirt -->
    <rect x="75" y="95" width="50" height="45" rx="5" fill="#2196F3"/>
    <circle cx="85" cy="110" r="3" fill="#1976D2"/>
    <circle cx="95" cy="110" r="3" fill="#1976D2"/>
    <circle cx="105" cy="110" r="3" fill="#1976D2"/>

    <!-- Jeans -->
    <rect x="80" y="135" width="18" height="40" fill="#1565C0"/>
    <rect x="102" y="135" width="18" height="40" fill="#1565C0"/>
    <line x1="89" y1="140" x2="89" y2="170" stroke="#0D47A1" stroke-width="1"/>
    <line x1="111" y1="140" x2="111" y2="170" stroke="#0D47A1" stroke-width="1"/>

    <text x="10" y="190" font-family="Arial" font-size="12" fill="#666">8:00 PM</text>
</svg>'''

PAJAMAS_AFTER = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Same evening -->
    <rect width="200" height="200" fill="#E8EAF6"/>
    <circle cx="170" cy="30" r="20" fill="#FFF9C4"/>
    <circle cx="165" cy="27" r="18" fill="#E8EAF6"/>
    <g opacity="0.4">
        <circle cx="30" cy="20" r="1" fill="#FFD700"/>
        <circle cx="50" cy="35" r="1" fill="#FFD700"/>
        <circle cx="45" cy="15" r="1" fill="#FFD700"/>
    </g>

    <!-- Child now in cozy pajamas -->
    <circle cx="100" cy="70" r="30" fill="#FFD8A8"/>

    <!-- Same hairstyle -->
    <ellipse cx="100" cy="50" rx="32" ry="25" fill="#8D6E63"/>

    <!-- Happy relaxed eyes -->
    <circle cx="90" cy="68" r="3" fill="#333"/>
    <circle cx="110" cy="68" r="3" fill="#333"/>
    <path d="M92 77 Q100 80 108 77" stroke="#333" stroke-width="2" fill="none"/>

    <!-- Cozy pajamas - top with pattern -->
    <rect x="75" y="95" width="50" height="45" rx="5" fill="#E1BEE7"/>
    <!-- Cute pattern on pajamas -->
    <g opacity="0.6">
        <circle cx="85" cy="110" r="4" fill="#CE93D8"/>
        <circle cx="95" cy="105" r="3" fill="#CE93D8"/>
        <circle cx="105" cy="110" r="4" fill="#CE93D8"/>
        <circle cx="115" cy="105" r="3" fill="#CE93D8"/>
        <circle cx="90" cy="125" r="3" fill="#CE93D8"/>
        <circle cx="110" cy="125" r="3" fill="#CE93D8"/>
    </g>

    <!-- Pajama pants -->
    <rect x="80" y="135" width="18" height="40" fill="#E1BEE7"/>
    <rect x="102" y="135" width="18" height="40" fill="#E1BEE7"/>

    <!-- Comfy slippers -->
    <ellipse cx="89" cy="178" rx="10" ry="4" fill="#F48FB1"/>
    <ellipse cx="111" cy="178" rx="10" ry="4" fill="#F48FB1"/>

    <!-- Happy sparkles around -->
    <g opacity="0.7">
        <path d="M60 60 L62 62 L60 64 L58 62 Z" fill="#FFD700"/>
        <path d="M140 60 L142 62 L140 64 L138 62 Z" fill="#FFD700"/>
    </g>
</svg>'''

BREAKFAST_BEFORE = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Sunny morning -->
    <rect width="200" height="200" fill="#FFF9C4"/>
    <!-- Bright sun -->
    <circle cx="170" cy="30" r="15" fill="#FFEB3B"/>
    <g stroke="#FFEB3B" stroke-width="2">
        <line x1="170" y1="10" x2="170" y2="15"/>
        <line x1="170" y1="45" x2="170" y2="50"/>
        <line x1="150" y1="30" x2="155" y2="30"/>
        <line x1="185" y1="30" x2="190" y2="30"/>
        <line x1="157" y1="15" x2="160" y2="18"/>
        <line x1="180" y1="42" x2="183" y2="45"/>
        <line x1="183" y1="18" x2="180" y2="15"/>
        <line x1="160" y1="42" x2="157" y2="45"/>
    </g>

    <!-- School backpack -->
    <rect x="155" y="95" width="28" height="35" rx="3" fill="#F44336"/>
    <rect x="159" y="100" width="20" height="6" fill="#C62828"/>
    <circle cx="164" cy="115" r="2" fill="#FFEB3B"/>
    <path d="M163 95 Q169 88 175 95" stroke="#C62828" stroke-width="2.5" fill="none"/>

    <!-- Table -->
    <rect x="30" y="140" width="100" height="4" fill="#8D6E63"/>

    <!-- Full breakfast plate -->
    <ellipse cx="75" cy="135" rx="35" ry="15" fill="#FFF"/>
    <ellipse cx="75" cy="133" rx="33" ry="13" fill="#E3F2FD" stroke="#2196F3" stroke-width="2"/>

    <!-- Food items -->
    <!-- Toast -->
    <rect x="58" y="120" width="15" height="12" rx="2" fill="#FF9800"/>
    <rect x="60" y="122" width="11" height="8" rx="1" fill="#FFB74D"/>

    <!-- Egg -->
    <ellipse cx="85" cy="125" rx="10" ry="8" fill="#FFF"/>
    <circle cx="85" cy="125" r="4" fill="#FFD54F"/>

    <!-- Berries -->
    <circle cx="95" cy="122" r="4" fill="#E53935"/>
    <circle cx="100" cy="124" r="3" fill="#C62828"/>
    <circle cx="98" cy="128" r="3" fill="#E53935"/>

    <!-- Orange juice -->
    <rect x="110" y="115" width="12" height="20" rx="1" fill="#FFF" stroke="#FF9800" stroke-width="1"/>
    <rect x="111" y="125" width="10" height="10" fill="#FFB74D" opacity="0.7"/>

    <!-- Hungry child indicator -->
    <text x="10" y="30" font-family="Arial" font-size="14" fill="#666">7:45 AM</text>
    <text x="10" y="50" font-family="Arial" font-size="11" fill="#999">School day</text>
</svg>'''

BREAKFAST_AFTER = '''<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background - Same sunny morning -->
    <rect width="200" height="200" fill="#FFF9C4"/>
    <circle cx="170" cy="30" r="15" fill="#FFEB3B"/>
    <g stroke="#FFEB3B" stroke-width="2">
        <line x1="170" y1="10" x2="170" y2="15"/>
        <line x1="170" y1="45" x2="170" y2="50"/>
        <line x1="150" y1="30" x2="155" y2="30"/>
        <line x1="185" y1="30" x2="190" y2="30"/>
        <line x1="157" y1="15" x2="160" y2="18"/>
        <line x1="180" y1="42" x2="183" y2="45"/>
        <line x1="183" y1="18" x2="180" y2="15"/>
        <line x1="160" y1="42" x2="157" y2="45"/>
    </g>

    <!-- School backpack - ready to go! -->
    <rect x="155" y="95" width="28" height="35" rx="3" fill="#F44336"/>
    <rect x="159" y="100" width="20" height="6" fill="#C62828"/>
    <circle cx="164" cy="115" r="2" fill="#FFEB3B"/>
    <path d="M163 95 Q169 88 175 95" stroke="#C62828" stroke-width="2.5" fill="none"/>

    <!-- Table -->
    <rect x="30" y="140" width="100" height="4" fill="#8D6E63"/>

    <!-- Clean empty plate -->
    <ellipse cx="75" cy="135" rx="35" ry="15" fill="#FFF"/>
    <ellipse cx="75" cy="133" rx="33" ry="13" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2"/>

    <!-- Plate sparkles (clean!) -->
    <g opacity="0.5">
        <path d="M50 130 Q55 128 60 130" stroke="#81C784" stroke-width="1" fill="none"/>
        <path d="M85 125 Q90 123 95 125" stroke="#81C784" stroke-width="1" fill="none"/>
    </g>

    <!-- Empty glass -->
    <rect x="110" y="115" width="12" height="20" rx="1" fill="#FFF" stroke="#E0E0E0" stroke-width="1"/>

    <!-- Happy stars (accomplished!) -->
    <g opacity="0.8">
        <path d="M40 100 L42 103 L40 106 L38 103 Z" fill="#FFD700"/>
        <path d="M105 95 L107 98 L105 101 L103 98 Z" fill="#FFD700"/>
        <path d="M75 105 L78 108 L75 111 L72 108 Z" fill="#FFD700"/>
    </g>

    <!-- Happy energy indicator -->
    <g transform="translate(30, 55)">
        <circle cx="20" cy="20" r="18" fill="#FFE082" opacity="0.3"/>
        <path d="M15 18 Q20 22 25 18" stroke="#4CAF50" stroke-width="2" fill="none"/>
        <circle cx="16" cy="16" r="2" fill="#333"/>
        <circle cx="24" cy="16" r="2" fill="#333"/>
    </g>

    <text x="10" y="190" font-family="Arial" font-size="11" fill="#4CAF50" font-weight="bold">Ready for school!</text>
</svg>'''

# Save the enhanced SVG files
import os

output_dir = "images/showcase"
os.makedirs(output_dir, exist_ok=True)

with open(f"{output_dir}/teeth-before.svg", "w") as f:
    f.write(TEETH_BEFORE)

with open(f"{output_dir}/teeth-after.svg", "w") as f:
    f.write(TEETH_AFTER)

with open(f"{output_dir}/pajamas-before.svg", "w") as f:
    f.write(PAJAMAS_BEFORE)

with open(f"{output_dir}/pajamas-after.svg", "w") as f:
    f.write(PAJAMAS_AFTER)

with open(f"{output_dir}/breakfast-before.svg", "w") as f:
    f.write(BREAKFAST_BEFORE)

with open(f"{output_dir}/breakfast-after.svg", "w") as f:
    f.write(BREAKFAST_AFTER)

print("✅ Created 6 enhanced comic-style SVG panels:")
print(f"   - {output_dir}/teeth-before.svg")
print(f"   - {output_dir}/teeth-after.svg")
print(f"   - {output_dir}/pajamas-before.svg")
print(f"   - {output_dir}/pajamas-after.svg")
print(f"   - {output_dir}/breakfast-before.svg")
print(f"   - {output_dir}/breakfast-after.svg")
print("\nThese enhanced illustrations feature:")
print("  • More detailed character expressions")
print("  • Context indicators (weather, time, school items)")
print("  • Clear before/after transformations")
print("  • Visual rewards (sparkles, stars)")
print("  • Comic-book styling with better composition")
