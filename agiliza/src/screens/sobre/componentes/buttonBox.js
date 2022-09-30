import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';


const ButtonBox= ({labelButton, Screen})=> {
    const navigation= useNavigation();

    function goScreen(){        
        navigation.navigate(Screen);
    }
    return(
        <TouchableOpacity style={style.button} onPress={goScreen} >
            <Text style={style.texto}>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBox

const style= StyleSheet.create({
    button:{
        width: '100%',
        height: 50,
        backgroundColor:'#17A398',
        borderRadius: 3, 
        alignItems:'baseline',
        justifyContent:'center',
        marginBottom: 8,
        padding: 12,
    },
    texto:{
        fontSize:18,
        color: '#FFF',
        
    }
})