export default (...params) => {
	return {
		call: (params) => {
			return `Hello, module ${params}`
		},
	}
}
