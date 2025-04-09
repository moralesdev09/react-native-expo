import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setcount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressable} onPress={() => setcount(0)}>
          <Text>Clear</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => setcount(count + 1)}
          onLongPress={() => setcount(0)}
        >
          <Text>+1</Text>
        </Pressable>
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
  pressableContainer: {
    display: "flex",
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
