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
                    <div class="dropdown">
                        <button class="dropbtn">
                            <a class="image-center-input">
                                <img class="image-selected" :src="contract.image" width="20" height="15">{{contract.name}}({{contract.symbol}})</a>
                        </button>
                        
                        <div class="dropdown-content">
                            <a 
                            @click="assignCrypro(item,'from')" 
                            v-for="(item, index) in cryptos" :key="index">
                                <img :src="item.image" width="20" height="15">
                                <p>{{item.name}}</p>
                            </a>
                        </div>
                    </div>
                    <p class="text-separate-combo my-auto mx-2"> / </p> 
                    <div class="dropdown">
                        <button class="dropbtn">
                            <a class="image-center-input">
                                <img class="image-selected" :src="base.image" width="20" height="15">{{base.name}}({{base.symbol}})</a>
                        </button>
                        
                        <!-- <div class="dropdown-content">
                            <a 
                            @click="assignCrypro(item,'to')" 
                            v-for="(item, index) in cryptos" :key="index">
                                <img :src="item.image" width="20" height="15">
                                <p>{{item.name}}</p>
                            </a>
                        </div> -->
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
<style lang="scss">
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


.dropbtn {
  // background-color: #4CAF50;
  // color: white;
  padding: 2px;
  width: 100%;
  font-size: 16px;
  border: none;
  background: white;
  border-radius: 0.5rem;
  border: 2px solid black;
  cursor: pointer;

}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-content {
  display: none;
      max-height: 150px;
    overflow: auto;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 
      0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  p{
    margin: 10px 0 10px 10px;
  }
}

.image-center-input{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.image-selected{
  margin: 10px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  // background-color: #3e8e41;
}

</style>