"use strict";
const prova = {
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
const corrigirProva = ({ aluno, questoes }) => {
    let acertos = 0;
    for (let questao of questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    return `O aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${acertos * 2}`;
};
console.log(corrigirProva(prova));
//# sourceMappingURL=index.js.map