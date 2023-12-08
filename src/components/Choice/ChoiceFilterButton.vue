<template>
  <custom-button color="transparent" class="btn-filter" >
    <ion-icon :icon="optionsOutline" ios/>
  </custom-button>
</template>
<script>
import { optionsOutline } from 'ionicons/icons';
export default {
  name: "ChoiceFilterButton",
  data() {
    return {
      optionsOutline
    }
  },
}
</script>
<style lang="scss" scoped>
  .btn-filter {
    --border-radius: 50%;
    --padding-start:0;
    --padding-end:0;
    position: absolute;
    left:40px;
    top:28px;
    z-index: 10;
    margin:0;
    width:46px;
    height:46px;
    &::part(native) {
      box-shadow: none;
    }


    ion-icon {
      font-size:2em;
      margin:0 auto;
    }
  }
</style>