<template>
    <div class="post">
        <h3>{{post.title}}</h3>
        <p>{{snippet}}</p>
    </div>
</template>
<script>
import {computed, onMounted, onUnmounted, onUpdated} from 'vue'
export default {
    props:['post'],
    setup(props){
        onMounted(() => console.log('mounted'));
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
        console.log("show me the propss",props)
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })
        return {snippet}
    }


}
</script>