<template>
    <div class="container flex">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                En
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="top-edit-card flex">
                <!-- <p label="DEMO EXCHANGE" prepend-inner-icon="mdi-map-marker" ></p> -->
                <button class="mr-2 ml-2" elevation="2" small >
                    <img :src="exchange.image" class="br-5 image-exchange" alt="" srcset="" v-b-tooltip.hover :title="exchange.name">
                </button>
                <button class="mr-2 ml-2" elevation="2" icon small >+</button>
            </div>
            <div class="card-edit-card" v-if="false">
                <div class="title-edit-card mr-4 ml-4">
                    <p class="font-bold">Tu dinero en binance</p>
                </div>
                <div class="body-edit-card all-width-flex">
                    <div class="money-detail-edit flex mr-4 ml-4" v-for="(money,iindex) in yourMoneyData" :key="index">
                        <img :src="money.image" alt="" srcset="">
                        <div class="money-detail-body">
                            <p>{{money.nameMoney}}</p>
                            <div class="money-quantityers flex">
                                <p class="font-bold">{{money.quantity}}</p>
                                <p class="money-dollars">{{money.equivalent.symbol}} {{money.equivalent.quantity}}</p>
                            </div>
                        </div>
                    </div>
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
        exchange: {
            default: {image: 'https://static.vecteezy.com/system/resources/previews/003/105/011/non_2x/no-data-and-lose-data-vector.jpg', name: 'No hay exchange seleccionada'}
        }
    },
    setup() {
        
    },
    data () {
        return {
            yourMoneyData: [
                {
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg",
                    nameMoney: "ETH Etherium",
                    quantity: 1.365,
                    equivalent: {
                        symbol: '$',
                        quantity: 32365.74
                    } 
                },
                {
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg",
                    nameMoney: "ETH Etherium",
                    quantity: 1.365,
                    equivalent: {
                        symbol: '$',
                        quantity: 32365.74
                    } 
                },
                {
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg",
                    nameMoney: "ETH Etherium",
                    quantity: 1.365,
                    equivalent: {
                        symbol: '$',
                        quantity: 32365.74
                    } 
                },
            ]
        }
    }   
})
</script>
<style lang="scss">
.image-exchange{
    height: 30px;
}
.left-edit-card{
    border-right: 5px solid black;
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
</style>