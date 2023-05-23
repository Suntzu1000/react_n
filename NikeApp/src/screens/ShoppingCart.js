import React from "react";
import { StyleSheet, Text, FlatList, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import {
  selectSubtotal,
  cartSlice,
} from '../store/cartSlice';

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);

  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}> US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  return <h1></h1>
}
const styles = StyleSheet.create({
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
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ShoppingCart;
