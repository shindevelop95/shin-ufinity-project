<template>
    <div class="header">
        <input type="text" placeholder="Enter Title" v-model="searchproduct">
        <div class="header__info">
            <div class="img__group">
                <img src="../assets/carts.png" alt="cart">
                <span>{{cart.length}}</span>
            </div>
            
            <div class="price__group"><img src="../assets/money.png" alt="sum">${{computeSum}}</div>
        </div>
    </div>
    <div class="post-list">
        <div v-for="post in searchProducts" :key="post.id">
            <SinglePost :post="post" :cart="cart"/>
        </div>
    </div>
</template>

<script>
import {computed, ref} from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    props:["posts"],
    components:{SinglePost},
    setup(props){
        const cart = ref([])
        const searchproduct = ref('')
        const temp = ref([])
        temp.value = props.posts

        const searchProducts =  computed(() => {
            return temp.value.filter(e => e.title.includes(searchproduct.value));
        })

        const computeSum = computed(() => {
            return cart.value.reduce((acc,product) => acc + product.price,0)
        })
        console.log("see sum",computeSum)
        console.log("see cart info", cart)
        return {searchproduct,searchProducts,temp,cart,computeSum}
    }
}
</script>
<style scoped>
    .header{
        width:40%;
        margin:auto;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__info img{
        height:50px;
        object-fit: contain;
        margin:0 1rem;
    }

    .img__group{
        position:relative;
    }
.img__group span{
    position:absolute;
    color:red;
    font-weight:bold;
    right:10px;
    font-size:1.2rem;
}

.price__group{
    display:flex;
    align-items:center;
    color:#eee;
    font-size:1.2rem;
}

    input{
        width:350px;
        height:10px;
        border:2px solid orangered;
        border-radius:10px;
        padding:20px;
    }

    .header__info{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .post-list{
        display:grid;
        margin-top:3rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap:10px 20px;
    }
</style>