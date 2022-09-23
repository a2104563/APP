import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState, useContext, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';


import { CartContext } from "../../../../cartContext";

export default function BarShopCar(){
    const {getTotalPrice} = useContext(CartContext);  
    
    const [total, setTotal] = useState(0);
    useEffect(() => {
    setTotal(getTotalPrice());
    });

    const navigation= useNavigation();

    function goCheckout(){        
        navigation.navigate('Checkout');
    }

    return(
    <View style={style.container}>
        <TouchableOpacity style={style.button} >            
            <MaterialCommunityIcons name="cart-remove" size={30}/>            
        </TouchableOpacity>

        <Text style={style.texto}>R$ {total.toFixed(2)}</Text>

        <TouchableOpacity style={style.button} onPress={goCheckout}>            
            <MaterialCommunityIcons name="cart-check" size={30}/>            
        </TouchableOpacity>
                
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: '100%',
        height: '13%',
        backgroundColor: '#6D6A75',     
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 40,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    button:{
        backgroundColor: '#17A398',
        width: 50,
        height: 40,
        borderRadius: 70,             
        alignItems: 'center',
        justifyContent: 'center'        
    },
    texto:{
        fontSize:30,
    }
})