import React from "react";
import { FlatList, Image, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productSlice";

const ProductScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  // @ts-ignore
  const products = useSelector((state) => state.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setselectedProduct(item.id))
            navigation.navigate("Detalhes Do Produto");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
