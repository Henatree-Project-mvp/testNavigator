import React, { useState } from "react";
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

function DetailScreen({ route, navigation }) {
  // const { itemId, message } = route.params;
  const { value, setValue } = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      {/* <Text>ItemId : {itemId}</Text>
      <Text>Message : {message}</Text> */}

      <Button
        title="Go to detail again !!"
        onPress={() =>
          navigation.push("Detail", {
            // itemId: Math.floor(Math.random() * 100),
            itemId: itemId + 1,
            message,
          })
        }
      />
      <TextInput
        name="message"
        placeholder="tape ton message ici"
        value={value}
        onChange={(text) => {
          setValue(text);
        }}
      />
      {/* <Button
        title="Change message"
        onPress={() => navigation.setParams({ message: value })}
      /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go first screen home now!"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
