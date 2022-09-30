import { StyleSheet, Text, View } from "react-native";
import RequestLogin from "../RequestLogin";
import { useState } from 'react';


export default function MeusPedidos(){  
    let auth=true;

    {{
        if(!auth){
            return(
                <View style={style.container}>       
                        <RequestLogin 
                        Title={'Meus pedidos'}
                        Texto={'Você precisa estar logado para visualizar seus pedidos.'} />               
                </View>
                )
        }else{
            return(
                <View style={style.container}>
                    <Text>Voce esta autenticado!</Text>
                </View>
            )
        }
    }}
    
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#37323E',
        padding: 15,
    }
})