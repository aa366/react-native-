import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Status() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("Loaded");
  }, []);

  function handleStatus() {
    console.log(` ${status} from : ${Date.now()} `);
  }

  return (
    <View>
      <Pressable onPress={handleStatus}>
        <Text style={{ marginLeft: 30 }}>Status :{" " + status}</Text>
      </Pressable>
    </View>
  );
}
