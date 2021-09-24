// unused will be tree-shaken
import { a, unused } from './a.js'

console.log('index.js')

export function main() {
    a()
    console.log('main')
}
