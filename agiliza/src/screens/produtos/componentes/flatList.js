import { useEffect, useState } from "react";
import { View, FlatList,StyleSheet } from "react-native";
import Item from "./item";

import { getProdutos } from "./produtos";


export default function  (){
    const [produtos, setProdutos]= useState([]);
    useEffect(()=>{
        setProdutos(getProdutos());
    })
    return(
        <View style={style.container}>
            <FlatList
                data={produtos}
                keyExtractor={item=>item.id.toString()}
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

