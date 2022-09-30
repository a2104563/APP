import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';


import {eventos} from './testeBDEventos'


export default function ListaEventos (){
    const navigation= useNavigation();
    function goProdutos(){        
        navigation.navigate('InfoEventos');
    }
    return(
        <View>
            <FlatList
                data={eventos}
                keyExtractor={item=>item.nome}
                renderItem={({item: {nome, imagem, date}})=> 
                    <View style={style.item}>
                        <TouchableOpacity onPress={goProdutos}>
                            <Image source={imagem} style={style.imagem}/>            
                            <View style={style.subBox}>
                                <Text style={style.nome}>{nome}</Text>
                                <Text style={style.date}>Data: {date}</Text>
                            </View>
                        </TouchableOpacity>            
                </View>
            }
            />
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex: 1,
    },
    item:{
        flexDirection:'column',
        paddingVertical: 10,
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop: 25,
        
    },
    nome:{
        fontSize: 20,        
        marginLeft: 11,
        color: '#FFF',
        textAlign: "center"
    },
    date:{
        fontSize: 15,        
        marginLeft: 11,
        color: '#FFF',
        textAlign: "center"
    },
    imagem:{
        width: 300,
        height: 100,
        borderRadius: 10,
        borderWidth:3,
        borderColor: '#FFF',
    },
    subBox:{
        width: 250,
        height: 50,
        backgroundColor: '#17A398',        
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf:"center"
    },
})  

