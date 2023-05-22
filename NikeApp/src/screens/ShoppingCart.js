import React from "react";
import { StyleSheet, Text, FlatList, View, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>R$ 960,00</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Entrega</Text>
              <Text style={styles.text}>R$ 10,00</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>R$ 970,00</Text>
            </View>
          </View>
        )}
      />
      <Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Verificar</Text>
      </Pressable>
    </>
  );
};

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
