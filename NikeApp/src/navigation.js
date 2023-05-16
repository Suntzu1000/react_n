import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={ProductScreen}/>
        <Stack.Screen name="Detalhes Do Produto" component={ProductDetailsScreen}/>
        <Stack.Screen name="Carrinho" component={ShoppingCart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
