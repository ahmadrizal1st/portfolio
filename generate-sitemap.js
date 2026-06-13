import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/experience", changefreq: "monthly", priority: 0.8 },
  { url: "/certification", changefreq: "monthly", priority: 0.8 },
  { url: "/project", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://ahmadrizal1st.com",
  });

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", data.toString());
})();
