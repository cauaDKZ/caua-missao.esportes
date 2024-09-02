const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pensando em melhorar o desempenho dos atletas olímpicos para as Olimpíadas de 2028 (Los Angeles), o governo brasileiro deveria investir mais no esporte?",
        alternativas: [
            {
                texto: "Sim, os atletas precisam de incentivos maiores para melhorar seu desempenho",
                afirmacao: "O incentivo para atletas motiva pessoas que desejam ingressar nesta carreira, principalmente as crianças e adolescentes."
            },
            {
                texto: "Não, o governo brasileiro deveria utilizar o dinheiro público em outras áreas",
                afirmacao: "A situação do Brasil mostra que a carreira de atleta é somente para poucos. Assim, o governo deveria investir o dinheiro público em outras áreas (saúde, educação, saneamento básico.",
            }
        ]
    },
    {
        enunciado: "Como o governo deveria distribuir o dinheiro investido no esporte?",
        alternativas: [
            {
                texto: "Aumentando o valor do bolsa-atleta, construção de novas estruturas esportivas em localidades sem nenhuma estrutura, incentivo e apoio financeiro para novos atletas e futuros treinadores",
                afirmacao: "Incentiva os atletas a obterem melhores desempenhos nas competições."
            },
            {
                texto: "Ampliando os centros de treinamento e nos treinadores.",
                afirmacao: "É necessário investir na melhoria da infraestrutura existente e na capacitação para treinadores."
            }
        ]
    },
    {
        enunciado: "Como a educação poderia incentivar o esporte para crianças e adolescentes dentro e fora da escola?",
        alternativas: [
            {
                texto: "Aulas de Educação Física permitem a descoberta de novos atletas",
                afirmacao: "Os profissionais de Educação Física deveriam incentivar a prática esportiva de diversas modalidades, ampliação das aulas de Educação Física, contratação de treinadores para a prática esportiva em período contra-turno."
            },
            {
                texto: "A educação deveria estar vinculada com o mercado de trabalho.",
                afirmacao: "Visto que a carreira esportiva são para poucos, a educação deveria preparar para o mercado de trabalho."
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