<template>
  <div class="flex flex-col">
    <div class="head-index-dashboard all-width-flex">
      <div class="data-left flex">
        <!-- <div class="data-card mr-2" :key="index" v-for="(data, index) in dataHeads">
          <div class="data-card-head flex">
            <p class="margin-0">{{data.title}}</p>
            <b-icon class="gold-color" :icon="data.icon"></b-icon>
          </div>
          <div class="data-card-body flex primary-color-text">
            <h3 class="size-">{{data.money.symbol}}</h3>
            <h2>{{data.money.quantity}}</h2>
          </div>

        </div> -->
      </div>
      <div class="actions-right">
        <nuxt-link to="/strategy">
                  <button
            class="
              pink-primary-background
              text-gray-100
              border-radius-21
              px-6
              py-3
              font-bold
            "
            type="submit"
          >
            Crear estrategia
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="body-index-dashboard">
      <div class="head-stratgy-table all-width-flex">
        <div class="head-stratgy-table-left">
          <p>Estrategias</p>
        </div>
      </div>
      <div class="body-stratgy-table">
        <b-tabs content-class="mt-3" align="right">
          <b-tab title="Todos" active>
            <b-skeleton-wrapper :loading="loading" >
              <template #loading>
                <b-card class="mt-3 flex card-skeleton-content" v-for="(item, index) in 5" :key="index">
                  <b-skeleton class="mx-1" type="avatar"></b-skeleton>
                  <b-skeleton width="100%"></b-skeleton>
                </b-card>
              </template>

              <!-- <b-card> -->
                <div class="card-strategy mt-3 card-withoug-elements animate__animated animate__bounce" v-if="(strategyTableData.length == 0) && !loading">
                  <img class="image-not-element" src="https://i.pinimg.com/564x/b4/ae/67/b4ae6712663a6ba5472834ecf5d65b36.jpg" alt="" srcset="">
                  <h2>No se encontraron estrategias en tu perfil.</h2>
                </div>  
                  <div class="card-strategy mt-3  " v-for="(stratgy, index) in strategyTableData" :key="index">
                    <div class="icon-container icon-trategy-state center-horizontal mx-3 flex-center">
                      <div class="blobs-container flex-center" v-if="stratgy.state">
                        <div class="blob green flex-center center-horizontal gray-text-color">
                          <!-- <font-awesome-icon icon="fa-solid fa-user-secret" />
                          <FontAwesomeIcon icon="fa-solid fa-ship" /> -->
                          <font-awesome-icon icon="fa-solid fa-circle-pause" />
                        </div>
                      </div>
                      <div v-else class="icon-body state-icon center-horizontal gold-color">
                        <font-awesome-icon icon="fa-solid fa-clock-four" />
                      </div>

                    </div>
                    <div class="title-container center-horizontal">
                      <div class="title-body center-horizontal">
                        <NuxtLink class="mb-0 font-size-medium black-text-color" :to="'strategy/'+stratgy.id">
                          {{stratgy.mainTitle}}
                        </NuxtLink>
                        <b-icon :class="stratgy.classArrow" :icon="stratgy.happensIcon"></b-icon>
                      </div>
                    </div>
                    <div class="chart-container center-horizontal">
                      <div class="graph-chart-body">
                        <graph-line-data
                        :width="100"
                        :height="50"
                        :dataGraph="stratgy.dataChart"
                        ></graph-line-data>
                      </div>
                    </div>
                    <div class="state-container center-horizontal">
                      <div class="state-body center-column">
                        <p>Estado</p>
                        <div class="container">
                          <div class="row">
                            <span class="toggle-switch">
                                    <input 
                                      type="checkbox" value="" 
                                      v-model="stratgy.state"
                                      @click="updateStrategy('status', stratgy.state, stratgy.id)"
                                    />
                                    <span class="circle"></span>
                                </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="state-action-container center-horizontal">
                      <div class="action-body center-column">
                        <p>EN</p>
                        <!-- <b-icon class="gold-color" :icon="stratgy.enIncon"></b-icon> -->
                        <img 
                          class="mx-1"
                          v-b-tooltip.hover 
                          :title="stratgy.exchange.name"
                          :src="stratgy.exchange.image" 
                          alt="" 
                          srcset=""
                          style=" width: 20px; border-radius: 3px;"
                        >
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.happens.text}}</p>
                        <p :class="stratgy.happens.percent>0?'green-lima-color':'red-color'" class="mb-0">{{stratgy.happens.symbol}}{{stratgy.happens.percent}}%</p>
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.moneyState.text}}</p>
                        <p :class="stratgy.moneyState.count>0?'green-lima-color':'red-color'" class="mb-0 flex" style="align-items: center;">
                          <img class="ml-1" style="width: 15px; border-radius:3px;" v-b-tooltip.hover.left :title="stratgy.moneyState.symbol.name" :src="stratgy.moneyState.symbol.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
                          <!-- {{stratgy.moneyState.symbol.image}} -->
                          {{stratgy.moneyState.count}}
                        </p>
                      </div>
                    </div>
                  </div>
              <!-- </b-card> -->
              </b-skeleton-wrapper>

          </b-tab>
          <b-tab title="Activos">
            <b-skeleton-wrapper :loading="loading" >
              <template #loading>
                <b-card class="mt-3 flex card-skeleton-content" v-for="(item, index) in 5" :key="index">
                  <b-skeleton class="mx-1" type="avatar"></b-skeleton>
                  <b-skeleton width="100%"></b-skeleton>
                </b-card>
              </template>

              <!-- <b-card> -->
                <div class="card-strategy mt-3 card-withoug-elements" v-if="(strategyTableData.length == 0) && !loading">
                  <img class="image-not-element" src="https://i.pinimg.com/564x/b4/ae/67/b4ae6712663a6ba5472834ecf5d65b36.jpg" alt="" srcset="">
                  <h2>No se encontraron estrategias en tu perfil.</h2>
                </div>  
                  <div class="card-strategy mt-3  animate__animated animate__bounce" v-if="stratgy.state" v-for="(stratgy, index) in strategyTableData" :key="index">
                    <div class="icon-container icon-trategy-state center-horizontal mx-3 flex-center">
                      <div class="blobs-container flex-center" v-if="stratgy.state">
                        <div class="blob green flex-center center-horizontal gray-text-color">
                          <!-- <font-awesome-icon icon="fa-solid fa-user-secret" />
                          <FontAwesomeIcon icon="fa-solid fa-ship" /> -->
                          <font-awesome-icon icon="fa-solid fa-circle-pause" />
                        </div>
                      </div>
                      <div v-else class="icon-body state-icon center-horizontal gold-color">
                        <font-awesome-icon icon="fa-solid fa-clock-four" />
                      </div>

                    </div>
                    <div class="title-container center-horizontal">
                      <div class="title-body center-horizontal">
                        <NuxtLink class="mb-0 font-size-medium black-text-color" :to="'strategy/'+stratgy.id">
                          {{stratgy.mainTitle}}
                        </NuxtLink>
                        <b-icon :class="stratgy.classArrow" :icon="stratgy.happensIcon"></b-icon>
                      </div>
                    </div>
                    <div class="chart-container center-horizontal">
                      <div class="graph-chart-body">
                        <graph-line-data
                        :width="100"
                        :height="50"
                        :dataGraph="stratgy.dataChart"
                        ></graph-line-data>
                      </div>
                    </div>
                    <div class="state-container center-horizontal">
                      <div class="state-body center-column">
                        <p>Estado</p>
                        <div class="container">
                          <div class="row">
                            <span class="toggle-switch">
                                    <input 
                                      type="checkbox" value="" 
                                      v-model="stratgy.state"
                                      @click="updateStrategy('status', stratgy.state, stratgy.id)"
                                    />
                                    <span class="circle"></span>
                                </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="state-action-container center-horizontal">
                      <div class="action-body center-column">
                        <p>EN</p>
                        <!-- <b-icon class="gold-color" :icon="stratgy.enIncon"></b-icon> -->
                        <img 
                          class="mx-1"
                          v-b-tooltip.hover 
                          :title="stratgy.exchange.name"
                          :src="stratgy.exchange.image" 
                          alt="" 
                          srcset=""
                          style=" width: 20px; border-radius: 3px;"
                        >
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.happens.text}}</p>
                        <p :class="stratgy.happens.percent>0?'green-lima-color':'red-color'" class="mb-0">{{stratgy.happens.symbol}}{{stratgy.happens.percent}}%</p>
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.moneyState.text}}</p>
                        <p :class="stratgy.moneyState.count>0?'green-lima-color':'red-color'" class="mb-0 flex" style="align-items: center;">
                          <img class="ml-1" style="width: 15px; border-radius:3px;" v-b-tooltip.hover.left :title="stratgy.moneyState.symbol.name" :src="stratgy.moneyState.symbol.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
                          <!-- {{stratgy.moneyState.symbol.image}} -->
                          {{stratgy.moneyState.count}}
                        </p>
                      </div>
                    </div>
                  </div>
              <!-- </b-card> -->
              </b-skeleton-wrapper>
          </b-tab>
          <b-tab title="Pausados">
            <b-skeleton-wrapper :loading="loading" >
              <template #loading>
                <b-card class="mt-3 flex card-skeleton-content" v-for="(item, index) in 5" :key="index">
                  <b-skeleton class="mx-1" type="avatar"></b-skeleton>
                  <b-skeleton width="100%"></b-skeleton>
                </b-card>
              </template>

              <!-- <b-card> -->
                <div class="card-strategy mt-3 card-withoug-elements" v-if="(strategyTableData.length == 0) && !loading">
                  <img class="image-not-element" src="https://i.pinimg.com/564x/b4/ae/67/b4ae6712663a6ba5472834ecf5d65b36.jpg" alt="" srcset="">
                  <h2>No se encontraron estrategias en tu perfil.</h2>
                </div>  
                  <div class="card-strategy mt-3  " v-if="!stratgy.state" v-for="(stratgy, index) in strategyTableData" :key="index">
                    <div class="icon-container icon-trategy-state center-horizontal mx-3 flex-center">
                      <div class="blobs-container flex-center" v-if="stratgy.state">
                        <div class="blob green flex-center center-horizontal gray-text-color">
                          <!-- <font-awesome-icon icon="fa-solid fa-user-secret" />
                          <FontAwesomeIcon icon="fa-solid fa-ship" /> -->
                          <font-awesome-icon icon="fa-solid fa-circle-pause" />
                        </div>
                      </div>
                      <div v-else class="icon-body state-icon center-horizontal gold-color">
                        <font-awesome-icon icon="fa-solid fa-clock-four" />
                      </div>

                    </div>
                    <div class="title-container center-horizontal">
                      <div class="title-body center-horizontal">
                        <NuxtLink class="mb-0 font-size-medium black-text-color" :to="'strategy/'+stratgy.id">
                          {{stratgy.mainTitle}}
                        </NuxtLink>
                        <b-icon :class="stratgy.classArrow" :icon="stratgy.happensIcon"></b-icon>
                      </div>
                    </div>
                    <div class="chart-container center-horizontal">
                      <div class="graph-chart-body">
                        <graph-line-data
                        :width="100"
                        :height="50"
                        :dataGraph="stratgy.dataChart"
                        ></graph-line-data>
                      </div>
                    </div>
                    <div class="state-container center-horizontal">
                      <div class="state-body center-column">
                        <p>Estado</p>
                        <div class="container">
                          <div class="row">
                            <span class="toggle-switch">
                                    <input 
                                      type="checkbox" value="" 
                                      v-model="stratgy.state"
                                      @click="updateStrategy('status', stratgy.state, stratgy.id)"
                                    />
                                    <span class="circle"></span>
                                </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="state-action-container center-horizontal">
                      <div class="action-body center-column">
                        <p>EN</p>
                        <!-- <b-icon class="gold-color" :icon="stratgy.enIncon"></b-icon> -->
                        <img 
                          class="mx-1"
                          v-b-tooltip.hover 
                          :title="stratgy.exchange.name"
                          :src="stratgy.exchange.image" 
                          alt="" 
                          srcset=""
                          style=" width: 20px; border-radius: 3px;"
                        >
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.happens.text}}</p>
                        <p :class="stratgy.happens.percent>0?'green-lima-color':'red-color'" class="mb-0">{{stratgy.happens.symbol}}{{stratgy.happens.percent}}%</p>
                      </div>
                    </div>
                    <div class="state-happens-container center-horizontal">
                      <div class="state-happens-body center-column">
                        <p>{{stratgy.moneyState.text}}</p>
                        <p :class="stratgy.moneyState.count>0?'green-lima-color':'red-color'" class="mb-0 flex" style="align-items: center;">
                          <img class="ml-1" style="width: 15px; border-radius:3px;" v-b-tooltip.hover.left :title="stratgy.moneyState.symbol.name" :src="stratgy.moneyState.symbol.image" alt="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" srcset="">
                          <!-- {{stratgy.moneyState.symbol.image}} -->
                          {{stratgy.moneyState.count}}
                        </p>
                      </div>
                    </div>
                  </div>
              <!-- </b-card> -->
              </b-skeleton-wrapper>
          </b-tab>
          <!-- <b-tab title="Completados"><p>I'm the second tab</p></b-tab> -->
        </b-tabs>
        
      </div>
    </div>
  </div>
</template>
<script>
import {HTTP} from "../config/HttpBase";

import { mapMutations, mapGetters } from 'vuex'

export default {
  // middleware: "authenticated"
  components: {
  },
  data() {
    return {
      loading: true,
      dataHeads: [
        {
          title: "Ganancias",
          icon: null,
          money: {
            symbol: "$",
            quantity: 120.20
          }
        },
        {
          title: "Balance",
          icon: "x-diamond-fill",
          money: {
            symbol: "$",
            quantity: 120.20
          }
        }
      ],
      actionsTable: ["Todos", "Activos", "Pausados", "Completados"],
      strategyTableData: [
        // {
        //   url: 'scalping-ssl-chnael-ema',
        //   stateIcon: 'pause-circle-fill',
        //   mainTitle: "Scalpíng SSL Chnael + EMA",
        //   happensIcon: 'arrow-up',
        //   dataChart: [],
        //   state: 1,
        //   enIncon: 'x-diamond-fill',
        //   happens: {
        //     text: "Crecimiento",
        //     symbol:"+",
        //     percent: 5
        //   },
        //   moneyState: {
        //     text: "Ganancia neta",
        //     count: 30,
        //     symbol: "$"
        //   }
        // },
        // {
        //   url: 'scalping-ssl-chnael-ema2',
        //   stateIcon: 'paused',
        //   mainTitle: "Scalpíng SSL Ch sfg hd nael + EMA2",
        //   happensIcon: 'top',
        //   dataChart: [],
        //   state: 0,
        //   enIncon: 'x-diamond-fill',
        //   happens: {
        //     text: "Crecimiento",
        //     symbol:"+",
        //     percent: 5
        //   },
        //   moneyState: {
        //     text: "Ganancia neta",
        //     count: 30,
        //     symbol: "$"
        //   }
        // }
      ],
      pesoData: {
        chartData: [
          ['Day', 'Peso (Kg)', 'Meta'],
          [0, 4, 5]
          [4,9,6]
        ],
        type: 'LineChart',
        options: {
          // legend: { position: 'none'},
          vAxis: {minValue: 0.0},
          trendlines: {
            1: {
              type: 'linear',
              color: 'green',
              lineWidth: 3,
              opacity: 0.3,
              showR2: true,
              visibleInLegend: true
            }
          }

        }
      },
    }
  },
  methods: {
    getStrategys(){
      let token = this.userInfo.token;
      let body = {
        headers: {Authorization: `Bearer ${token}`},
        exchange: this.exchange
      }
      HTTP.get('/api/user/strategy', body,{
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(response => {
        this.strategyTableData = response.data.data;
        this.loading = false;
      })
      .catch(e => {
        console.error(e)
      })
    },
    updateStrategy(property, data,id){
      let token = this.userInfo.token;
      let DATA = {Authorization: `Bearer ${token}`};
      if(property=='status'){
        // if()
        console.log('DATA: ', data)
        DATA.status = data==1?'paused':'active';
      }

      HTTP.put('/api/user/strategy/'+id, DATA,{
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(response => {
        this.strategyTableData = response.data.data 
        this.$bvToast.toast('Se cambió el estado de tu estrategia', {
          // title: `Cambio de estado`,
          variant: 'info',
          solid: true
        })
      })
      .catch(e => {

        console.error(e)
      })

    }
  },
    computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      isLogged: 'isLogged',
      getToken: 'getToken',
      userInfo: 'userInfo'
    }),
    
  },
  mounted() {
    // let data = cookies.get('userSesion');
    // console.log('data: ', data)
    this.getStrategys();

  }

};
</script>

<style lang="scss">

.card-skeleton-content{
  .card-body{
      display: flex;
  align-items: center;
  }

}

.border-radius-21{
  border-radius: 52px;
}

.title-container{
  width: 250px;
}

.graph-chart-body{
  max-width: 300px;
  max-height: 100px;
}

.card-strategy{
  background: white;
  border-radius: 20px;
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  min-height: 100px;
}


.state-icon{
  width: 30px;
  height: 30px;
  background: lightgray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

.green-lima-color{
  color: #73F700;
}

.red-color{
  color: red;
}

.image-not-element{
  width: 300px;
  height: 300px;
}

.card-withoug-elements{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

// 
.toggle-switch {
    position: relative;
    background: #fff;
    width: 65px;
    height: 30px;
    line-height: 30px;
    border-radius: 40px;
    border: 1px solid #767272;
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
}
.toggle-switch input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
.toggle-switch span.circle {
    display: inline-block;
    margin: 0 !important;
    width: 22px;
    height: 22px;
    background: #ddd;
    border: 1px solid #ddd;
    border-radius: 40px;
    transition: 0.1s linear;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
}
.toggle-switch span.circle::after {
    content: "OFF";
    position: absolute;
    left: 27px;
    top: -4px;
    font-weight: 500;
    font-size: 12px;
    color: #ddd;
}
.toggle-switch input[type="checkbox"]:checked + span.circle {
    transform: translate(34px, -50%);
    background: rgb(255, 255, 255);
    border: 1px solid #333;
    box-shadow: 0px -1px 18px -4px rgba(0,0,0,1);
    -webkit-box-shadow: 0px -1px 18px -4px rgba(0,0,0,1);
    -moz-box-shadow: 0px -1px 18px -4px rgba(0,0,0,1);
}
.toggle-switch input[type="checkbox"]:checked + span.circle::before {
    content: "LIVE";
    position: absolute;
    right: 30px;
    top: -4px;
    font-weight: 500;
    font-size: 12px;
    color: rgb(33, 170, 255);
}

.pulse {
  position: absolute;
  // top: 35%;
  // left: 40%;
  // transform: translate(-505, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #b3b5b3;
  border: 2px solid #33ff00;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0 0 0 3px #33ff00,
          0 0 0 2px #878787;
  }

  .pulse:before,
  .pulse:after {
      content: '';
      position: absolute;
      left: -30px;
      top: -30px;
      right: -30px;
      bottom: -30px;
      border: 7px solid #33ff00;
      border-radius: 50%;
      animation: animate 1s linear infinite
  }

  .pulse:after {
      animation-delay: 1s;
  }

  @keyframes animate {
      0% {
          transform: scale(0.6);
      }
      50% {
          transform: scale(0.5);
      }

      100% {
          transform: scale(0.4);
      }
  }

.icon-trategy-state{
  max-width: 300px;
  width: 90px;
}



// 
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

// * {
//   box-sizing: border-box;
// }

// body {
//   background-image: linear-gradient(to bottom, #cfd9df 0%, #e2ebf0 100%);
//   font-family: 'Source Sans Pro', sans-serif;
//   margin: 0;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// }

.blobs-container {
  display: flex;
}

.blob {
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 10px;
  height: 30px;
  width: 30px;
  transform: scale(1);
  animation: pulse-black 2s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.blob.white {
  background: white;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  animation: pulse-white 2s infinite;
}

@keyframes pulse-white {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.blob.red {
  background: rgba(255, 82, 82, 1);
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}

.blob.orange {
  background: rgba(255, 121, 63, 1);
  box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
  animation: pulse-orange 2s infinite;
}

@keyframes pulse-orange {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
  }
}

.blob.yellow {
  background: rgba(255, 177, 66, 1);
  box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);
  animation: pulse-yellow 2s infinite;
}

@keyframes pulse-yellow {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
  }
}

.blob.blue {
  background: rgba(52, 172, 224, 1);
  box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
  animation: pulse-blue 2s infinite;
}

@keyframes pulse-blue {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
  }
}

.blob.green {
  background: rgba(51, 217, 178, 1);
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
  animation: pulse-green 1s infinite;
}

@keyframes pulse-green {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
  }
}

.blob.purple {
  background: rgba(142, 68, 173, 1);
  box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
  animation: pulse-purple 2s infinite;
}

@keyframes pulse-purple {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
  }
}


</style>
