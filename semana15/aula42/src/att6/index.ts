enum nomesIdades {
  preHistorica = 'Idade Pré-histórica',
  idadeAntiga = 'Idade Antiga',
  idadeMedia = 'Idade Média',
  idadeModerna = 'Idade Moderna',
  idadeContemp = 'Idade Contemporânea',
}
function returnHistoricAge(ano: number, periodo?: string): string {
  periodo === undefined && (periodo = 'DC')

  if (ano > 4000 && periodo === 'AC') {
    return nomesIdades.preHistorica
  } else if (
    (ano <= 4000 && periodo === 'AC') ||
    (ano < 476 && periodo === 'DC')
  ) {
    return nomesIdades.idadeAntiga
  } else if (ano >= 476 && ano < 1453 && periodo === 'DC') {
    return nomesIdades.idadeMedia
  } else if (ano >= 1453 && ano < 1789 && periodo === 'DC') {
    return nomesIdades.idadeModerna
  } else if (ano >= 1789 && periodo === 'DC'){
    return nomesIdades.idadeContemp
  } else {
    return `"${periodo}" não é uma classificação aceita. Tente AC para antes de Cristo, ou DC para depois de Cristo.`
  }
}

console.log(returnHistoricAge(1453, 's'))
