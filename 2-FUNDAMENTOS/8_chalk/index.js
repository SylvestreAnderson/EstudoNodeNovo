const chalk = require('chalk')

const nota = 2

if(nota > 7){
    console.log(chalk.green.bold('Parabéns! Você está aprovando!'))
} else {
    console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'))
}