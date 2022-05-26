/* passo 1: criação das Variaveis*/
var valor; /*valor que sera digitado, ou seja, o numero que sera digitado*/
var resultado; /* o resultado do calculo que foi digitado*/
/* passo 2: criar a função botao, para os botoes funcionarem quando forem clicados*/
/*function é a tag para função*/  /*botao é a funçao do html*/
function botao(Number){  
    valor = document.calc.visor.value += Number; /*calc é o nome do  formulario no html*/
                                                  /* visor é o input text no formulario html*/
                                                  /*value é o valor do html value="numeros"*/
                                                  /* o += é a contatenação. entao por exemplo, 1+=2 (x+=y) é o mesmo que 1= 1+2 (x=x+y*/
                                                  /* o number é o numero que vamos receber quando o usuario digitar*/
}
/*passo 3: criar a função reseta, ou seja, apagar. para quando clicar no botao ele apagar o que o usuario digitou*/
function reseta(){
    document.calc.visor.value=  '  ';  /*nao possui valor no ="" porque essa função é para apagar*/

}

/*passso 4: criar uma função para fazer os calculos dos valores digitados*/
function calcula(){
    resultado=eval( valor); /*eval é para avaliar a expressão e dar o resultado. por exemplo se a expressão for 1+2 o eval irá avaliar e dar o resultado de 3*/
    document.calc.visor.value= resultado.toLocaleString('pt-BR');
                        /* toLocalString('pt-BR) serve para colocar um ponto quando o resultado for mil. entao 1000 ficará 1.000*/
   
} 
