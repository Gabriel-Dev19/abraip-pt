<template>
    <div>
        <div id="sobre" class="bg-azul pt-sm-50 pb-70">
            <router-view></router-view>
            <DestaquesComponent/>
        </div>
    </div>
</template>
<script>
import DestaquesComponent from './Destaques'
export default {
  components: {
    DestaquesComponent
  }
}
</script>
<style lang="">

</style>
