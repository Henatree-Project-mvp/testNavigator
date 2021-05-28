import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const FavoritesScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>FavoritesScreen</Text>
      <Button
        title="Go back to Favorites"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
