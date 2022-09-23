import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ButtonBox= ({labelButton, msg1, msg2})=> {
    return(
        <TouchableOpacity  onPress={()=>Alert.alert(msg1,msg2)}>
            <Ionicons name='arrow-forward-circle' color='#AABCD0' size={70}  />
        </TouchableOpacity>
    )
}

export default ButtonBox

