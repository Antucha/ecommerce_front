<template>
    <div class="container flex mt-3">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                Acción
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="top-edit-card flex">
                <b-form-input @input="showButton=true" size="sm" type="text" class="" v-model="title"></b-form-input>
            </div>
            <button
                style="margin: 0 auto;"
                class="
                primary-background 
                text-gray-100
                rounded-lg
                px-6
                py-3
                font-bold
                mt-3
                "
                v-if="showButton"
                type="submit"
                @click="updateStrategy(title)"
                :disabled="loading"
            >
                Guardar
            </button>

            <!-- <div class="card-edit-card" v-if="false">
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
            </div> -->
        </div>
    </div>
</template>
<script>
export default ({
    name: 'Action',
    props:[],
    components: {  },
    props: {
        title: {
            default: 'No hay título '
        }
    },
    setup() {
        
    },
    data () {
        return {
            showButton: false
        }
    },
    methods: {
        updateStrategy(title){
            console.log('hijo: ',title);
            this.$emit('changeTitle', title);

            this.showButton=false;
        },
    //     updateStrategy(property, data){
    //     let token = this.userInfo.token;
    //     let DATA = {Authorization: `Bearer ${token}`};
    //     if(property=='title'){
    //       // if()
    //       console.log('DATA: ', data)
    //       DATA.title = data.title;
    //     }

    //     HTTP.put('/api/user/strategy'+data.id, DATA,{
    //       headers: {Authorization: `Bearer ${token}`}
    //     })
    //     .then(response => {
    //       console.log('updateStrategy: ',response)
    //       // this.strategyTableData = response.data.data 
    //       this.getStrategy();
    //       // this.$bvToast.toast('Se cambió el estado de tu estrategia', {
    //       //   // title: `Cambio de estado`,
    //       //   variant: 'info',
    //       //   solid: true
    //       // })
    //     })
    //     .catch(e => {

    //       console.error(e)
    //     })

    //   }
    }
})
</script>
<style lang="scss">
.image-exchange{
    height: 30px;
}
.left-edit-card{
    border-right: 5px solid #D90032;
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