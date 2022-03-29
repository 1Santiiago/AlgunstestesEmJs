// Trabalhando com datas
const datas1 = new Date();
const datas2 = new Date('March 28 2022 07:18')
// console.log(datas2.toDateString())

// projeto montador de endereço

//criar onjeto endereço com as informaçoes, rua, cidade, cp

let caixaPostal = {
    rua:'a',
    cidade:'c',
    cep:'d'
}

function falarEndereco(caixaPostal){
    for(let chave in caixaPostal)
        console.log(chave, caixaPostal[chave])
}
// let rua1 = falarEndereco(caixaPostal) 


exercicio 
iqualdade de objetos

function Enderecos(rua){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const casa1 = new Enderecos('a', 'b', 2)
const casa2 = new Enderecos('a', 'b', 2)

function saoIguais(casa1, casa2){
    //comparar se as propriedades sao iguas
    return casa1.rua === casa2.rua && casa1.cidade === casa2.cidade && casa1.cep === casa2.cep
}
console.log(casa1)

function temEnderecoMemoriaIguais(casa1, casa2){
    //comparando se a referencia do objeto aponta para o mesmo local de memoria
        return casa1 === casa2
}

console.log(temEnderecoMemoriaIguais(casa1, casa2))

//objeto blog

let postagem = {
    titulo:'Colocando a Casa Em Ordem ',
    mensagem:'A mao de Deus em sua casa',
    autor:'Eleusa Matos',
    Vendas:'16.k',
    comentarios:[
        {
            author:'Santiago',
            Mensagem:'Gracas a este livro, entendi o meu papel como protetor do lar'
        }

    ],
    aoVivo:true

}

// console.log(postagem)


//funcao factory


function construirPostagem(titulo, mensagem, autor, vendas, comentarios, aoVivo){
    return
    titulo;
    mensagem; 
    autor;
    vendas;
    comentarios[{autor, mensagem}];
    aoVivo;

}

const Livro1 = construirPostagem(
    'Negra, Porbre',
    'Os caminhos nao sao faceis ao magisterio',
    'Eleusa Matos',
    '15 mil exemplares',
    [{autor:'Santiago', mensagem:'Tudo paz'}],
    true
)

// console.log(Livro1)

//funcao construtoras
function Postar(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor;
    this.visualizacoes = 0,
    this.comentarios = [],
    this.EstaaoVivo = false
}

let novaPostagem = new Postar('Colocando a casa em Ordem','Deus tem um proposito pra voce', 'Eleusa')
novaPostagem.comentarios=[{autor:'San', mensagem:'Nossa, como mudou minha vida'},{autor:'Keyla', mensagem:'isto me trouxe paz'}]
// console.log(novaPostagem)

//exercicios faixa de preço
    //primeira Opção
let faixaDePrecos = [
        {
            tooltip:'Até r$ 700,00',
            minimo :0,
            maximo:700,
        },

        {
            tooltip:'R$ 700 a R$1000',
            minimo:700,
            maximo:1000,
        },

        {
            tooltip:'R$ 1000 a R$ 2000',
            minimo:1000,
            maximo:2000,
        }
]

//segunda Opção, usando factory function

function criaFaixaPreco(tooltip, min, max){
    return{
        tooltip,
        min,
        max
    }
}

let faixa2 = [
    criaFaixaPreco('Até r$ 1500', 1500, 2500),
    criaFaixaPreco('R5 5500 a R$ 20000', 5000, 20000 )
]

// terceira opção funcao construtora

function FaixaPreco(tooltip, min, max){
    this.tooltip = tooltip,
    this.min =min,
    this.max= max
  
}

let faixa3 = [
    new FaixaPreco('Mensagem', 'Preco minimo', 'Preco maximo')
]

console.log(faixa3)
