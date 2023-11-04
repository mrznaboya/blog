import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
  }
};

// Helper function
const addBlogPost = (dispatch) => {
  // return async (title, content, callback) => {
  return (title, content, callback) => {
    // await axios.post('adadaf', title, content)
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
    //   try{
    //   await axios.post('adadaf', title, content)
    //   dispatch({ type: "add_blogpost", payload: { title, content } });
    //   callback();
    // } catch (e) {}
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
