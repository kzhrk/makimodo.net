import { readFileSync } from 'node:fs'
import { parse } from "marked";
import parseMD from "parse-md";

export default defineEventHandler(async (event) => {
  const number = getRouterParam(event, 'number')
  const path = `./posts/${number}.md`;
  const file = readFileSync(path);
  const { metadata, content } = parseMD(file.toString());
  const html = parse(content);
  return {
    ...metadata,
    html,
  };
})
