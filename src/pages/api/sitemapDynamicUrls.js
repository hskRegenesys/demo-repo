import { parseString, Builder } from 'xml2js';
import { join } from 'path';
import { writeFile, readFile } from 'fs/promises';
import axios from 'axios';
 
export default async (_req, res) => {
  try {
    const { body } = _req;
    const sitemapData = body.sitemapData.map((post) => ({
      slug: post.slug,  
      date: post.date, 
    }));
 
    const xmlFilePath = join(process.cwd(), 'public', 'sitemap.xml');
    const xmlFileContents = await readFile(xmlFilePath, 'utf-8');
    let xmlObject = await parseXml(xmlFileContents);
 
    for (const entry of sitemapData) {
      const slugExists = xmlObject.urlset.url.some((url) => url.loc[0].endsWith(`/blog/${entry.slug}`));
      if (!slugExists) {
        xmlObject.urlset.url.push({
          loc: [`https://www.digitalregenesys.com/blog/${entry.slug}`], 
          lastmod: [entry.date],
          changefreq:['Daily'],
          priority:['0.80'] 
        });
      }
    }
 
    const updatedXmlString = buildXml(xmlObject);
 
    await writeFile(xmlFilePath, updatedXmlString, 'utf-8');
 
    res.status(200).json({ success: true, message: 'XML file updated successfully'});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal sitemap server error'});
  }
};
 
async function parseXml(xmlString) {
  return new Promise((resolve, reject) => {
    parseString(xmlString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
 
function buildXml(xmlObject) {
  const builder = new Builder();
  return builder.buildObject(xmlObject);
}
export const config = {
  api: {
      bodyParser: {
          sizeLimit: '8mb' 
      }
  }
}
