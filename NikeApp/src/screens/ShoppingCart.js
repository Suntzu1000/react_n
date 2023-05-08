import React from "react";
import { Text, FlatList } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
    >
      Carrinho de Compra
    </FlatList>
  );
};

export default ShoppingCart;
