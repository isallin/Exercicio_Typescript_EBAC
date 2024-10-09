//Função de multiplicação
function multiplicacao(numero1: number, numero2:number):number{
    return numero1 * numero2;
}

const resultado: number = multiplicacao (3,4)

console.log (resultado)


//Função de saudação
function saudacao (nome: string): string {
    return 'Olá ' + nome
}

const olaPessoa:string = saudacao('joao')

console.log(olaPessoa)