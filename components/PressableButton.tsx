import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface PressableProps {
  label: string;
  styles?: object;
  onPress?: () => void;
  onLongPress?: () => void;
}
export default function PressableButton({
  label,
  styles,
  onPress,
  onLongPress,
}: PressableProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles
            ? { ...stylesDefault.pressable, ...styles }
            : stylesDefault.pressable,
          pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
const stylesDefault = StyleSheet.create({
  pressable: {
    backgroundColor: "#65558F",
    padding: 20,
    marginInline: 10,
    borderRadius: 15,
    shadowRadius: 4,
    //IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    //ANDROID
    elevation: 10,
  },
});
