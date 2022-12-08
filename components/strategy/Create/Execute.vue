<template>
    <div class="container flex">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                Ejecuta
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="card-edit-card">
                <div class="body-edit-card flex flex-wrap">
                    <p class="text-separate-combo my-auto mx-2">Comienza </p> 
                    <b-form-datepicker @input="senDateTime('start',executionStartDate)" class="w-auto mb-2" style="height: 35px;" id="datepicker-start" v-model="executionStartDate"></b-form-datepicker>
                    <p class="text-separate-combo my-auto mx-2">, termina </p> 
                    <b-form-datepicker @input="senDateTime('end',executionStartDate)" class="w-auto mb-2" style="height: 35px;" id="datepicker-end" v-model="executionEndDate"></b-form-datepicker>
                    <p class="text-separate-combo my-auto mx-2"> y ejecuta </p> 
                    <b-form-input @input="senDateTime('time',executionTime)" class="w-auto"  size="sm" type="number" v-model="executionTime"></b-form-input>
                    <p class="text-separate-combo my-auto mx-2"> veces en velas de </p> 
                         <b-form-select
                            class="my-auto w-auto"
                            v-model="interval"
                            :options="intervals"
                            @change="selectInterval($event)"
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
    name: 'Execute',
    props:[],
    components: {  },
    props: {
        cryptos: {
            type: Array,
            default: ()=>{
                return []
            }
        },
        intervals: {
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
            executionStartDate: new Date(),
            executionEndDate: new Date(),
            executionTime: 0,
            interval: '1m'
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
        selectInterval(interval){
            console.log('interval: ', interval)
            this.$emit('interval', interval)
        },
        senDateTime(type,data){
            console.log(type, data)
            this.$emit(type, data)
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