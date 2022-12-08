<template>
    <b-card
    :loading="loading"
    class="mx-1 my-12"
    min-width="475"
  >
    <div v-if="!loaded" style="min-width: 330px; min-height: 250px" class="card-head-exchange-detail mt-4 font-size-smaller">
      <div class="div-head flex">
              <b-skeleton type="avatar" style=" margin: auto;"></b-skeleton>
          <b-skeleton class="mx-1" width="90%" style=" margin: auto;"></b-skeleton>
      </div>
          <b-skeleton class="mx-1 mt-3" width="90%" style=" margin: auto;"></b-skeleton>
          <b-skeleton class="mx-1 mt-3" width="90%" style=" margin: auto;"></b-skeleton>
          <b-skeleton class="mx-1 mt-3" width="90%" style=" margin: auto;"></b-skeleton>

    </div>

    <div  v-if="loaded" class="card-head-exchange-detail flex mt-4 font-size-smaller">
      <div class="circle-content-exchange mr-2 ml-2 center-horizontal flex-center">
        <div class="circle-exchange center-horizontal flex-center primary-color-text font-size-initial">
          <font-awesome-icon  icon="fa-solid fa-hourglass" />
        </div>
      </div>  
      <div class="status-content-exchange mr-2 ml-2">
        <p class="margin-0">STATUS</p>
        <b-badge class="primary-background">{{status==1?'Activo':'Pausado'}}</b-badge>
        <!-- <p class="margin-0">Waiting for condition to be met</p> -->
      </div>
      <div class="start-content-exchange mr-2 ml-2">
        <p class="margin-0">START<span></span></p>
        <p class="margin-0">{{startDate}}</p>
      </div>
      <!-- <div class="exchange-content-exchange mr-2 ml-2">
        <div class="start-content-exchange">
          <p class="margin-0">EXCHANGE</p>
          <p class="margin-0 flex"><img style="width: 20px; height: auto" :src="exchange.image" alt="" srcset="">{{exchange.name}}</p>
        </div>
      </div> -->
    </div>
    <div v-if="loaded" class="legend-container mt-2">
      <div class="item-legend-exchange" v-for="(item, index) in cardDataItems">
        <p class="mx-4 flex">{{item.name}}: 
          <span class="font-bold flex" style="">
          <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
          <!-- <font-awesome-icon :icon="item.icon"></font-awesome-icon> -->
          <!-- <b-icon :class="item.class" :icon="item.icon"></b-icon> -->
          <img 
            class="mx-1"
            :src="item.icon" 
            alt="" 
            srcset=""
            style=" width: 20px; border-radius: 3px;"
          >
          {{item.content}}
          </span>
        </p>
        <hr class="mx-4"/>
      </div>
    </div>
  </b-card>
</template>
<script>
  import { mapGetters } from 'vuex'

export default ({
  name: 'LeftCard',
  // props:[],
  components: {  },
  props: {
    loaded: {
      default: false
    },
    counter: {
      default: 0
    },
    startDate: {
      default: new Date()
    },
    cardDataItems: {
      default: []
    },
    exchange: {
      default: '',
    },
    status: { default: 1}
  },
  setup(props) {
    // console.log('props: ', props)
    // let startDate = props.startDate?props.startDate:new Date();
    // let counter = props.counter?props.counter:0;
      return {
        
      }
  },
  data () {
    return {
      loading: false,
      selection: 1,
      dataCard: null,
      cardData:{
        // status: 'NOT YET TRIGERED',
        date: new Date(),
        exchange: {
          icon: '',
          name: 'Binance'
        },
        
      },
      // itemsCard: [
      //     {
      //       content: 'Binance',
      //       icon: 'x-diamond-fill',
      //       name: 'Exchange',
      //       class: 'gold-color'
      //     },
      //     {
      //       content: 'Este ' + startDate +'' ,
      //       icon: 'fa-solid fa-user-secret',
      //       name: 'Start'
      //     },
      //     {
      //       content: '0/10 times',
      //       icon: 'mdi-minus',
      //       name: 'Action trigered'
      //     },
      //     {
      //       content: '$ '+counter,
      //       icon: '$',
      //       name: 'Exchange Fees Paid'
      //     }
      //   ]
    }
  },
  mounted() {
    // let data = cookies.get('userSesion');
    // console.log('data: ', this.itemsCard)

  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      isLogged: 'isLogged',
      getToken: 'getToken',
      userInfo: 'userInfo'
    })
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  // computed: {
  //   getData(){
  //     return{
  //       startActions: this.startDate
  //     }
  //   }
  // }
})
</script>
<style lang="scss">
.circle-exchange{
  width: 50px;
  height: 50px;
  border: 5px solid grey;
  border-radius: 50%;
}
</style>