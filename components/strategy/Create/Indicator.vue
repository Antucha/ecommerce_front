<template>
    <div class="container flex mt-3">
        <div class="left-edit-card mr-1">
            <h3 class=" mr-5">
                Indicador
            </h3>
        </div>
        <div class="right-edit-card">
            <div class="card-edit-card flex-around flex-wrap">
                <div class="input-button-content flex mt-2" v-for="(item, index) in badgeItems" :key="index">
                    <b-form-input size="sm" type="text" class="" :disabled="true" v-model="item.value"></b-form-input>
                    <button size="sm">+</button>
                </div>
                <div class="add-container">
                    <b-button class="mt-2" size="sm" pill @click="showModal"><font-awesome-icon icon="fa-solid fa-plus" /></b-button>Indicador
                </div>
            </div>
        </div>

        <b-modal ref="indicator-modal" size="lg" hide-footer hide-header title="Using Component Methods">
            <div class="text-center center-head-modal">
                <h3>Indicadores y métricas</h3>
                <button
                    class="
                    primary-background 
                    text-gray-100
                    rounded-lg
                    px-2
                    py-2
                    font-bold
                    "
                >
                    Inicia sesión
                </button>
                <hr/>
            </div>
            <div class="buscador">
                <!-- Using components -->
                <b-input-group prepend="Username" class="mt-3">
                    <b-form-input></b-form-input>
                    <b-input-group-append>
                        <b-button variant="info">Button</b-button>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <div class="content-body-indicator-modal">
                <div class="left-content-indicator indicator-groups">
                    <b-list-group>
                        <b-list-group-item>Cras</b-list-group-item>
                        <b-list-group-item active>Dapibus </b-list-group-item>
                        <b-list-group-item>Morbi</b-list-group-item>
                        <b-list-group-item>Porta </b-list-group-item>
                        <b-list-group-item>Vest</b-list-group-item>
                    </b-list-group>
                </div>
                <div class="rigth-content-indicator">
                    
                </div>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
        </b-modal>
    </div>
</template>
<script>
export default ({
    name: 'En',
    props:[],
    components: {  },
    props: {
        badgeItems: {
            default: [
            ]
        }
    },
    setup() {
        
    },
    data () {
        return {

        }
    } ,
    methods: {
      showModal() {
        this.$refs['indicator-modal'].show()
      },
      hideModal() {
        this.$refs['indicator-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['indicator-modal'].toggle('#toggle-btn')
      }
    }
})
</script>
<style lang="scss" scoped>
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

.center-head-modal{
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-body-indicator-modal{
    width: 100%;
    display: flex;
    .left-content-indicator{
        width: 150px;
    }
    .rigth-content-indicator{
        flex-grow: 1;
    }
}
</style>