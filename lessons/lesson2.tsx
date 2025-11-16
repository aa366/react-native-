import CarCard from "@/components/CarCard";
import React from "react";
import { Text, View } from "react-native";

const lesson2 = () => {
  return (
    <View>
      <Text>lesson2</Text>
      <CarCard
        name="Car Name"
        price={200000}
        rating={3.5}
        imgProp={{ source: require("@/assets/images/car.png") }}
        description="Here is Some Random car description"
      />
    </View>
  );
};

export default lesson2;
