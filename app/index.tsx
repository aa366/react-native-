import Status from "@/components/Status";
// import Lesson1 from "@/lessons/lesson1";

import { useCounterStore } from "@/zustand/store";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <View>
        <Text style={{ marginHorizontal: "auto" }}>hello abdelwahab </Text>
        <Status />
        <Link href={"/lesson1"}> lesson 1 </Link>
        <Link href={"/lesson2"}> lesson 2</Link>
      </View>
    </>
  );
};

export default Index;
