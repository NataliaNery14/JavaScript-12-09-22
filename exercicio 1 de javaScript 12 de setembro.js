const prompt = require  ('prompt-sync')

const anos = prompt('Quantos anos de vida você tem')();
const anos1 = Number(anos)
const meses = prompt('Quantos meses de vida você tem')();
const meses1 = Number(meses)
const dias = prompt('Quantos dias de vida você tem:')();
const dias1 = Number(dias)

const vida = anos1 * 365 + meses1 * 30 + dias1

consele.log(`Você viveu: ${vida}`);


