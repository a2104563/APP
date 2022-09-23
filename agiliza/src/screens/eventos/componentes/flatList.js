import { View, FlatList,StyleSheet } from "react-native";
import Item from "./item";

import Cachacadores from './imagensEventos/Cachacadores.png'
import OverXII from './imagensEventos/OverXII.png'
import Tardezinha from './imagensEventos/tardezinha.png'


const eventos=[
    {
        nome: 'OverXII',
        imagem: OverXII,
        date: '15/10'
    },
    {
        nome: 'Cachaçadores',
        imagem: Cachacadores,
        date: '17/01'
    },
    {
        nome: 'Tardezinha da Panterada',
        imagem: Tardezinha,
        date: '10/11'
    },
]

export default function  (){
    return(
        <View>
            <FlatList
                data={eventos}
                keyExtractor={item=>item.nome}
                renderItem={Item}
            />
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex: 1,
    }
})  

