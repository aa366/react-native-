import { Stack } from "expo-router";
import React from "react";
import "./global.css";

// interface Props {
//   children: React.ReactNode;
// }

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Stack>
  );
}
