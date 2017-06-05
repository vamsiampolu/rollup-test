import foo, {MyFoo, myGenerator} from './foo.js'
import {version, dependencies as deps} from '../package.json'
import answer from 'the-answer'
import _ from 'lodash'

export default function () {
  console.log(foo)
  console.log('VERSION\t:', version)
  console.log('The answer to life, universe and everything is ', answer)
  const keys = Object.keys(deps)
  _.map(keys, key => `${key} is a dependency of your project`)
  const fool = MyFoo()
  console.log(JSON.stringify(fool.state, null, 2))
  const it = myGenerator()
  const a1 = it.next()
  console.log('A value must be provided for step', a1.value)
  const b1 = it.next(25)
  console.log('A value must be provided for step', b1.value)
  const res = it.next()
  console.log('THe result is', res.value)
}
