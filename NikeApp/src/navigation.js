import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen
          name="Produtos"
          component={ProductScreen}
          options={({navigation}) =>( {
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Carrinho")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Detalhes Do Produto"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Carrinho" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
