import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-pextrabold text-7xl">Aora !</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="border bg-black text-white p-3 rounded">Go to home</Link>
    </View>
  );
}
