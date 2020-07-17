<template>
    <div class = "v-catalog-item">
        <img :src=" require( '../assets/images/' + people_data.image)" alt="img" width="100px">
        <p class="v-catalog-item__name">Name: {{people_data.name}}</p>
        <p class="v-catalog-item__height">Height: {{people_data.height}}</p>
        <p class="v-catalog-item__mass">Mass: {{people_data.mass}}</p>
        <p class="v-catalog-item__color">Color: {{people_data.skin_color}}</p>
        <button class="v-catalog-item__add_to_fav_btn btn">Add to cart</button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props:{
        people_data:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{

        }
    }
}
</script>


<style scoped>
    .v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
    }
</style>