import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    cabin: require("./assets/Fonts/Cabin-VariableFont_wdth,wght.ttf"),
    Oswald: require("./assets/Fonts/Oswald-VariableFont_wght.ttf"),
    Roboto: require("./assets/Fonts/RobotoSlab-VariableFont_wght.ttf"),
    SecularOne: require("./assets/Fonts/SecularOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return "Loading";
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
