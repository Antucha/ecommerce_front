<template>
    <div class="container flex mt-2">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                {{rule}}
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="card-edit-card">
                <div class="body-edit-card  flex-center">
                        <b-form-select
                            v-model="select"
                            :options="options"
                            label="Item"
                            required
                        ></b-form-select>
                        <p class="text-separate-combo my-auto"> Tiene </p> 
                        <b-form-select
                            v-model="select"
                            :options="items"
                            label="Item"
                            required
                        ></b-form-select>
                         <p class="text-separate-combo is-major my-auto"> Es mayor a </p> 
                         <b-form-select
                            v-model="select"
                            :options="options"
                            label="Item"
                            required
                        ></b-form-select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    name: 'Si',
    props:[],
    components: {  },
    props: {
        rule: {
            default: 'Si'
        },
        options: {
            default: []
        }
    },
    setup() {
        
    },
    data () {
        return {
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            select: null
        }
    }   
})
</script>
<style lang="scss" scoped>
.left-edit-card{
    border-right: 5px solid #FA945B;
    color: #FA945B;
}
.right-edit-card{
    .top-edit-card{
        align-items: center;
    }
    .card-edit-card{
        background: #F0EFEA;
        border-radius: 7px;
        padding: 5px;
        .title-edit-card{

        }
        .body-edit-card{
            .text-separate-combo{
                margin: 0 10px 0 10px;
            }
            .is-major{
                min-width: 70px;
            }
        }
    }
}
</style>