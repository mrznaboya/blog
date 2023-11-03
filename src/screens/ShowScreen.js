import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";

const ShowScreen = () => {
  const route = useRoute();
  const id = route.params.id;
  const { state } = useContext(Context);

  // Helper function
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
