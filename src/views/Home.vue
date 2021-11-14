<template>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
    <PostList v-if="showPost" :posts="posts"/>
  </div>
  <div v-else>Loading...</div>
 <!-- <button @click="showPost = !showPost">Toggle me</button>
  <button @click="posts.pop()">delete</button>-->
</template>
<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPost'
import {computed,onMounted,reactive, ref} from 'vue'

export default {
  name: 'Home',
  components:{PostList},
  //run before any lifecycle hook
  setup(){
    /*const search = ref('')
      const name=ref('mario') //reactive value
      const age=ref(30)
      const obj = ref({name:'shin',age:26})
      const obj2 = reactive({name:'shin2', age:27})
    //reactive does not work for primitive
      const p = ref(null)
      const handleClick = () => {
        name.value= 'xinlong'
        age.value=35
      }
      const names = ref(['e1','e2','e3','e4','e5','e6','e7'])
      const searchResult = computed(() => {
        return names.value.filter(e => e.includes(search.value))
      })
  */
    const {posts, error, load} = getPosts()
    load()
    console.log(posts)
    const showPost = ref(true);
    //const updateAge = () => obj.value.age++
    return {posts,showPost,load, error}
  }
}
</script>
<style scoped>

</style>