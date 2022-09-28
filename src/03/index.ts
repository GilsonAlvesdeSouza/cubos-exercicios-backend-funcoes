import format from "../utils/format";

interface ProdutosInterface {
  id: number;
  nome: string;
  qtd: number;
  precoUnit: number;
}

interface CarrinhoInterface {
  nomeDoCliente: string;
  produtos: ProdutosInterface[];
  resumoCarrinho: Function;
  addProduto: Function;
  imprimirDetalhes: Function;
  calcularTotalAPagar: Function;
  calcularTotalDeItens: Function;
  calculaDesconto: Function;
}

const calcularTotalAPagar = (carrinho: CarrinhoInterface) => {
  let totalAPagar = 0;
  for (let item of carrinho.produtos) {
    totalAPagar += (item.precoUnit / 100) * item.qtd;
  }
  return totalAPagar;
};

const calcularTotalDeItens = (carrinho: CarrinhoInterface) => {
  let totalItem = 0;
  for (let item of carrinho.produtos) {
    totalItem += item.qtd;
  }
  return totalItem;
};

const resumoCarrinho = ({
  nomeDoCliente: cliente,
  produtos,
}: CarrinhoInterface) => {
  let totalAPagar = 0;
  let quantidadeItem = 0;

  for (let produto of produtos) {
    totalAPagar += (produto.precoUnit / 100) * produto.qtd;
    quantidadeItem += produto.qtd;
  }

  console.log(
    `Cliente: ${cliente}\nTotal de itens: ${carrinho.calcularTotalDeItens(
      carrinho
    )}\nTotal a Pagar ${format.currency(
      carrinho.calcularTotalAPagar(carrinho)
    )}`
  );
};

const addProdutoAoCarrinho = (
  carrinho: CarrinhoInterface,
  produto: ProdutosInterface
) => {
  const { produtos } = carrinho;
  for (let [index, value] of produtos.entries()) {
    if (value.id === produto.id) {
      carrinho.produtos[index].qtd += produto.qtd;
      return;
    }
  }
  carrinho.produtos.push(produto);
};

const imprimirDetalhes = ({ nomeDoCliente, produtos }: CarrinhoInterface) => {
  console.log(`\nCliente: ${nomeDoCliente}\n`);
  for (let item of produtos) {
    console.log(
      `item ${item.id} - ${item.nome} - ${item.qtd} und - ${format.currency(
        item.precoUnit / 100
      )}`
    );
  }

  console.log(
    `\nTotal de itens: ${carrinho.calcularTotalDeItens(carrinho)} itens`
  );
  console.log(
    `Total a pagar: ${format.currency(carrinho.calcularTotalAPagar(carrinho))}`
  );
};

const carrinho: CarrinhoInterface = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  resumoCarrinho,
  addProduto: addProdutoAoCarrinho,
  imprimirDetalhes,
  calcularTotalAPagar,
  calcularTotalDeItens,
  calculaDesconto: () => {
    const totalItens = calcularTotalDeItens(carrinho);
    const valorTotal = calcularTotalAPagar(carrinho);
    let valores = [];
    let valorAcimaQuatro = 0;

    if (totalItens > 4) {
      for (let item of carrinho.produtos) {
        valores.push(item.precoUnit);
      }
      let menorValor = Math.min(...valores) / 100;
      valorAcimaQuatro = menorValor;
    }

    const desconto10PorCento = totalItens * 0.9;

    valorAcimaQuatro > desconto10PorCento
      ? console.log(
          `O valor do desconto é: ${format.currency(valorAcimaQuatro)}`
        )
      : console.log(
          `O valor do desconto é: ${format.currency(desconto10PorCento)}`
        );
  },
};

const novaBermuda: ProdutosInterface = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis: ProdutosInterface = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(carrinho, novaBermuda);
carrinho.addProduto(carrinho, novoTenis);

carrinho.resumoCarrinho(carrinho);
carrinho.imprimirDetalhes(carrinho);

carrinho.calculaDesconto();
