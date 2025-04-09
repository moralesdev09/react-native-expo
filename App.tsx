import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PressableButton from "./components/PressableButton";

export default function App() {
  const [count, setcount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.pressableContainer}>
        <PressableButton
          label="Clear"
          onPress={() => setcount(0)}
        ></PressableButton>
        <PressableButton
          styles={styles.pressable}
          label="+1"
          onPress={() => setcount(count + 1)}
          onLongPress={() => {
            setcount(0);
          }}
        ></PressableButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 100,
    fontWeight: 100,
  },
  pressableContainer: {
    display: "flex",
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  pressable: {
    backgroundColor: "green",
  },
});
