<template>
    <div class="post">
        <img class="post__img" :src="post.image" :alt="post.title"/>
        <h3 class="post__title">{{titleSnippet}}</h3>
        <p class="post__description">{{snippet}}</p>
        <p class="post__price">${{post.price}}</p>
        <button @click="addToCart({id:post.id,price:post.price})">Add to cart</button>
    </div>
</template>
<script>
import {computed, onMounted, onUnmounted, onUpdated,ref} from 'vue'
export default {
    props:['post','cart'],
    setup(props){
       
        onMounted(() => console.log('mounted'));
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
       // console.log("show me the propss",props)
        const titleSnippet = computed(() => {
            return props.post.title.substring(0,40)
        })
        const snippet = computed(() => {
            return props.post.description.substring(0,85) + '...'
        })

        const addToCart = (product) => {
            props.cart.push(product)
        }
        console.log("cart",props.cart)
        return {titleSnippet,snippet, addToCart}
    }
}
</script>
<style scoped>
    .post{
         box-shadow: 5px 10px 8px 10px rgb(26, 15, 15);
         padding:50px;
         height:450px;
         background-color:rgb(59, 50, 45)
    }
    .post__img{
        height:250px;
        width:200px;
    }

    .post__title,
    .post__description,
    .post__price{
        color:#eee;
    }

    .post button{
        background-color:brown;
        color:#eee;
        font-size:1.2rem;
        border:none;
        padding:.5rem 1.2rem;
        border-radius:10px;
        cursor: pointer;
        transition:all .5s
    }

     .post button:hover{
         transform: scale(1.05);
     }

</style>