import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Fontisto }from '@expo/vector-icons'
import { useState } from "react";

const Checkbox=({options=[]})=>{
    const [selected, setSelected]=useState([]);
    function toggle(id){//armazena o id do checkbox
        let index= selected.findIndex((i)=> i==id);
        let arraySelecteds = [...selected];

        if(index !== -1){
            arraySelecteds.splice(index,1);
        }else{
            arraySelecteds.push(id);
        }
        setSelected(arraySelecteds);

        console.log(arraySelecteds);

    }

    return(
        <>
            {options.map((op,index)=>(
                <View style={styles.optionContainer}>
                    <TouchableOpacity onPress={()=> toggle(op?.id)}>
                        {
                            selected.findIndex(i=> i===op.id) !== -1 ? (
                                <Fontisto name='checkbox-active' color='#17A398' size={20}/>) : <Fontisto name='checkbox-passive' color='#17A398' size={20}/>
                        }
                        
                    </TouchableOpacity>
                    <Text style={styles.opText}>{op?.text}</Text>
                </View>
                
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    optionContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:12,
        
    },
    opText:{
        marginLeft:12,
        color:'#555',
        fontSize:16,
        fontWeight:'600'
    }
})

export default Checkbox;