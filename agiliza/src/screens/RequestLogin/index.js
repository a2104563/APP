import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {EvilIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function RequestLogin({Title, Texto}){
    const navigation= useNavigation();

    function goLogin(){        
        navigation.navigate('Login');
    }
    return(
    <View style={{flex:1}}>

        <View style={style.headerContainer}>
            <Text style={style.textHeader}>{Title}</Text>
        </View>

            <View style={style.bodyContainer}>   
            <EvilIcons name='user' size={200} color={'#17A398'}/>

            <Text style={style.texto}>{Texto}</Text>      

            <TouchableOpacity style={style.button} onPress={goLogin}>
                <Text style={style.textButton}>Faça login ou cadastre-se</Text>
            </TouchableOpacity> 
        </View> 
    </View>
    )
}

const style= StyleSheet.create({
    texto:{
        fontSize: 20,
        color:'#FFF',
        marginTop: 20,
        marginBottom: 20,
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
    },
    textHeader:{
        fontSize: 30,
        color: '#17A398',
    },
    headerContainer:{     
        marginLeft: 15,
        marginBottom: 15,
    },
    bodyContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
   
})