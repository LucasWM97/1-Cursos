let deposito = 0;
let saque = 0;
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [
    
    ],
    depositar: function (valor) {
        deposito +=valor;
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor, //aqui será o valor informado no argumento do método depositar
        })
        return `Deposito de R$${valor*0.01} realizado para o cliente:${this.nome} `
    },
    sacar: function (valor) {
        if (valor > this.saldo){
            return `Saldo insuficiente para o saque de: ${this.nome}`            
        }else{
        saque+= valor;
        this.saldo -= valor;
        this.historicos.push(
        {
            tipo: "Saque",
            valor: valor, //aqui será o valor informado no argumento do método sacar
        })
        return `Saque de R$${valor*0.01} realizado para o cliente: ${this.nome}`
    }
    },
    extrato: function () {
        return `Extrato de ${this.nome} - Saldo: R$${this.saldo*0.01}
        Histórico:
        Depósito de $${deposito*0.01}
        Saque de $${saque*0.01}`  
    },
} 

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.sacar(2000))
console.log(contaBancaria.extrato());