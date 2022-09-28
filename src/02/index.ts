interface CarroInterface {
  ligado: boolean;
  velocidade: number;
  [string: string]: any;
}

const ligar = (carro: CarroInterface) => {
  if (carro.ligado) {
    console.log("Este carro já está ligado.");
    return;
  }
  carro.ligado = true;
  console.log(`Carro ligado, Velocidade : ${carro.velocidade}`);
};

const desligar = (carro: CarroInterface) => {
  if (!carro.ligado) {
    console.log("Este carro já está desligado.");
    return;
  }
  if (carro.velocidade === 0) {
    carro.velocidade = 0;
    carro.ligado = false;
    console.log(`Carro desligado, Velocidade : ${carro.velocidade}`);
  } else {
    console.log("O carro está em movimento e não pode ser desligado");
    console.log(`Carro desligado, Velocidade : ${carro.velocidade}`);
  }
};

const acelerar = (carro: CarroInterface) => {
  if (!carro.ligado) {
    // console.log("Não é possível acelerar um carro desligado. ");
    ligar(carro);
  }
  carro.velocidade += 10;
  console.log(`Carro ligado, Velocidade : ${carro.velocidade}`);
};

const desacelerar = (carro: CarroInterface) => {
  if (!carro.ligado) {
    console.log("Não é possível desacelerar um carro desligado");
    return;
  }
  carro.velocidade -= 10;
  if (carro.velocidade === 0) {
    desligar(carro);
  }
  carro.ligado
    ? console.log(`Carro ligado, Velocidade : ${carro.velocidade}`)
    : console.log(`Carro desligado, Velocidade : ${carro.velocidade}`);
};

const carro: CarroInterface = {
  ligado: false,
  velocidade: 0,
};

carro.desligar = desligar(carro);
carro.ligar = ligar(carro);
carro.ligar = ligar(carro);
carro.acelerar = acelerar(carro);
carro.acelerar = acelerar(carro);
carro.desacelerar = desacelerar(carro);
carro.desligar = desligar(carro);
carro.acelerar = acelerar(carro);
carro.desacelerar = desacelerar(carro);
carro.desacelerar = desacelerar(carro);
