import Greet from "@/components/Greet";
import Lesson2 from "@/lessons/lesson2";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <ScrollView horizontal>
      <SafeAreaProvider>
        <SafeAreaView>
          <View className="">
            <Text>hello abdelwahab </Text>
            <Greet />
            <Lesson2 />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default index;
