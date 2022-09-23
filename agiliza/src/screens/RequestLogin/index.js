import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {EvilIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function RequestLogin({Texto}){
    const navigation= useNavigation();

    function goLogin(){        
        navigation.navigate('Login');
    }
    return(
    <View style={style.container}>
        <EvilIcons name='user' size={200} color={'#17A398'}/>
        <Text style={style.texto}>{Texto}</Text>      

        <TouchableOpacity style={style.button} onPress={goLogin}>
            <Text style={style.textButton}>Faça login ou cadastre-se</Text>
        </TouchableOpacity> 
    </View>
    )
}

const style= StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    texto:{
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        color:'#FFF',
        lineHeight:30,
        textAlign:'center'
    },
    textButton:{
        fontSize:15,
        color: '#FFF',
        fontWeight: 'bold'
    },
    button:{
        width: 200,
        height: 60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#17A398",
        borderRadius: 10,
    }
   
})