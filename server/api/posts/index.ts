import { readdirSync } from 'node:fs'


export default defineEventHandler(async (event) => {
  const per = 20;
  const numbers = Array(readdirSync('./posts').length).fill(0).map((_, i) => i + 1);
  const query = getQuery(event);
  const page = Number.parseInt(query.page as string, 10);
  const res = numbers.splice((page - 1) * per, per);
  console.log(res);
  return res;
})
