<template>
  <div class="home">
    <div ref="p">my name is {{name}}{{age}}</div>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <p>{{obj.name}} -- {{obj.age}}</p>
    <button @click="updateAge"></button>
    <input type="text" v-model="name">
    <input type="text" v-model="search">
    <p>Search term - {{search}}</p>
    <div v-for="p in searchResult" :key="p">
        {{p}}
      </div>
  </div>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
    <PostList v-if="showPost" :posts="posts"/>
  </div>
  <div v-else>Loading...</div>
  <button @click="showPost = !showPost">Toggle me</button>
  <button @click="posts.pop()">delete</button>
</template>

<script>
import PostList from '../components/PostList.vue'
import {computed,onMounted,reactive, ref} from 'vue'

export default {
  name: 'Home',
  components:{PostList},
  //run before any lifecycle hook
  setup(){
    const temp =ref([])
    const search = ref('')
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
      const posts = ref([])
      const error = ref(null)
    const load = async () =>{
      try{
        let result = await fetch('https://fakestoreapi.com/products');
        let data = await result.json();
        posts.value = data
        console.log("show here",posts)
      }catch(err){
        error.value = 'Something went wrong! ' + err.message
      }
    }


    load()

    const names = ref(['mario','yoshi','luigi','toad','browser','koopa','peach'])
    const searchResult = computed(() => {
     return names.value.filter(e => e.includes(search.value))
    })

    const showPost = ref(true);
    const updateAge = () => obj.value.age++
    return {names,updateAge,obj,name, age,handleClick,p,search,searchResult,posts,showPost,load, error}
  }
}
</script>
