import Brahma_lata from './imagensProdutos/Brahma_lata.png'
import Itaipava_lata from './imagensProdutos/Itaipava_lata.png'
import Corote from './imagensProdutos/Corote.png'
import Espetinho from './imagensProdutos/Espetinho.png'
import Pastel from './imagensProdutos/Pastel.png'

const PRODUTOS= [
    {   
        id: 100,
        nome: 'Brahma',
        imagem: Brahma_lata,
        preco: 5.00,
        descricao:'Lata 350ml'
    },
    {
        id: 101,
        nome: 'Itaipava',
        imagem: Itaipava_lata,
        preco: 4.00,
        descricao:'Lata 300ml'
    },
    {   
        id: 102,
        nome: 'Corote',
        imagem: Corote,
        preco: 7.00,
        descricao:'450ml'
    },
    {   
        id: 103,
        nome: 'Espetinho',
        imagem: Espetinho,
        preco: 6.00,
        descricao:''
    },
    {   
        id: 104,
        nome: 'Pastel',
        imagem: Pastel,
        preco: 6.50,
        descricao:'Frango com Catupiry'
    },
]

export function getProdutos(){
    return PRODUTOS;
}

export function getProduto(id){
    return PRODUTOS.find((produto)=> (produto.id== id));
}