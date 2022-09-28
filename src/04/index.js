"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = __importDefault(require("../utils/format"));
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historico: [],
    depositar: (valor) => {
        contaBancaria.saldo += valor;
        contaBancaria.historico.push({ tipo: "Deposito", valor });
        return `Deposito de ${format_1.default.currency(valor)} realizado para o cliente: ${contaBancaria.nome}.`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }
        this.saldo -= valor;
        this.historico.push({ tipo: "Saque", valor: valor });
        return `Saque de ${format_1.default.currency(valor)} realizado para o cliente: ${this.nome}.`;
    },
    extrato: function () {
        console.log(`\nExtrato de Maria - Saldo: ${format_1.default.currency(this.saldo)}`);
        console.log("Histórico:");
        for (let item of this.historico) {
            console.log(`${item.tipo} de ${format_1.default.currency(item.valor)}`);
        }
    },
};
console.log(contaBancaria.depositar(100));
console.log(contaBancaria.sacar(50));
console.log(contaBancaria.sacar(50));
console.log(contaBancaria.extrato());
//# sourceMappingURL=index.js.map