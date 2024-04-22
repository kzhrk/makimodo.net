import ejs from 'ejs';
import parseMD from "parse-md";
import { parse } from "marked";
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const template = readFileSync('./scripts/feedTemplate.xml', {}).toString();

const numbers = Array(readdirSync('./episodes').length).fill(0).map((_, i) => i + 1).reverse();
const episodes = numbers.map(p => {
  const path = `./episodes/${p}.md`;
  const file = readFileSync(path);
  const { metadata, content } = parseMD(file.toString());
  const html = parse(content);
  return {
    ...metadata,
    date: new Date(metadata.date).toUTCString(),
    episodeNumber: p,
    content: html
  }
})
const data = ejs.render(template, {
  episodes
})

writeFileSync('./public/feed.xml', data);
