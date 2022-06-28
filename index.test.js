const  soma = require('./index.js')

describe('Soma teste', () => {
	it("2+2 should be 4", () => {
		expect(soma(2,2)).toBe(4);
	})
})
