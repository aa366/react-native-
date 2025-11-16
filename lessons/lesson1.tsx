import MyImage from "@/components/MyImage";
import TextBox from "@/components/TextBox";
import React from "react";
import { Button, Pressable, Text, View } from "react-native";

function Card() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10",
        alignSelf: "center",
        width: "100%",
        padding: 12,
        position: "relative",
        right: "-50%",
        transform: "translateX(-50%)",
        marginVertical: 20,
        boxShadow: "2px 2px 2px 2px ",
      }}
    >
      <Text>Text</Text>
      <MyImage
        source={require("@/assets/image2.png")}
        style={{ width: 150, height: 150, borderRadius: 100 }}
      />
      <Button title="Press Me" color={"grey"} />
    </View>
  );
}

const lesson1 = () => {
  const lesson1 = [
    { text: `MY Name Is abdelwahab anwr` },
    { text: `I'm 19 years old` },
    { text: `Here is my nationalitiy egypytian` },
    { text: `i love u <3` },
  ];
  function handleLongPress() {
    alert("you pressed to long move your finger");
  }
  function handlePress() {
    console.log("hi " + Date.now());
  }
  function makeAlert() {
    alert("you provoked an alert");
  }
  function handlePressOut() {
    console.warn("pressed out");
  }
  function handlePressIn() {
    console.warn("pressed in");
  }
  return (
    <View>
      <View>
        {lesson1.map((d, i) => {
          return (
            <TextBox
              text={d.text}
              key={i + d.text}
              ViewProp={{
                style: {
                  padding: 20,
                  boxShadow: "1px 1px 1px 1px  black ",
                  margin: 10,
                },
              }}
            />
          );
        })}
      </View>

      <Button title="click me" onPress={handlePress} color={"red"} />
      <Button title="click me" onPress={makeAlert} color={"crimison"} />

      <Pressable
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={{ color: "teal" }}>pressable image</Text>
        <MyImage
          source={require("@/assets/image1.png")}
          style={{ width: "50%", height: "50%" }}
        />
      </Pressable>

      <Card />
    </View>
  );
};

export default lesson1;
