import { useContext } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Context } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index Screen"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
