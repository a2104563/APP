import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const ButtonText=({labelButton, msg1, msg2})=> {
    return(
        <TouchableOpacity  onPress={()=>Alert.alert(msg1,msg2)}>
             <Text style={styles.texto}>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default ButtonText

const styles = StyleSheet.create({
    texto:{
        fontSize:15,
        color: '#FFF',
        
    }
})