import React from "react";
import { type TextProps, type ViewProps, Text, View } from "react-native";

interface Props {
  text: string;
  TextProp?: TextProps;
  ViewProp?: ViewProps;
}
const TextBox = ({ text, ViewProp, TextProp }: Props) => {
  return (
    <View {...ViewProp}>
      <Text {...TextProp}>{text}</Text>
    </View>
  );
};

export default TextBox;
