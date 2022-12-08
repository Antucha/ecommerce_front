<template>
  <div class="spinner-block">
      <h2>#3</h2>
      <div class="spinner spinner-3"></div>
    </div>
</template>

<script>
export default {
  name: "Spinner",
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
    }
  },
  data() {
    return {
      null: null
    };
  }
};
</script>

<style lang="scss">
//variables
$bg-color: #fff; //container background-color;
$basic-dark-color: #212121; //color of the spinner
$border-width: 4px; //width of spinners border
$basic-spinner-dimensions: 125px; //width and height of spinner
$main-spinner-dimensions: $basic-spinner-dimensions - $border-width * 2; //width and height of bigger circle
$small-spinner-dimensions: $main-spinner-dimensions * 0.7; //width and height of smaller circle

  .spinners {
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    .spinner-block {
      width: $basic-spinner-dimensions;
      text-align: center;
      margin-right: 83px;
      
      &:nth-child(5n) {
        margin-right: 0px;
      }
      
      h2 {
        font: {
          family: 'Pacifico', cursive;
          size: 17px;
        }
        color: $basic-dark-color;
        margin-bottom: 20px;
      }
    }
  }


/* spinner style */
.spinner {
    position: relative;
    width: $basic-spinner-dimensions;
    height: $basic-spinner-dimensions;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
    }
  }

/* spinner-3 styles */

.spinner.spinner-3 {
  
  @keyframes scale-2 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    
    50% {
      transform: scale(0.7);
      opacity: 1;
    }
    
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  &:before {
    width: $main-spinner-dimensions;
    height: $main-spinner-dimensions;
    border-color: $basic-dark-color;
    top: 0px;
    left: 0px;
    animation: scale-2 1s linear 0s infinite;
  }
  
  &:after {
    width: $main-spinner-dimensions;
    height: $main-spinner-dimensions;
    border-color: $basic-dark-color;
    top: 0;
    left: 0;
    opacity: 0;
    animation: scale-2 1s linear 0.5s infinite;
  }
}

</style>
