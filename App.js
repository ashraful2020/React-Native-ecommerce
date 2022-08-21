import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Navigation from "./src/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    cabin: require("./assets/Fonts/Cabin-VariableFont_wdth,wght.ttf"),
    Oswald: require("./assets/Fonts/Oswald-VariableFont_wght.ttf"),
    Roboto: require("./assets/Fonts/RobotoSlab-VariableFont_wght.ttf"),
    SecularOne: require("./assets/Fonts/SecularOne-Regular.ttf"),
  });
  if (fontsLoaded) {
    return <Text>Loading...............</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
