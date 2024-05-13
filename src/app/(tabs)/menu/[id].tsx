//rnfe
import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProducDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" + id }} />
      <Text>producDetailScreen : {id}</Text>
    </View>
  );
};

export default ProducDetailScreen;
