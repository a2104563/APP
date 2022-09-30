import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ButtonBox= ({Screen})=> {
    const navigation= useNavigation();

    function goScreen(){        
        navigation.navigate(Screen);
    }
    return(
        <TouchableOpacity  onPress={goScreen}>
            <Ionicons name='arrow-forward-circle' color='#17A398' size={70}  />
        </TouchableOpacity>
    )
}

export default ButtonBox

