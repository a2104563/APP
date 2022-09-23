import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import { CartContext } from "../../../../cartContext";


export default function  (){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
    function Totals() {
      let [total, setTotal] = useState(0);
      useEffect(() => {
        setTotal(getTotalPrice());
      });
      return (
         <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
            <Text style={styles.lineRight}>R$ {total.toFixed(2)}</Text>
         </View>
      );
    }
  
    function renderItem({item}) {      
      return (
        <View style={styles.cartLine}>
            <Text style={styles.lineLeft}>{item.qty} x {item.produto.nome}</Text>
            <Text style={styles.lineRight}>R$ {item.totalPrice.toFixed(2)}</Text>
        </View>
      );      
    }

    function header(){
      return(
        <View style={styles.lineHeader}>
          <Text style={styles.textHeader}>Confirme seu pedido e escolha o metodo de pagamento</Text>
        </View>
      )
    }
    
    return (
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.produto.id.toString()}
        ListFooterComponent={Totals}
        ListHeaderComponent={header}
      />
    );
}

const styles = StyleSheet.create({
    cartLine: { 
      flexDirection: 'row',
      marginBottom:8,
    },
    cartLineTotal: { 
      flexDirection: 'row',
      borderTopColor: '#dddddd',
      borderTopWidth: 1
    },
    lineTotal: {
      fontWeight: 'bold',    
    },
    lineLeft: {
      fontSize: 20, 
      lineHeight: 40, 
      color:'#FFF' 
    },
    lineRight: { 
      flex: 1,
      fontSize: 20, 
      fontWeight: 'bold',
      lineHeight: 40, 
      color:'#FFF', 
      textAlign:'right',
    },
    itemsListContainer: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginHorizontal: 8,
    },
    lineHeader:{
      flexDirection: 'row',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      paddingBottom:15,
      marginBottom:10,
      marginTop:10,
    },
    textHeader:{
      fontSize:25,
      fontWeight: 'bold',
      color:'#FFF',
    }
  });