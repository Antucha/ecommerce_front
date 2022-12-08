<template>
    <!-- <div class="container flex mt-2"> -->
        <!-- <div class="right-edit-card"> -->
            <div class="card-edit-card d-flex justify-content-end my-2 w-100 mr-2">
                <div class="body-edit-card d-flex justify-content-end container-buttons p-2">
                    <div class="mx-1 d-flex flex-column container-action-button option-button-color" v-if="!inProcces">
                        <b-button pill class="button-orange" @click="sendAction('if')">
                            <font-awesome-icon icon="fa-solid fa-bolt" />
                        </b-button>
                        <p class="m-auto fw-bold orange-color">Si</p>
                    </div>
                    <div class="mx-1 d-flex flex-column container-action-button option-button-color" v-if="inProcces">
                        <b-button pill class="button-orange" @click="sendAction('and')">
                            <font-awesome-icon icon="fa-solid fa-bolt" />
                        </b-button>
                        <p class="m-auto fw-bold orange-color">Y</p>
                    </div>
                    <div class="mx-1 d-flex flex-column container-action-button option-button-color" v-if="inProcces">
                        <b-button pill class="button-orange" @click="sendAction('or')">
                            <font-awesome-icon icon="fa-solid fa-bolt" />
                        </b-button>
                        <p class="m-auto fw-bold orange-color">O</p>
                    </div>
                    <div class="mx-1 d-flex flex-column container-action-button obligatory-button-color">
                        <b-button pill class="button-violet"  @click="sendAction('then')">
                            <font-awesome-icon icon="fa-solid fa-circle-right" />                        
                        </b-button>
                        <p class="m-auto fw-bold violet-color">Acción</p>
                    </div>

                </div>
            </div>
        <!-- </div> -->
    <!-- </div> -->
</template>
<script>
export default ({
    name: 'Si',
    props:[],
    components: {  },
    props: {
        option: {
            default: 'Si'
        },
        inProcces: {
            default: false
        }
    },
    setup() {
        
    },
    data () {
        return {
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            select: null
        }
    },
    methods:{
        sendAction(event){
            this.$emit(event, event);
        }
    }
})
</script>
<style lang="scss" scoped>

// .option-button-color{
    .button-orange{
        background: #F9AB00;
    }
    .orange-color{
        color: #F9AB00;
    }
    .button-violet{
        background: #7200FF;
    }
    .violet-color{
        color: #7200FF;
    }
// }

.container-buttons{
    border-radius: 30px;
    background: #F0F0F0;
    width: fit-content;
    height: auto;
}

</style>