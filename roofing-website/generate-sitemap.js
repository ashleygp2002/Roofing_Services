const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://royalcrown-roofing.com' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/quote', changefreq: 'monthly', priority: 0.7 }
];

// Add pages to the sitemap
pages.forEach(page => sitemap.write(page));
sitemap.end();

// Save the sitemap to the public folder
streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').write(data);
  console.log("✅ Sitemap successfully generated!");
});
