<template>
  <div class="home">
    <div ref="p">my name is {{name}}{{age}}</div>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <p>{{obj.name}} -- {{obj.age}}</p>
    <button @click="updateAge"></button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import {reactive, ref} from 'vue'

export default {
  name: 'Home',
  //run before any lifecycle hook
  setup(){
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

    const updateAge = () => obj.value.age++
    return {updateAge,obj,name, age,handleClick,p}
  }
}
</script>
