export default 'Hello, Rollup'
export const somethingElse = 'Would you like something else?'

export class MyFoo {
  state = {
    bar: true,
    baz: false,
    bro: 'Bro'
  }
}

export function* myGenerator () {
  const a = yield 1
  console.log('THe first value is \t', a)
  const b = yield 2
  console.log('The second value is \t', b)
  return a + b
}
