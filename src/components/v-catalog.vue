<template>
    <div class = "v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog-list">
            <v-catalog-item
                v-for="people in this.$store.state.people"
                :key="people.name"
                :people_data="people"
                @sendName = "showChildNameInConsole"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from '../components/v-catalog-item.vue'
import {mapActions} from 'vuex'

    export default {
        name: "v-catalog",
        components:{
            vCatalogItem
        },
        data(){
            return{
                people: [
                    {
                        image: "1.jpg",
                        name: "Darth Vader",
                        height: "202",
                        mass: "136",
                        skin_color: "white"
                    },
                    {
                        image: "2.jpg",
                        name: "R2-D2",
                        height: "96",
                        mass: "32",
                        skin_color: "white,blue"
                    },
                    {
                        image: "3.jpg",
                        name: "C-3PO",
                        height: "167",
                        mass: "75",
                        skin_color: "gold"
                    },
                    {
                        image: "4.jpg",
                        name: "Leia Organa",
                        height: "150",
                        mass: "49",
                        skin_color: "light"
                    }
                    ]
                }
            },
        methods:{
            ...mapActions([
                'GET_PEOPLE_FROM_API'
            ]),
            showChildNameInConsole(data){
                console.log(data);
            },
            mounted(){
                this.GET_PEOPLE_FROM_API();
            }

        },
        props:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .v-catalog{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .v-catalog-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
</style>