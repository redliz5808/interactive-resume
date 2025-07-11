import NavImage from "@/components/NavImage";
import { Stack } from "expo-router";
import React from "react";
import { primaryFont, secondaryFamily } from "./styles";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Elizabeth W. Franklin",
        headerTitleStyle: {
          color: primaryFont,
          fontSize: "2rem",
          fontFamily: secondaryFamily,
        },
        headerTitle: () => <NavImage />
      }} />
    </Stack>
  );
}
