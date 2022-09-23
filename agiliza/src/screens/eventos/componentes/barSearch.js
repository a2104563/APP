import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet } from "react-native";
import { Entypo, Feather, MaterialIcons, Octicons, } from '@expo/vector-icons'


export default function BarSearch(){
    const [search, setSearch] = useState('');
    return(
    <View style={style.viewSearch}>
        <TextInput 
            style={style.input}
            placeholder="Pesquisar"
            autoCorrect={false}
            value={search}   
            onChangeText={(value)=> setSearch(value)}
        />

        <Feather            
            name="search"
            size={25}
            color='#17A398'
            onPress={()=>{} }
        />
    </View>
    )
}

const style = StyleSheet.create({
    viewSearch:{
        flexDirection: 'row',       
        marginTop: 40,
        width: 300,
        height: 45,
        borderRadius: 25,
        borderColor: '#17A398',
        borderWidth:1,
        backgroundColor: '#6D6A75', 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',    
        paddingRight: 10  

    },
    input:{
        flex: 1,
        backgroundColor: '#6D6A75',        
        fontSize: 20,
        paddingHorizontal: 20,
        borderRadius: 25,               
    },


})