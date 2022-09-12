const seg = prompt('duração de segundos')
const seg2 = Number (seg)

const horas = seg2 / 3600
const minutos = (seg2 % 3600)/60
const segundos = (seg % 3600)%60

document.write (Math.floor(horas) + ' horas')
document.write (Math.floor(minutos) + 'minutos' ) 
document.write (Math.floor(segundos) + 'segundos')
