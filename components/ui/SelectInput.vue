<template>
   <div class="dropdown">
        <button class="dropbtn">
            <a class="image-center-input">
                <img class="image-selected" :src="optionSelected.image" width="20" height="15">{{optionSelected.name}}({{optionSelected.symbol}})</a>
        </button>
        <!-- <p>{{optionSelected.value}}</p> -->
        
        <div class="dropdown-content">
            <a 
            @click="selectOption(item,eventEmiter)" 
            v-for="(item, event) in options" :key="index">
                <img :src="item.image" width="20" height="15">
                <p>{{item.name}}</p>
            </a>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'SelectInput',
    props: {
        options: {
            default: []
        },
        eventEmiter: {
            default: null
        },
        optionSelected: {
          type: Object,
            default: ()=>{
              return {
                value: 'default',
                symbol: '',
                name: 'Selecciona una moneda',
                image: 'https://svgsilh.com/svg/2831367.svg'
            }
          }
        }
    },
    data() {
        return {
            // optionSelected: ,
            // optionSelected: {
            //     value: 'default',
            //     symbol: '',
            //     name: 'Selecciona una moneda',
            //     image: 'https://svgsilh.com/svg/2831367.svg'
            // },
        }
    },
    methods: {
        selectOption(item,eventEmiter){
            this.optionSelected = item;
            this.$emit(eventEmiter, item);
        }
    }
}
</script>
<style lang="scss" scoped>

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