//modulos externo
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos interno

const fs = require('fs')

operation()

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        menssge: 'O que você deseja fazer',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    }]).then((answer) => {
        const action = answer['action']
        
        switch(action){
            case "Criar Conta":
                createAccount()
                break;
            case "Depositar":
                deposit();
                break;
            /*case "Consultar Saldo":
                
                break;
            case "Sacar":
                
                break;*/
            case "Sair":
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
                process.exit()
                break;
            default:
                console.log("Nem uma opção escolida!")    

        }

    }).catch(err => console.log(err))
}

//create account

function createAccount(){
    console.log(chalk.bgGreen.black('Parabêns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount();
}

function buildAccount(){

    inquirer.prompt([
        {
            name: 'accountName',
            menssge: 'Digite um nome para sua conta:'
        }
    ]).then((answer) => {const accountName = answer['accountName']

    console.log(accountName)

    if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
    }

    if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
        )
        buildAccount()
        return
    }

    fs.writeFileSync(`accounts/${accountName}.json`,
    '{"balance": 0}',
    function (err){
        console.log(err)
    },
   )

   console.log(chalk.green('Parabéns, a sua conta foi criada!'))
   operation()
  }).catch((err) => console.log(err))
}

//add an amount to user account
function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        },
    ])
    .then((answer) => {
        const accountName = answer['accountName']

        // verify if account exists
        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja depositar'
            },
        ]).then((answer) =>{
            const amount = answer['amount']

            // add an amount
            addAmount(accountName, amount)
            operation()

        })
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}
     
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }

    return true
} 

function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}