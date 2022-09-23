import { StatusBar, SafeAreaView,  Text, View, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import TabRoutes from './routes/TabRoutes';
import {StackRoutesAuth} from './routes/stack.routesAuth'
import { CartProvider } from './cartContext';


export default function App() {
  return (
    <View style={styles.container}>
      <CartProvider>
        <StatusBar/>
        <NavigationContainer>      
          <StackRoutesAuth/>
        </NavigationContainer>
      </CartProvider>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});
