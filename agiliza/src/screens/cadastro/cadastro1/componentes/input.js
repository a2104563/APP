import { StyleSheet, Text, View, TextInput } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { useState } from 'react';




export default function Input(){
    const [inputName, setInputName]=useState('');
    const [inputBirthDate, setInputBirthDate]=useState('');    
    const [inputCity, setInputCity]=useState('');   
    const [inputState, setInputState]=useState('');  

    return(
        <>   
            
            <View>
                <Text style={styles.texto}>Nome Completo</Text>    
                <TextInput 
                    style={styles.input}  
                    placeholder='Nome'
                    placeholderTextColor='#AABCD0'
                    value={inputName}
                    onChangeText={(name)=> setInputName(name)}
                />
                
                <Text style={styles.texto}>Data de Nascimento</Text>
                <TextInputMask
                    style={styles.input}
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    placeholder='Data de nascimento'
                    placeholderTextColor='#AABCD0'
                    value={inputBirthDate}
                    onChangeText={(date)=> setInputBirthDate(date)}
                />

                <Text style={styles.texto}>Qual a sua cidade?</Text>
                <View style={styles.viewCity}>
                    <TextInput 
                        style={styles.inputState}  
                        placeholder='UF'
                        placeholderTextColor='#AABCD0'
                        value={inputState}
                        onChangeText={(state)=> setInputState(state)}
                    />
                    <TextInput 
                        style={styles.inputCity}  
                        placeholder='Cidade'
                        placeholderTextColor='#AABCD0'
                        value={inputCity}
                        onChangeText={(city)=> setInputCity(city)}
                    />    
                </View>
            </View>   
            
        </>
    )
}

const styles= StyleSheet.create({
    input:{
        backgroundColor: '#131E2F',   
        borderColor: '#AABCD0',        
        borderRadius: 3,           
        height: 60,
        width: 300,
        margin: 12,
        padding: 10, // padding do texto
        color: '#FFF',
        fontSize:15,
        borderWidth: 1,
    },
    texto:{
        color: '#01A5B1',
        paddingLeft: 15,
        marginTop: 15,
    },
    viewCity:{
        flexDirection: 'row'
    },
    inputCity:{
        backgroundColor: '#131E2F',   
        borderColor: '#AABCD0',        
        borderRadius: 3,           
        height: 60,
        width: 200,
        margin: 12,
        padding: 10, // padding do texto
        color: '#FFF',
        fontSize:15,
        borderWidth: 1,
    },
    inputState:{
        backgroundColor: '#131E2F',   
        borderColor: '#AABCD0',        
        borderRadius: 3,           
        height: 60,
        width: 75,
        margin: 12,
        padding: 10, // padding do texto
        color: '#FFF',
        fontSize:15,
        borderWidth: 1,
    },
})