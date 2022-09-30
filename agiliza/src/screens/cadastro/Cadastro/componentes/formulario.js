import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { useState } from 'react';

import InputEmail from "../../../componentes_globais/input";
import InputPassword from "../../../componentes_globais/input_password";


export default function Input(){
    const [inputName, setInputName]=useState('');
    const [inputBirthDate, setInputBirthDate]=useState('');    


    return(
        <View style={styles.container}>   
            
            <View style={{flexDirection:'row'}}>
                <TextInput 
                    style={styles.inputName}
                    placeholder='Nome'
                    placeholderTextColor='#707070'
                    value={inputName}
                    onChangeText={(name)=> setInputName(name)}
                />
                <TextInput 
                    style={[styles.inputName,  {marginLeft: 10}]}
                    placeholder='Sobrenome'
                    placeholderTextColor='#707070'
                    
                />
            </View>
            
            <TextInputMask
                style={styles.input}
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                placeholder='Data de nascimento'
                placeholderTextColor='#707070'
                value={inputBirthDate}
                onChangeText={(date)=> setInputBirthDate(date)}
            />

            <View style={styles.containerEmail}>
                <InputEmail 
                    placeholder='Email' 
                    placeholderTextColor='#707070'
                />
            </View>

            <View style={styles.containerPass}>
                <InputPassword 
                
                    placeholder='Senha' 
                    placeholderTextColor='#707070'
                />
            </View>
            
            <View style={styles.containerPass}>
                <InputPassword 
                    placeholder='Confirme a senha' 
                    placeholderTextColor='#707070'
                />
            </View>             
              
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        paddingTop:30,
    },
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
        marginBottom:20,  
    },
    inputName:{
        backgroundColor: '#1C1B1C',   
        borderColor: '#000000',        
        borderRadius: 3,           
        height: 60,
        width: 145.,
        padding: 10,         
        color: '#FFF',
        fontSize:15,
        borderWidth: 1,      
        marginBottom:20,  
    },
    containerPass:{
        paddingBottom:20,
    },
    containerEmail:{
        paddingBottom:20,
    }

    
})