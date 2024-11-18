import { get } from './index.ts'

export const text = () => {
  return get('/todos/1')
}
