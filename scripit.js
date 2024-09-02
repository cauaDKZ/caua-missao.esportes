const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha importante a prática de esportes para a saúde física e mental?",
        alternativas: [
            {
                texto: "Sim! Praticar esportes é fundamental, contribuindo para uma melhor qualidade de vida",
                afirmacao: "Além de melhorar a aptidão física, o exercício físico regular também pode melhorar a capacidade cognitiva e reduzir os níveis de ansiedade e estresse em geral."
            },
            {
                texto: "Não! Pode ser algo perigoso dependendo a pratica esportiva",
                afirmacao: "As desvantagens de praticar esportes incluem risco de lesões, sobrecarga física e mental, compromisso de tempo, custos financeiros e pressão para desempenho.",
            }
        ]
    },
    {
        enunciado: "A escola poderia incentivar a prática esportiva para melhorar a saúde física e mental dos alunos?",
        alternativas: [
            {
                texto: "Sim! Oferecendo uma variedade de atividades, integrando esportes no currículo, promovendo educação sobre saúde, encorajando o trabalho em equipe e oferecendo orientação especializada",
                afirmacao: "Incentiva os atletas a obterem melhores desempenhos nas competições."
            },
            {
                texto: "Não, pois pode gerar inúmeros gastos que poderiam ser utilizados em outras áreas.",
                afirmacao: "A desvantagem em incentivar a prática esportiva na escola podem incluir custos adicionais e desmotivar estudantes que não gostam de esportes."
            }
        ]
    }
];

let pergAtual = 0;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPergunta(){
    if  (pergAtual >= perguntas.length){
        mostraResultado() ;
        return ;
    };
    perguntaAtual = perguntas[pergAtual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
};

mostraPergunta () ;

    function mostraAlternativas(){
        for (const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button") ;
            botaoAlternativas.textContent = alternativa.texto ;
            botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa)) ;
            caixaAlternativas.appendChild(botaoAlternativas) ;
    }
} ;

function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal += afirmacao + " " ;
    pergAtual++ ;
    mostraPergunta() ;
} ;

function mostraResultado (){
    caixaPerguntas.textContent = "Por meio de suas escolhas, suas características são:" ;
    textoResultado.textContent = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}