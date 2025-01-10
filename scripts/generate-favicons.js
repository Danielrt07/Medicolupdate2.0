const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Read the SVG file
  const svgBuffer = await fs.readFile(inputSvg);

  // Generate PNG files
  const sizes = {
    'favicon.png': 32,  // Modern browsers support PNG favicons
    'icon.png': 192,
    'apple-icon.png': 180,
    'apple-touch-icon-precomposed.png': 180
  };

  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, filename));
  }

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 