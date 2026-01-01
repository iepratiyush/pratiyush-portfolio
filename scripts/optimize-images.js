const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage() {
  const inputPath = path.join(__dirname, '../public/profile.JPG');
  const outputPath = path.join(__dirname, '../public/profile.webp');

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);

    console.log(`✓ Optimized profile.JPG to profile.webp`);
    console.log(`  Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
    console.log(`  Optimized: ${(outputStats.size / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${(((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(2)}%`);
  } catch (error) {
    console.error('Error optimizing image:', error);
    process.exit(1);
  }
}

optimizeImage();
