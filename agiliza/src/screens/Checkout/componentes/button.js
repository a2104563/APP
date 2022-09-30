import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export default function Button({text, icon}){
    return(<>
        <TouchableOpacity>
            <View style={style.container}>
                <Text style={style.texto}>{text}</Text>
                <AntDesign name={icon} size={35}/>
            </View>
        </TouchableOpacity>
    </>)
}

const style= StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#17A398',
        width: 200,
        height: 60,        
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    texto:{
        fontSize: 20,
    }
})