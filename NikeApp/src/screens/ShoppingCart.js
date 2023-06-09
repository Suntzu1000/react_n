import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  // @ts-ignore
  Pressable,
  // @ts-ignore
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from "../store/apiSlice";
import {
  selectSubtotal,
  // @ts-ignore
  cartSlice,
  selectDeliveryPrice,
  selectTotal,
} from "../store/cartSlice";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={
// @ts-ignore
    styles.totalsContainer}>
      <View style={
// @ts-ignore
      styles.row}>
        <Text style={
// @ts-ignore
        styles.text}>Subtotal</Text>
        <Text style={
// @ts-ignore
        styles.text}>{subtotal} US$</Text>
      </View>
      <View style={
// @ts-ignore
      styles.row}>
        <Text style={
// @ts-ignore
        styles.text}>Delivery</Text>
        <Text style={
// @ts-ignore
        styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={
// @ts-ignore
      styles.row}>
        <Text style={
// @ts-ignore
        styles.textBold}>Total</Text>
        <Text style={
// @ts-ignore
        styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {{
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  // @ts-ignore
  const dispatch = useDispatch();

  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.items);

  // @ts-ignore
  const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();

  // @ts-ignore
  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  /*const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await createPaymentIntent({
      amount: Math.floor(total * 100),
    });
    if (response.error) {
      Alert.alert("Something went wrong");
      return;
    }

    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "notJust.dev",
      paymentIntentClientSecret: response.data.paymentIntent,
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      Alert.alert("Something went wrong");
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }

    // 4. If payment ok -> create the order
    onCreateOrder();
  };*/


  const onCreateOrder = async () => {
    const result = await createOrder({
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      customer: {
        name: "gabriel",
        address: "My home",
        email: "gabrielfootze@gmail.com",
      },
    });

    if (result.data?.status === "OK") {
      Alert.alert(
        "Pedido foi enviado!",
        `A referência do seu pedido é: ${result.data.data.ref}`
      );
      dispatch(cartSlice.actions.clear());
    }
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      {/*<Pressable onPress={onCheckout} style={styles.button}>*/}
        <Text style={styles.buttonText}>
          Checkout
         {isLoading && <ActivityIndicator />}
        </Text>
     {/* </Pressable> */}
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
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
    fontWeight: "500",
    fontSize: 16,
  },
});


}}
export default ShoppingCart;