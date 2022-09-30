import React, {createContext, useState} from 'react';

import { getProduto } from './src/screens/produtos/componentes/produtos';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(id) {
    const produto = getProduto(id);
    
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              produto,
              totalPrice: produto.preco 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id && item.qty<10) {
              item.qty++;
              item.totalPrice += produto.preco;
            }
            return item;
          });
      }
    });

  }

  function removeItemToCart(id){
    const produto = getProduto(id);
    
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));

        return prevItems.map((item) => {
        if(item.id == id && item.qty>0) {
            item.qty--;
            item.totalPrice -= produto.preco;
        }
        return item;
        });
      
    });
  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, removeItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}