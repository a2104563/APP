import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native"

import ButtonQuant from "./buttonQuant"


export default function Item({item: {id,nome, imagem, preco, descricao}}){
    return(        
  
        <View style={style.item}>
            
            <View style={style.cardProduto}>
                <Image source={imagem} style={style.imagem}/>    

                <View style={style.containerName}>
                    <Text style={style.nome}>{nome}</Text>
                </View>

                <View style={style.containerPreco}>
                    <Text style={style.preco}>{preco.toFixed(2)}</Text>   
                </View>

                <View style={style.containerDesc}>
                    <Text style={style.descricao}>{descricao}</Text>  
                </View>
            </View>

            <View style={style.subBox}>
                <ButtonQuant id={id}/>             
            </View>
                    
        </View>
    )

}

const style = StyleSheet.create({
    item:{
        flexDirection:'column',
        paddingVertical: 10,
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop: 25,
    },
    nome:{
        fontSize: 30,        
        marginLeft: 11,
        color: '#FFF',
        textAlign: "center"
    },
    preco:{
        fontSize: 30,        
        marginLeft: 11,
        color: '#FFF',
        textAlign: "center"
    },
    descricao:{
        fontSize: 15,        
        marginLeft: 11,
        color: '#FFF',
        textAlign: "center"
    },
    imagem:{
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 5,
    },
    subBox:{
        width: 250,
        height: 50,
        paddingLeft: 10,
        backgroundColor: '#17A398',        
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf:"center",

    },
    cardProduto:{
        flexDirection: 'row',
        backgroundColor: '#6D6A75',
        width: 300,
        height: 100,     
        borderRadius: 10,
        borderWidth:3,
        borderColor: '#FFF', 
    },
    containerName:{
        position: 'absolute',
        marginLeft: 90,     
    },
    containerDesc:{
        position: 'absolute',
        marginLeft: 90,
        marginTop: 35,
    },
    containerPreco:{
        position: 'absolute',
        marginLeft: 170,
        marginTop: 55,       
    },

    
})