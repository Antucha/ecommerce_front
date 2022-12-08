<template>
    <div class="container flex mt-2">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                Luego
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="top-edit-card flex">
                <!-- <b-button 
                    size="sm"
                    class="mr-2 ml-2 d-flex" 
                    elevation="2" 
                    small 
                    pill 
                    v-for="(operation, index) in operations" 
                    :key="index"
                    :variant="operationSelected.name==operation.name?'primary':''"
                    @click="selecOperation(operation, index)">
                        <small class="font-weight-bold text-capitalize my-auto mx-2">{{operation.name}}</small>
                        <img :src="operation.image" class="br-5 image-exchange" alt="" srcset="" v-b-tooltip.hover :title="operation.name">
                </b-button>
                <button class="mr-2 ml-2" elevation="2" icon small >+</button> -->
            </div>
            <div class="card-edit-card mt-2" v-if="true">
                <div class="title-edit-card mr-4 ml-4">
                    <p class="font-bold">Tu dinero en binance</p>
                </div>
                <div class="body-edit-card all-width-flex">
                    <b-input-group append="%" class="mb-2 mr-sm-2 mb-sm-0 w-auto">
                        <b-form-input id="inline-form-input-username" placeholder=""></b-form-input>
                    </b-input-group>
                    <p class="my-auto mx-1"> de </p>
                    <ui-select-input :eventEmiter="'from'" :optionSelected="contract"></ui-select-input>
                    <p class="my-auto mx-1">como</p>
                    <b-form-select
                        class="my-auto "
                        @change="selectTradeType($event)"
                        label="Item"
                        required
                    ></b-form-select>

                </div>
                <!-- <div class="body-edit-card d-flex mt-2">
                    <div class="circle-multiple mr-2"
                    v-for="(multiple, index) in multiples" :key="index">
                        <p class="m-auto">{{multiple.text}}</p>
                    </div>

                </div>
                <div class="body-edit-card d-flex mt-2">
                    <b-input-group class="mb-2 mr-sm-2 mb-sm-0 w-auto">
                        <p>Distancia orden precio</p>
                        <b-form-input id="inline-form-input-username" placeholder="Porcentaje"></b-form-input>
                    </b-input-group>

                </div>
                <div class="body-edit-card d-flex mt-2">
                    <b-input-group append="%" class="mb-2 mr-sm-2 mb-sm-0 w-auto">
                        <p>TP</p>
                        <b-form-input id="inline-form-input-username" placeholder=""></b-form-input>
                    </b-input-group>
                    <b-input-group append="%" class="mb-2 mr-sm-2 mb-sm-0 w-auto">
                        <p>SL</p>
                        <b-form-input id="inline-form-input-username" placeholder=""></b-form-input>
                    </b-input-group>

                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    name: 'Then',
    props:[],
    components: {  },
    props: {
        operations: {
            default: ()=>{
                return [{name: 'Long', id: 'long'}, {name: 'Short', id: 'short'}]
            }
        },
        contract: {
            default: {

            }
        },

        // exchange: {
        //     default: {image: 'https://static.vecteezy.com/system/resources/previews/003/105/011/non_2x/no-data-and-lose-data-vector.jpg', name: 'No hay exchange seleccionada'}
        // }
    },
    setup() {
        
    },
    data () {
        return {
            operationSelected: {name: ''},
            multiples: [
                {value: 1, text: '1x'},
                {value: 3, text: '3x'},
                {value: 5, text: '5x'},
                {value: 10, text: '10x'},
                {value: 25, text: '25x'},
                {value: 50, text: '50x'},
                {value: 100, text: '100x'}
            ],
        }
    }   ,
    methods: {
        selecOperation(operation, index){
            this.operationSelected = operation;
            this.$emit('selectOperation',operation.name)
        }
    }
})
</script>
<style lang="scss" scoped>
.image-exchange{
    height: 15px;
}
.left-edit-card{
    border-right: 5px solid #4F68F6;
    color: #4F68F6;
    width: 100px;
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
            .money-detail-edit{
            align-items: start;
                img{
                    width: 15px;
                }
                .money-detail-body{
                    .money-dollars{
                        font-size: smaller;
                        transform: translateY(-5px);
                    }
                }
            }
        }
    }
}

.circle-multiple{
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    border: 2px solid red;
    background: white;
    cursor: pointer;
    font-size: small;
}
</style>