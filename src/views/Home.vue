<template>
  <div class="home">
    <div>my name is {{firstName}}{{lastName}}</div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  //run before any lifecycle hook
  setup(){
    let firstName="shin"
    let lastName="wang"

    const handleClick = () => console.log('click me')
    return {firstName,lastName,handleClick}
  }
}
</script>
