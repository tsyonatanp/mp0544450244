import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.marietta-law.co.il'

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Service Pages
    {
      url: `${baseUrl}/services/real-estate`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/construction-defects`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/notary`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/family-law`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/torts`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/civil-commercial`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/labor-law`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/criminal-law`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/administrative-law`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ip-tech`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/immigration`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog Pages
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/inherited-property-sale`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/urban-renewal-rights`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/late-apartment-delivery`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/divorce-mediation`,
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/buying-guide-or-yehuda-2025`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/arnona-discounts`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/construction-defects-guide`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/contract-breach`,
      lastModified: new Date('2026-01-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/divorce-process-guide`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/employee-hearing-rights`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/enduring-power-of-attorney`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/foreign-expert-visa`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/police-investigation-guide`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/trademark-registration`,
      lastModified: new Date('2026-01-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/work-accident-rights`,
      lastModified: new Date('2026-01-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Location Pages
    {
      url: `${baseUrl}/areas/or-yehuda`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
