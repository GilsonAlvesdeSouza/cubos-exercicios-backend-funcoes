interface QuestoesInterface {
  resposta: string;
  correta: string;
}

interface ProvaInterface {
  aluno: string;
  materia: string;
  valor: number;
  questoes: QuestoesInterface[];
}

const prova: ProvaInterface = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

const corrigirProva = ({ aluno, questoes }: ProvaInterface): string => {
  let acertos = 0;
  for (let questao of questoes) {
    if (questao.resposta === questao.correta) {
      acertos++;
    }
  }

  return `O aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${
    acertos * 2
  }`;
};

console.log(corrigirProva(prova));
