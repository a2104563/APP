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
        backgroundColor:'#17A398',
        width: 250,
        height: 50,
        borderRadius: 3, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    texto:{
        fontSize:15,
        color: '#FFF',
        fontWeight: 'bold'
    }
})