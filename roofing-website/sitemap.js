const { generateSitemap } = require("sitemap-webpack-plugin");

const paths = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/quote", priority: 0.7 }
];

generateSitemap({
  baseUrl: "https://royalcrown-roofing.com",
  paths,
  outFile: "./public/sitemap.xml",
});
