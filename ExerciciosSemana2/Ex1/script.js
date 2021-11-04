var nome = prompt("Digite seu nome:")
var idade = window.prompt("Digite sua idade (somente o número):")
var diaDaSemana = window.prompt("Digite seu dia da semana favorito (inclua -feira, caso não seja sábado ou domingo):")
var esportePredileto = window.prompt("Digite seu esporte favorito:")
var alguemImportante = window.prompt("Digite o nome de alguém que você admira:")
var alguemAdmiravel = window.prompt("Digite o nome de alguém admirável:")

var msg = `Hoje, ${diaDaSemana}, é um dia histórico. Todos os fãs de 
${esportePredileto} estão maravilhados com a proeza realizada pelo(a) 
atleta ${nome}. ${alguemImportante} não conteve as lágrimas ao comentar 
sobre em uma entrevista e até o(a) ${alguemAdmiravel} twittou 
“é muito bom ver alguém com ${idade} anos demonstrando tanta habilidade”.`

window.alert(msg)