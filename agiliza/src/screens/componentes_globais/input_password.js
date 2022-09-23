import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';



export default function InputPassword({placeholder, placeholderTextColor}){
    const [inputPass, setInputPass]=useState('');
    const [hidePass, setHidePass]= useState(true);

    return(
        <View>
            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.inputPass} 
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}  
                    value={inputPass}
                    onChangeText={(password)=> setInputPass(password)} 
                    secureTextEntry={hidePass}

                />
                <TouchableOpacity style={styles.icons} onPress={()=>setHidePass(!hidePass)}>
                    { hidePass ?
                        <Ionicons 
                            name='eye'
                            color='#6D6A75'
                            size={25}/>
                      :
                        <Ionicons 
                        name='eye-off'
                        color='#6D6A75'
                        size={25}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    icons:{
        width: '15%',
        height: 60,
        justifyContent: 'center',
        alignItems:'center',       
    },
    inputArea:{ 
        flexDirection: 'row',
        width: 300,
        height: 60,
        backgroundColor: '#1C1B1C',   
        borderColor: '#000000',            
        borderRadius: 3,
        alignItems:'center',
        padding: 10,
        borderWidth: 1,

    },
    inputPass:{
        color: '#FFF',
        width: '85%',
        fontSize:15,        
    },
})