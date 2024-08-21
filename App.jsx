import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
function App() {
  return (
    <View style={styles.container}>
      <Text className='text-red-500'>Open up App.tsx to start working on your app!</Text>
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

export default AppEntryPoint;
