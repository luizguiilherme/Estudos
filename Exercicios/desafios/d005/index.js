function converter(){
  const metros = prompt('Digite uma distancia em metros (m)')
  const converte = Number(metros.value)
  const quilometros = metros / 1000
  const hectometros = metros / 100
  const decametros = metros / 10
  const decimetros = metros * 10
  const centimetros = metros * 100
  const milimetros = metros * 1000
  const res = document.getElementById('res')
  res.innerText = document.write(`
  ${quilometros} quilômetros (km/h)
  ${hectometros} hectômetros (H)
  ${decametros} decâmetros (Dam)
  ${decimetros} decímetros (dm)
  ${centimetros} centímetros (cm)
  ${milimetros} milímetros (mm)
  
  `)
}