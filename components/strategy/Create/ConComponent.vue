<template>
    <div class="container flex">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                Con
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="card-edit-card">
                <div class="body-edit-card  flex-center">
                    <ui-select-input :options="cryptos" :eventEmiter="'from'" v-on:from="assignCrypro($event, 'from')"></ui-select-input>
                    <p class="text-separate-combo my-auto mx-2"> / </p> 
                    <div class="dropdown">
                        <button class="dropbtn">
                            <a class="image-center-input">
                                <img class="image-selected" :src="base.image" width="20" height="15">{{base.name}}({{base.symbol}})</a>
                        </button>
                    </div>
                         <p class="text-separate-combo my-auto mx-2"> en </p> 
                         <b-form-select
                            class="my-auto "
                            v-model="select"
                            :options="items"
                            @change="selectTradeType($event)"
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
    name: 'En',
    props:[],
    components: {  },
    props: {
        cryptos: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    setup() {
        
    },
    data () {
        return {
            contract: {
                value: 'default',
                symbol: '',
                name: 'Selecciona una moneda',
                image: 'https://svgsilh.com/svg/2831367.svg'
            },
            base: {
                number: 3, name: 'Tether', symbol: 'USDT', image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
            },
            items: [
                {value: 'usdt_perpetual', text: 'Futuros'}
            ],
            select: null
        }
    }   ,
    methods: {
        assignCrypro(crypto, type){
            console.log('Assign crypto...')
            if(type=='from'){
                this.contract = crypto;
                this.$emit('contract', {base: this.base, contract: this.contract})
            }
            if(type=='to'){
                this.base = crypto;
                this.$emit('base', this.base)
            }
        },
        selectTradeType(tradeType){
            console.log('tradeType: ', tradeType)
            this.$emit('tradeType', tradeType)
        }
    }
})
</script>
<style lang="scss" scoped>
.left-edit-card{
    border-right: 5px solid black;
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
        }
    }
}



</style>