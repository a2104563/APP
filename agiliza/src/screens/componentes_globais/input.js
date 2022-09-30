import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from 'react';

export default function Input({placeholder, placeholderTextColor}){
    const [inputEmail, setInputEmail]=useState('');

    return(
        <View>
            <TextInput 
                style={styles.input}  
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={inputEmail}
                onChangeText={(email)=> setInputEmail(email)}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        backgroundColor: '#1C1B1C',   
        borderColor: '#000000',        
        borderRadius: 3,           
        height: 60,
        width: 300,
        padding: 10, // padding do texto
        color: '#FFF',
        fontSize:15,
        borderWidth: 1,        
    },
})

