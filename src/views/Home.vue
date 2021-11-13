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
  <PostList v-if="showPost" :posts="posts"/>
  <button @click="showPost = !showPost">Toggle me</button>
  <button @click="posts.pop()">delete</button>
</template>

<script>
import PostList from '../components/PostList.vue'
import {computed,reactive, ref} from 'vue'

export default {
  name: 'Home',
  components:{PostList},
  //run before any lifecycle hook
  setup(){
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

    const posts = ref([
      {title:'welcome to the blog', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled', id:1},
      {title:'top 5 CSS tips', body:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using', id:2},
    ])

    const names = ref(['mario','yoshi','luigi','toad','browser','koopa','peach'])
    const searchResult = computed(() => {
     return names.value.filter(e => e.includes(search.value))
    })

    const showPost = ref(true);
    const updateAge = () => obj.value.age++
    return {names,updateAge,obj,name, age,handleClick,p,search,searchResult,posts,showPost}
  }
}
</script>
