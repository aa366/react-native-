import React from "react";
import {
  Image,
  ImageProps,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  price: number;
  imgProp: ImageProps;
  name: string;
  rating: number;
  description: string;
  btnTitle?: string;
}

const CarCard = ({
  price,
  imgProp,
  name,
  rating,
  description,
  btnTitle = "Add To Cart",
}: Props) => {
  return (
    <View style={styles.cont}>
      <View style={styles.mainView}>
        <Text style={styles.price}>${price}</Text>
        <Image style={styles.img} {...imgProp} />
        <View style={styles.textView}>
          <Text>{name}</Text>
          <Text>Rating: {rating}</Text>
        </View>
        <Text>{description}</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.white}>{btnTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  price: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 5,
    width: "auto",
    padding: 5,
    wordWrap: "none",
    alignSelf: "flex-start",
    margin: 5,
  },
  img: { width: "100%", height: 180, objectFit: "cover" },
  mainView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  cont: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "black",
    color: "#fff",
    borderRadius: 5,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },
  white: { color: "white" },
});
export default CarCard;
