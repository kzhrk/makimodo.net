import { readFileSync } from 'fs'

export default defineEventHandler(async (event) => {
  const number = getRouterParam(event, 'number')
  console.log(number);
  const path = './posts/' + number + '.md'
  const file = readFileSync(path);
  console.log(file);
  return file;
})
