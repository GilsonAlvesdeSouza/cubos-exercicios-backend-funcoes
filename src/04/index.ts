import format from "../utils/format";

interface HistoricoInterface {
  tipo: "Deposito" | "Saque" | "Emitir extrato";
  valor: number;
}

interface ContaInterface {
  nome: string;
  saldo: number;
  historico: HistoricoInterface[];
  depositar: Function;
  sacar: Function;
  extrato: Function;
}

const contaBancaria: ContaInterface = {
  nome: "Maria",
  saldo: 0,
  historico: [],
  depositar: function (valor: number) {
    this.saldo += valor;
    this.historico.push({ tipo: "Deposito", valor });
    return `Deposito de ${format.currency(valor)} realizado para o cliente: ${
      this.nome
    }.`;
  },
  sacar: function (valor: number): string {
    if (valor > this.saldo) {
      return `Saldo insuficiente para o saque de: ${this.nome}`;
    }
    this.saldo -= valor;
    this.historico.push({ tipo: "Saque", valor: valor });
    return `Saque de ${format.currency(valor)} realizado para o cliente: ${
      this.nome
    }.`;
  },
  extrato: function (): string {
    let resultado = `\nExtrato de Maria - Saldo: ${format.currency(
      this.saldo
    )}`;
    resultado += "\nHistórico:";
    for (let item of this.historico) {
      resultado += `\n${item.tipo} de ${format.currency(item.valor)}`;
    }
    return resultado;
  },
};

console.log(contaBancaria.depositar(100));
console.log(contaBancaria.sacar(500));
console.log(contaBancaria.sacar(50));
console.log(contaBancaria.extrato());
