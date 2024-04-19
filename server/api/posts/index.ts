import { readdirSync, readFileSync } from 'node:fs'
import { parse } from "marked";
import parseMD from "parse-md";

export default defineEventHandler(async (event) => {
  const per = 20;
  const query = getQuery(event);
  const numbers = Array(readdirSync('./posts').length).fill(0).map((_, i) => i + 1).reverse();
  const page = Number.parseInt(query.page as string, 10);
  const pages = numbers.splice((page - 1) * per, per);

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
