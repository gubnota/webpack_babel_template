import '@babel/polyfill'
import module from './module'

const call = (...params) => {
	console.log(module.call(params))
}
