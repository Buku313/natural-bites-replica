/**
 * Image migration script: uploads images from /public/images/ to Sanity
 * Run with: npx tsx scripts/migrate-images.ts
 */
import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import { writeFile } from 'fs/promises'
import path from 'path'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pgfl5hzz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-11-01',
  useCdn: false,
})

// Map of logical name -> highest resolution file path
const imagesToMigrate: Record<string, string> = {
  // Logos
  'Logo.svg': 'Logo.svg',
  'nb-logo-white': 'nb logo white lowdef-1920w.png',
  'nacas-logo': 'nacas logo-1920w.png',

  // Hero / page backgrounds
  'hero-bg': '5m1xf9vR8ePwn2rO1oQJ_VID-20250305-WA0003.v2.0000000-1920w.jpg',
  'nosotros-hero': 'nosotros-1920w.png',
  'recetas-hero': 'Portada recetas-2880w.png',

  // Feature images
  'chips-dip': '8fae07bab892bc35820ec6d8e12a552d-1280w.jpg',
  'banano': 'banano-1280w.png',
  'bowl': 'bowl-1920w.png',

  // Banner
  'banner-nuevo-look': 'Banner-Nuevo-Look-1920-X-2880-1920w.jpg',

  // OG image
  'og-image': 'img Compos-1920w.png',

  // Product images (tienda page uses 640w, upload highest-res available)
  'peanut-butter-sugar-free': '4839625724-1920w.png',
  'almond-butter-protein': '4839663755-1920w.png',
  'choco-nut-butter': 'c5e2fd13b5928e4fac7aebc2d80fe140-1920w.png',
  'pancake-waffle-mix': 'fb33a7b2fe2c99ac52fca83182b6d115-1920w.png',
  'chia-seeds': 'Untitled-b014d76b-1920w.png',
  'pita-chips': 'd37e998ca2d228b226f3d0d05ed49091-2880w.png',
  'tortilla-chips': 'd37e998ca2d228b226f3d0d05ed49091-2d3c32c0-1920w.png',
  'almond-sugar-free': 'Almond-Sugar-Free-NB-265g_01-1920w.png',

  // ProductTabs-specific images (different from tienda grid)
  'peanut-butter-sf-tab': 'peanut-butter-sugar-free.png',
  'almond-butter-tab': 'almond-butter-protein.png',
  'choco-nut-tab': 'choco-nut-butter.png',
}

const imagesDir = path.join(__dirname, '..', 'public', 'images')

async function migrateImages() {
  const imageMap: Record<string, string> = {}
  const seen = new Set<string>()

  for (const [key, filename] of Object.entries(imagesToMigrate)) {
    // Reuse asset ID if same file was already uploaded
    if (seen.has(filename)) {
      const existingEntry = Object.entries(imagesToMigrate).find(
        ([k, f]) => f === filename && k !== key && imageMap[k]
      )
      if (existingEntry) {
        imageMap[key] = imageMap[existingEntry[0]]
        console.log(`  ↳ Reusing ${imageMap[key]} for ${key}`)
        continue
      }
    }

    const filePath = path.join(imagesDir, filename)
    console.log(`Uploading ${key} (${filename})...`)

    try {
      const stream = createReadStream(filePath)
      const asset = await client.assets.upload('image', stream, {
        filename,
      })
      imageMap[key] = asset._id
      seen.add(filename)
      console.log(`  ✓ ${asset._id}`)
    } catch (err) {
      console.error(`  ✗ Failed to upload ${filename}:`, err)
    }
  }

  const outputPath = path.join(__dirname, 'image-map.json')
  await writeFile(outputPath, JSON.stringify(imageMap, null, 2))
  console.log(`\nImage map saved to ${outputPath}`)
  console.log(`Total uploaded: ${Object.keys(imageMap).length}`)
}

migrateImages().catch(console.error)
