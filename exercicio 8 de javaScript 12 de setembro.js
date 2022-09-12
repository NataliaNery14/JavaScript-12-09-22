const prompt = require('prompt-sync')()


const custofabText = prompt('Digite o custo da fábrica de um carro')

const custofab = Number(custofabText)

const imposto = custofab * 0.45

const dist = custofab * 0.28

const custototal = custofab + imposto + dist

console.log(custototal)
