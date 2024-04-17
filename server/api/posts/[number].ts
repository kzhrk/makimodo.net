import { readFileSync } from 'fs'

export default defineEventHandler(async (event) => {
  const number = getRouterParam(event, 'number')
  const path = './posts/' + number + '.md'
  const file = readFileSync(path);
  return file;
})
