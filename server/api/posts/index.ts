import { readdirSync, readFileSync } from 'node:fs'
import parseMD from "parse-md";

export default defineEventHandler(async () => {
  const pages = Array(readdirSync('./posts').length).fill(0).map((_, i) => i + 1).reverse();
  return pages.map(p => {
    const path = `./posts/${p}.md`;
    const file = readFileSync(path);
    const { metadata } = parseMD(file.toString());
    return { 
      metadata,
      episodeNumber: p
    }
  })
})
