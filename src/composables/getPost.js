import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let result = await fetch("https://fakestoreapi.com/products");
      let data = await result.json();
      posts.value = data;
      console.log("show here", posts);
    } catch (err) {
      error.value = "Something went wrong! " + err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
