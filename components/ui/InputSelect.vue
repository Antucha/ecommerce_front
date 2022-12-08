<template>
  <div class="input-outlined">
    <select :v-model="model" :options="options" @change="emitNewValue($event)" :type="type" :required="required">
    <option value="opcion-1" >Opción 1</option>
    <option value="opcion-2" >Opción 2</option>
    <option value="opcion-3" >Opción 3</option>
    </select>
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputOutlined",
  props: {
    label: {
      type: String,
      default: null
    },
    model: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    options: {
        default: []
    }
  },
  data() {
    return {
      null: null
    };
  },
  methods: {
    emitNewValue(value){
        console.log('value: ', value);
        this.$emit('value-selected', value);
    }
  }
};
</script>

<style lang="postcss" scoped>
.input-outlined {
  @apply relative;

  & input {
    @apply border rounded-lg p-3 w-full transition-transform duration-200 outline-none;

    &:focus {
      @apply border-green-800;
    }

    &:focus {
      @apply px-3 pt-4 pb-2;
    }

    &:focus ~ label {
      @apply -ml-1 text-green-800;
      top: 1px;
      font-size: 0.5em;
    }
  }

  & label {
    @apply absolute transition-all duration-200;
    left: 1rem;
    top: 0.9rem;
    color: #999;
    pointer-events: none;
  }
}
</style>
