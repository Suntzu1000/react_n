import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={style.totalContainer}>
          <View style={style.row}>
            <Text style={style.text}>Subtotal</Text>
            <Text style={style.text}>R$ 960,00</Text>
          </View>
          <View style={style.row}>
            <Text style={style.text}>Entrega</Text>
            <Text style={style.text}>R$ 10,00</Text>
          </View>
          <View style={style.row}>
            <Text style={style.textBold}>Total</Text>
            <Text style={style.textBold}>R$ 970,00</Text>
          </View>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  }
});

export default ShoppingCart;
