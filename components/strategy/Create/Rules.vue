<template>
    <div class="contenedor">
        <!-- <strategy-create-indicator/> -->
        <strategy-create-si-component 
        :options="options"
        v-if="rule.if"
        />
        <strategy-create-si-component 
        :options="options"
        v-if="rule.and"
        />
        <trategy-create-si-component 
        :options="options"
        v-if="rule.or"
        />
        <strategy-create-then
        :contract="contract"
        v-if="rule.then"
        />
    </div>
</template>
<script>
export default ({
    name: 'Rules',
    props:[],
    components: {  },
    props: {
        options: {
            default: []
        },
        contract: {

        },
        rule: {
            
        }
        
    },
    setup() {
        
    },
    data () {
    return {

    }
  }   
})
</script>
<style lang="scss">

</style>