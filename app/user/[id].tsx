import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Main() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Users {id} </Text>
    </View>
  );
}
