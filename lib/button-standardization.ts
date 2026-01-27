// Script to standardize button styles across all service pages
// This file documents the changes needed for consistency

// STANDARD BUTTON CLASSES:
const PRIMARY_BUTTON = "flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30"

const WHATSAPP_BUTTON = "flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30"

// CHANGES NEEDED IN ALL SERVICE PAGES:
// 1. Replace px-8 with px-10 in all buttons
// 2. Add duration-300 to all transition-all classes
// 3. Change hover:shadow-orange-500/30 to hover:shadow-amber-500/30
// 4. Ensure H1 titles are: text-4xl md:text-5xl lg:text-6xl

// Files to update:
// - construction-defects/page.tsx ✓ (already done)
// - notary/page.tsx ✓ (already done)
// - real-estate/page.tsx ✓ (already done)
// - administrative-law/page.tsx
// - civil-commercial/page.tsx
// - criminal-law/page.tsx
// - family-law/page.tsx
// - immigration/page.tsx
// - ip-tech/page.tsx
// - labor-law/page.tsx
// - torts/page.tsx
