<template>
  <b-card class="mx-auto">
    <b-skeleton-table
    v-if="!loaded"
  :rows="5"
  :columns="4"
  :table-props="{ bordered: true, striped: true }"
></b-skeleton-table>
    <b-table v-if="loaded" :items="items" :fields="fields" striped responsive="sm">
      <template #cell(open_action)="row">
        <!-- <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.open_action ? 'Hide' : 'Show'}} Details
        </b-button> -->
        <button @click="row.toggleDetails"  type="button" class="btn btn-default btn-circle">
          <font-awesome-icon icon="fa-solid fa-angles-down" />
        </button>
      </template>
      <template #cell(pairData)="row">
        <div class="badge-content">
          <b-badge variant="warning" style="transform: translate(0px, -5px);">
            <img style="width: 15px; border-radius:3px;" v-b-tooltip.hover :title="row.item.pairData.contract.name" :src="row.item.pairData.contract.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
          </b-badge>
          <b-badge variant="success" style="transform: translate(-10px, 5px);">
            <img style="width: 15px; border-radius:3px;" v-b-tooltip.hover :title="row.item.pairData.base.name" :src="row.item.pairData.base.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
          </b-badge>
        </div>
      </template>
      <template #cell(status)="row">
        <div class="badge-content">
          <p
            class="font-weight-bold"
            :class="getModeStatus(row.item.status)"
            label
            pill
          >{{row.item.status==0?"Cerrado":(row.item.status==1?"Abierto":"Cancelado")}}</p>
        </div>
      </template>
      <template #cell(side)="row">
        <div class="badge-content">
          <b-badge
            :class="getMode(row.item.side)"
            label
            pill
          >{{row.item.side}}</b-badge>
        </div>
      </template>
      <template #cell(pnlMoney)="row">
        <p
          label
          pill
          :class="getColorPercent(row.item.pnlMoney)"
          style="align-items: center;"
          class="flex"
        >{{row.item.pnlMoney}}
        <img class="ml-1" style="width: 15px; border-radius:3px;" v-b-tooltip.hover :title="row.item.pairData.base.name" :src="row.item.pairData.base.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
        </p>
      </template>
      <template #cell(entry_price)="row">
        <p
          label
          pill
        >${{row.item.entry_price}}</p>
      </template>
      <template #cell(close_price)="row">
        <p
          label
          pill
        >${{row.item.entry_price}}</p>
      </template>
      <template #cell(pnl)="row">
        <p
          :class="getColorPercent(row.item.pnl)"
          label
          pill
        >{{row.item.pnl}}%</p>
      </template>

      <template #row-details="row">
        <b-card>
          <b-table striped hover :items="row.item.subTable"></b-table>
        </b-card>
      </template>
    </b-table>
  </b-card>

</template>
<script>
  import {HTTP} from "../../config/HttpBase";
import Cookies from "universal-cookie";
const cookies =  new Cookies();
  import { mapGetters } from 'vuex'


export default ({
  name: 'BottomTable',
  // props:[],
  components: {  },
  props: {
    loaded: {
      default: false
    },
    items:{
      default: { open_action: false,pairData: {base: {image: ''}, contract: {image:''}}, status: 0, side: 'Short', pnlMoney: 0, entry_price: 21780, close_price: 41592, pnl: -15.2, closed: new Date(), }
    }
  },
  setup(props) {
      return {

      }
  },
  data () {
  return {
        // 
        fields: ['open_action','pairData','status','side','entryPrice','closePrice','pnlMoney','pnl','closed'],
      }
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
    getColor (calories) {
      if (calories > 10) return 'red'
      else if (calories > 6) return 'orange'
      else return 'green'
    },
    getMode(data){
      if (data=="Short") return 'bg-red-light color-red'
      else return 'bg-green-light color-green'
    },
    getModeStatus(data){
      if (data==0) return 'black-text-color'
      else if(data==1) return 'green-black-text-color'
      else return 'gray-text-color'
    },
    getColorPercent(data){
      if (data>=0) return 'color-green'
      else return 'color-red'
    },
    // getDataTable() {
    //   console.log('userInfo: ', this.userInfo)
    //   HTTP.get('/api/user/history-transaction/'+this.userInfo.user.id,{
    //     headers: this.getToken
    //   })
    //   .then(response => {
    //     // this.nameSchool = user.name;
    //     this.items = response.data.data.graphData
        
    //   })
    //   .catch(e => {
    //     this.error = true
    //     this.loading = false
    //     console.error(e)
    //   })
    // }
  } ,
  mounted() {
    // let data = cookies.get('userSesion');
    // console.log('data: ', data)

  }
})
</script>
<style lang="scss">
.v-data-table > .v-data-table__wrapper tbody tr.v-data-table__expanded__content {
    box-shadow: inset 0px 0px 0px 0px rgb(50 50 50 / 75%), inset 0px 0px 0px 0px rgb(50 50 50 / 75%)  !important;
}
</style>