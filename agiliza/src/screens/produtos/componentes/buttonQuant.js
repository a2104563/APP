import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons'

import UseCounter from "./useCounter";
import { CartContext } from "../../../../cartContext";
import { getProduto } from "./produtos";


export default function ButtonQuant({id}){    
    
    const [produto, setProduto] = useState({});   
    const {addItemToCart} = useContext(CartContext);
    const {removeItemToCart} = useContext(CartContext);
    const [counter, incrementar, decrementar]= UseCounter();

    useEffect(() => {
        setProduto(getProduto(id));
    });

    function onAddToCart() {        
        addItemToCart(produto.id);      
        incrementar();  
    }

    function onRemoveToCart() {
        removeItemToCart(produto.id);
        decrementar();
    }

    return(
    <View style={style.container}>
        <Text style={style.textQuant}>Quantidade</Text> 

        <View style={style.containerButton}>
            <TouchableOpacity style={style.button} onPress={()=> onRemoveToCart() }>
                <AntDesign name="minuscircleo" size={20} color='#FFF'/>            
            </TouchableOpacity>

            <View style={style.quantidade}>
                <Text style={style.texto}>{counter}</Text>
            </View>

            <TouchableOpacity style={style.button} onPress={()=> onAddToCart() }>
                <AntDesign name="pluscircleo" size={20} color='#FFF'/>
            </TouchableOpacity>
            </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    containerButton:{
        flexDirection: 'row',
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textQuant:{
        fontSize: 20,
        textAlign: 'left',
        color: '#FFF',
    },
    button:{
        margin: 7,
    },
    quantidade:{
        width:30,
        height: 30,
        borderRadius: 5,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent:'center'
    },
    texto:{
        color:'#000',
        fontSize: 17,
    },

})