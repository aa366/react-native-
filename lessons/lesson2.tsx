import CarCard from "@/components/CarCard";
import * as Clipboard from "expo-clipboard";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

function Timer({ onClick }: { onClick: (text: string) => void }) {
  const [Time, setTime] = useState<string | number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        elevation: 3,
      }}
    >
      <Pressable onPress={() => onClick(new Date().toLocaleTimeString())}>
        <Text
          style={{
            color: "white",
            backgroundColor: "#000",
            borderRadius: 15,
            padding: 10,
          }}
        >
          {Time}
        </Text>
      </Pressable>
    </View>
  );
}

const lesson2 = () => {
  const toDos = [
    { id: 6583357832324, completed: true, task: "task 1" },
    { id: 7845326565656, completed: false, task: "task 2" },
    { id: 4354545435453, completed: true, task: "task 3" },
    { id: 4454357832324, completed: false, task: "task 4" },
  ];

  async function handleCopy(text: string) {
    await Clipboard.setStringAsync(text);
  }

  return (
    <View>
      <TextInput
        style={{
          borderWidth: 2,
          padding: 10,
          width: "60%",
          marginHorizontal: "auto",
          marginVertical: 20,
          borderRadius: 10,
        }}
      />
      <Timer onClick={handleCopy} />

      <View>
        <Text>MapList</Text>
        <FlatList
          data={toDos}
          keyExtractor={(e) => e.task}
          renderItem={(e) => {
            return (
              <Pressable onPress={() => handleCopy(e.item.task)}>
                <Text> {e.item.task} </Text>
              </Pressable>
            );
          }}
        />
      </View>
      <View>
        <CarCard
          name="Car Name"
          price={200000}
          rating={3.5}
          imgProp={{ source: require("@/assets/images/car.png") }}
          description="Here is Some Random car description"
        />
      </View>
    </View>
  );
};

export default lesson2;
